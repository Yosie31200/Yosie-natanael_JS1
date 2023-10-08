// Contoh penggunaan pernyataan if-else
let nilai = 75;
if (nilai >= 70) {
  console.log("Anda lulus!");
} else {
  console.log("Anda tidak lulus.");
}

// Contoh penggunaan nested if
let x = 10;
if (x > 5) {
  if (x < 15) {
    console.log("Nilai x berada di antara 5 dan 15.");
  }
}

// Contoh penggunaan switch-case
let hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Hari ini adalah hari kerja.");
}

// Contoh penggunaan for statement
for (let i = 0; i < 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while loop
let j = 0;
while (j < 5) {
  console.log("Iterasi ke-" + j);
  j++;
}

// Contoh penggunaan do-while loop
let k = 0;
do {
  console.log("Iterasi ke-" + k);
  k++;
} while (k < 5);

// Contoh penggunaan fungsi
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log("Hasil penjumlahan: " + hasil);
