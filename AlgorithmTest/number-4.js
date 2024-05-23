// Number 4 (Pengurangan matrix)

function penguranganMatrix(matrix) {
  let diagonalPertama = 0;
  let diagonalKedua = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    diagonalPertama += matrix[i][i];
    diagonalKedua += matrix[i][n - 1 - i];
  }

  return Math.abs(diagonalPertama - diagonalKedua);
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const result = penguranganMatrix(matrix);
console.log(result);
