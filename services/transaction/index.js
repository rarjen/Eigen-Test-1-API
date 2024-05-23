const { Transactions, Books, Members } = require("../../models");
const ApiError = require("../../helpers/errorHandler");

const createTransaction = async (req) => {
  const { member_code, book_code } = req.body;

  // Melakukan checking Book
  const checkBook = await Books.findOne({ where: { code: book_code } });

  if (!checkBook) {
    throw ApiError.notFound("Data buku tidak ditemukan!");
  }
  if (checkBook.stock <= 0) {
    throw ApiError.badRequest("Buku tidak tersedia");
  }

  // Melakukan checking Member
  const checkMember = await Members.findOne({ where: { code: member_code } });
  if (!checkMember) {
    throw ApiError.notFound("Pengguna belum terdaftar!");
  }

  // Melakukan checking Transaction
  const checkTransaction = await Transactions.findOne({
    where: { member_id: checkMember.id },
  });
  if (checkTransaction && !checkTransaction.date_returned) {
    throw ApiError.badRequest("Peminjaman buku maksimal 1");
  }
  if (checkTransaction && checkTransaction.status_penalty === 1) {
    throw ApiError.badRequest("Anda sedang medapatkan penalty 3 hari");
  }

  // Melakukan create Transactions
  const result = await Transactions.create({
    member_id: checkMember.id,
    book_id: checkBook.id,
    status_penalty: 0,
    status_pinjam: 1,
    date_borrowed: new Date(),
  });

  // Melakukan update Stock
  const updateStockBook = await Books.update(
    { stock: checkBook.stock - 1 },
    { where: { code: book_code } }
  );

  return { result, updateStockBook };
};

const updateTransaction = async (req) => {
  const { date_returned } = req.body;
  let status_penalty = 0;

  const checkTransactions = await Transactions.findOne({
    where: { id: req.params.id },
  });
  if (!checkTransactions) {
    throw ApiError.notFound("Transaksi tidak ditemukan");
  }

  const dateBorrowed = new Date(checkTransactions.date_borrowed);
  const dateReturned = new Date(date_returned);
  const diffTime = Math.abs(dateReturned - dateBorrowed);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 7) {
    status_penalty = 1;
  }

  const result = await Transactions.update(
    { date_returned: new Date(dateReturned), status_penalty },
    { where: { id: req.params.id } }
  );

  const checkBook = await Books.findOne({
    where: { book_code: checkTransactions.book_code },
  });

  const updateStockBook = await Books.update(
    { stock: checkBook.stock + 1 },
    { where: { book_code: checkTransactions.book_code } }
  );

  return { result, updateStockBook };
};

module.exports = {
  createTransaction,
  updateTransaction,
};
