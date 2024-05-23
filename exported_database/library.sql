-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Bulan Mei 2024 pada 02.11
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`id`, `code`, `title`, `author`, `stock`, `createdAt`, `updatedAt`) VALUES
(1, 'JK-45', 'Harry Potter', 'J.K Rowling', 1, '2024-05-22 23:44:27', '2024-05-22 23:44:27'),
(2, 'SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 0, '2024-05-22 23:44:27', '2024-05-23 00:02:07'),
(3, 'TW-11', 'Twilight', 'Stephenie Meyer', 1, '2024-05-22 23:44:27', '2024-05-22 23:44:27'),
(4, 'HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 0, '2024-05-22 23:44:27', '2024-05-23 00:03:53'),
(5, 'NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1, '2024-05-22 23:44:27', '2024-05-22 23:44:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `members`
--

INSERT INTO `members` (`id`, `code`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'M001', 'Angga', '2024-05-22 23:44:27', '2024-05-22 23:44:27'),
(2, 'M002', 'Ferry', '2024-05-22 23:44:27', '2024-05-22 23:44:27'),
(3, 'M003', 'Putri', '2024-05-22 23:44:27', '2024-05-22 23:44:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240522034749-create-members.js'),
('20240522034828-create-books.js'),
('20240522082001-create-transactions.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `member_id` int(11) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL,
  `status_penalty` int(11) DEFAULT NULL,
  `date_borrowed` datetime DEFAULT NULL,
  `date_returned` datetime DEFAULT NULL,
  `status_pinjam` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `member_id`, `book_id`, `status_penalty`, `date_borrowed`, `date_returned`, `status_pinjam`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 0, '2024-05-23 06:44:53', '2024-05-23 07:03:08', 0, '2024-05-23 01:44:53', '2024-05-23 01:44:53'),
(5, 2, 2, 0, '2024-05-23 00:02:07', NULL, 1, '2024-05-23 00:02:07', '2024-05-23 00:02:07'),
(6, 1, 4, 0, '2024-05-23 00:03:53', NULL, 1, '2024-05-23 00:03:53', '2024-05-23 00:03:53');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
