export const dataKamus = [
  {
    id: "0001",
    kosakata: "variable",
    pengertian:
      "Wadah data nu digunakeun pikeun ngumpulkeun nilai-nilai dina pemrograman.",
    note: [
      "Ngaran variabel teu boleh make spasi.",
      "Variabel bisa diinisialisasi nganggo keyword var, let, atanapi const.",
      "Nilai variabel bisa robah kapanana program aya ngajalan.",
    ],
    contohkode: "var x = 10;",
  },
  {
    id: "0002",
    kosakata: "function",
    pengertian:
      "Blok kode nu bisa dipanggil ku bagian lian tina program kanggo ngajalkeun tugas tertentu.",
    note: [
      "Fungsi bisa ngandung parameter sareng ngembalikeun nilai.",
      "Fungsi ogé bisa digunakeun kanggo ngorganisir kode janten potongan-potongan nu leuwih cilik.",
      "Fungsi bisa disimpen dina variabel sareng dipaskeun salaku argumen ka fungsi lian.",
    ],
    contohkode: "function tambah(a, b) { return a + b; }",
  },
  {
    id: "0003",
    kosakata: "looping",
    pengertian:
      "Proses ngajalankeun blok kode sacara terus menerus aya dasarkeun kondisi tertentu.",
    note: [
      "Digunakeun kanggo neruskeun tugas tertentu nepi ka kondisi nu ditetepkeun kahirna terpenuhi.",
      "Jenis perulangan umum antara lian for, while, sareng do-while.",
      "Perulangan bisa digunakeun kanggo ngolah kumpulan data sapertos array.",
    ],
    contohkode: "for (let i = 0; i < 5; i++) { console.log(i); }",
  },
  {
    id: "0004",
    kosakata: "array",
    pengertian:
      "Struktur data nu bisa ngadung leuwih ti hiji nilai dina hiji variabel.",
    note: [
      "Nilai dina array bisa diakses nganggo indeks, ngaleungitkeun tina indeks 0.",
      "Array bisa ngandung jenis data naon wae, kaleungitan array lian atanapi objek.",
      "Metode umum dina array antara lian push, pop, shift, sareng unshift.",
    ],
    contohkode: "var numbers = [1, 2, 3, 4, 5];",
  },
  {
    id: "0005",
    kosakata: "object",
    pengertian:
      "Struktur data anu kompleks nu dipaké kanggo ngadung kumpulan data sareng/atawa fungsi dina hiji variabel.",
    note: [
      "Objek aya tina pasangan kunci (key) sareng nilai (value), anu disebut properti.",
      "Nilai properti objek bisa dumasarkeun kana jenis data naon wae, kaleungitan fungsi atanapi objek lian.",
      "Properti objek bisa diakses nganggo sintaksis titik atanapi kurung siku.",
    ],
    contohkode: "var person = { name: 'John', age: 30, gender: 'male' };",
  },
  {
    id: "0006",
    kosakata: "string",
    pengertian:
      "Jinis data anu dipaké kanggo ngrepreséntasikeun téks atanapi urutan karakter.",
    note: [
      "String dumasarkeun ku tanda kutip hiji (') atanapi tanda kutip ganda (\").",
      "String bisa diakses sareng dimanipulasi karakter ku karakter.",
      "Beberapa metode umum dina string antara lian length, indexOf, sareng slice.",
    ],
    contohkode: "var message = 'Hello, World!';",
  },
  {
    id: "0007",
    kosakata: "conditioning",
    pengertian:
      "Proses ngamimitian keputusan dina program dasarkeun kondisi tertentu.",
    note: [
      "Pengkondisian nyadiakeun jalan kanggo ngajalankeun kode tertentu upami kondisi nu ditetepkeun kahirna terpenuhi, sareng kode lian upami henteu.",
      "Jenis pengkondisian umum antara lian if, else, sareng else if.",
      "Pengkondisian ogé bisa ngagunakeun operator perbandingan sareng logika kanggo nglucutan kondisi.",
    ],
    contohkode:
      "var x = 10; if (x > 5) { console.log('x leuwih gedé ti 5'); } else { console.log('x leuwih cilik atanapi sarua jeung 5'); }",
  },
  {
    id: "0008",
    kosakata: "operator",
    pengertian:
      "Simbol atanapi frase anu dipaké kanggo ngajalankeun operasi tertentu kana hiji atanapi leuwih nilai.",
    note: [
      "Operator bisa dipaké kanggo ngajalankeun operasi matematika, perbandingan, logika, atanapi manipulasi nilai.",
      "Beberapa jinis operator umum antara lian operator aritmatika (+, -, *, /), operator perbandingan (==, !=, <, >), sareng operator logika (&&, ||, !).",
      "Urutan eksekusi operasi dina hiji ekspresi bisa dikontrol nganggo tanda kurung.",
    ],
    contohkode: "var result = 10 + 5;",
  },
  {
    id: "0009",
    kosakata: "method",
    pengertian:
      "Fungsi anu nyambung sareng objek tertentu sareng dipaké kanggo ngajalkeun tugas tertentu dina objek éta.",
    note: [
      "Metode umumna dipaké kanggo ngamanipulasi atanapi ngakses properti objek.",
      "Beberapa objek bawaan dina JavaScript ngandung metode bawaan, sapertos metode dina array atanapi string.",
      "Objek ogé bisa ngandung metode anu ditambahan manual.",
    ],
    contohkode:
      "var person = { name: 'John', age: 30, greet: function() { return 'Halo, panalungtik kuring ' + this.name; } };",
  },
  {
    id: "0010",
    kosakata: "paramater",
    pengertian:
      "Variabel anu dipaké dina deklarasi fungsi atanapi metode, anu nilainya geus dirojong nalika fungsi atanapi metode éta dipanggil.",
    note: [
      "Paramater dipaké kanggo ngirim data ka dina fungsi atanapi metode.",
      "Paramater bisa ngandung nilai default, anu bakal dipaké upami teu dirojong nilai nalika panggilan fungsi atanapi metode.",
      "Jumlah sareng jinis paramater dina panggilan fungsi kedah sesuai sareng deklarasi fungsi.",
    ],
    contohkode: "function pangkat(a, b) { return Math.pow(a, b); }",
  },
  {
    id: "0011",
    kosakata: "variable",
    pengertian:
      "Wadah data nu digunakeun pikeun ngumpulkeun nilai-nilai dina pemrograman.",
    note: [
      "Ngaran variabel teu boleh make spasi.",
      "Variabel bisa diinisialisasi nganggo keyword var, let, atanapi const.",
      "Nilai variabel bisa robah kapanana program aya ngajalan.",
    ],
    contohkode: "var x = 10;",
  },
  {
    id: "0012",
    kosakata: "function",
    pengertian:
      "Blok kode nu bisa dipanggil ku bagian lian tina program kanggo ngajalkeun tugas tertentu.",
    note: [
      "Fungsi bisa ngandung parameter sareng ngembalikeun nilai.",
      "Fungsi ogé bisa digunakeun kanggo ngorganisir kode janten potongan-potongan nu leuwih cilik.",
      "Fungsi bisa disimpen dina variabel sareng dipaskeun salaku argumen ka fungsi lian.",
    ],
    contohkode: "function tambah(a, b) { return a + b; }",
  },
  {
    id: "0013",
    kosakata: "looping",
    pengertian:
      "Proses ngajalankeun blok kode sacara terus menerus aya dasarkeun kondisi tertentu.",
    note: [
      "Digunakeun kanggo neruskeun tugas tertentu nepi ka kondisi nu ditetepkeun kahirna terpenuhi.",
      "Jenis perulangan umum antara lian for, while, sareng do-while.",
      "Perulangan bisa digunakeun kanggo ngolah kumpulan data sapertos array.",
    ],
    contohkode: "for (let i = 0; i < 5; i++) { console.log(i); }",
  },
  {
    id: "0014",
    kosakata: "array",
    pengertian:
      "Struktur data nu bisa ngadung leuwih ti hiji nilai dina hiji variabel.",
    note: [
      "Nilai dina array bisa diakses nganggo indeks, ngaleungitkeun tina indeks 0.",
      "Array bisa ngandung jenis data naon wae, kaleungitan array lian atanapi objek.",
      "Metode umum dina array antara lian push, pop, shift, sareng unshift.",
    ],
    contohkode: "var numbers = [1, 2, 3, 4, 5];",
  },
  {
    id: "0015",
    kosakata: "object",
    pengertian:
      "Struktur data anu kompleks nu dipaké kanggo ngadung kumpulan data sareng/atawa fungsi dina hiji variabel.",
    note: [
      "Objek aya tina pasangan kunci (key) sareng nilai (value), anu disebut properti.",
      "Nilai properti objek bisa dumasarkeun kana jenis data naon wae, kaleungitan fungsi atanapi objek lian.",
      "Properti objek bisa diakses nganggo sintaksis titik atanapi kurung siku.",
    ],
    contohkode: "var person = { name: 'John', age: 30, gender: 'male' };",
  },
  {
    id: "0016",
    kosakata: "string",
    pengertian:
      "Jinis data anu dipaké kanggo ngrepreséntasikeun téks atanapi urutan karakter.",
    note: [
      "String dumasarkeun ku tanda kutip hiji (') atanapi tanda kutip ganda (\").",
      "String bisa diakses sareng dimanipulasi karakter ku karakter.",
      "Beberapa metode umum dina string antara lian length, indexOf, sareng slice.",
    ],
    contohkode: "var message = 'Hello, World!';",
  },
  {
    id: "0017",
    kosakata: "conditioning",
    pengertian:
      "Proses ngamimitian keputusan dina program dasarkeun kondisi tertentu.",
    note: [
      "Pengkondisian nyadiakeun jalan kanggo ngajalankeun kode tertentu upami kondisi nu ditetepkeun kahirna terpenuhi, sareng kode lian upami henteu.",
      "Jenis pengkondisian umum antara lian if, else, sareng else if.",
      "Pengkondisian ogé bisa ngagunakeun operator perbandingan sareng logika kanggo nglucutan kondisi.",
    ],
    contohkode:
      "var x = 10; if (x > 5) { console.log('x leuwih gedé ti 5'); } else { console.log('x leuwih cilik atanapi sarua jeung 5'); }",
  },
  {
    id: "0018",
    kosakata: "operator",
    pengertian:
      "Simbol atanapi frase anu dipaké kanggo ngajalankeun operasi tertentu kana hiji atanapi leuwih nilai.",
    note: [
      "Operator bisa dipaké kanggo ngajalankeun operasi matematika, perbandingan, logika, atanapi manipulasi nilai.",
      "Beberapa jinis operator umum antara lian operator aritmatika (+, -, *, /), operator perbandingan (==, !=, <, >), sareng operator logika (&&, ||, !).",
      "Urutan eksekusi operasi dina hiji ekspresi bisa dikontrol nganggo tanda kurung.",
    ],
    contohkode: "var result = 10 + 5;",
  },
  {
    id: "0019",
    kosakata: "method",
    pengertian:
      "Fungsi anu nyambung sareng objek tertentu sareng dipaké kanggo ngajalkeun tugas tertentu dina objek éta.",
    note: [
      "Metode umumna dipaké kanggo ngamanipulasi atanapi ngakses properti objek.",
      "Beberapa objek bawaan dina JavaScript ngandung metode bawaan, sapertos metode dina array atanapi string.",
      "Objek ogé bisa ngandung metode anu ditambahan manual.",
    ],
    contohkode:
      "var person = { name: 'John', age: 30, greet: function() { return 'Halo, panalungtik kuring ' + this.name; } };",
  },
  {
    id: "0020",
    kosakata: "paramater",
    pengertian:
      "Variabel anu dipaké dina deklarasi fungsi atanapi metode, anu nilainya geus dirojong nalika fungsi atanapi metode éta dipanggil.",
    note: [
      "Paramater dipaké kanggo ngirim data ka dina fungsi atanapi metode.",
      "Paramater bisa ngandung nilai default, anu bakal dipaké upami teu dirojong nilai nalika panggilan fungsi atanapi metode.",
      "Jumlah sareng jinis paramater dina panggilan fungsi kedah sesuai sareng deklarasi fungsi.",
    ],
    contohkode: "function pangkat(a, b) { return Math.pow(a, b); }",
  },
  {
    id: "0021",
    kosakata: "variable",
    pengertian:
      "Wadah data nu digunakeun pikeun ngumpulkeun nilai-nilai dina pemrograman.",
    note: [
      "Ngaran variabel teu boleh make spasi.",
      "Variabel bisa diinisialisasi nganggo keyword var, let, atanapi const.",
      "Nilai variabel bisa robah kapanana program aya ngajalan.",
    ],
    contohkode: "var x = 10;",
  },
  {
    id: "0022",
    kosakata: "function",
    pengertian:
      "Blok kode nu bisa dipanggil ku bagian lian tina program kanggo ngajalkeun tugas tertentu.",
    note: [
      "-Fungsi bisa ngandung parameter sareng ngembalikeun nilai.",
      "-Fungsi ogé bisa digunakeun kanggo ngorganisir kode janten potongan-potongan nu leuwih cilik.",
      "-Fungsi bisa disimpen dina variabel sareng dipaskeun salaku argumen ka fungsi lian.",
    ],
    contohkode: "function tambah(a, b) { return a + b; }",
  },
  {
    id: "0023",
    kosakata: "looping",
    pengertian:
      "Proses ngajalankeun blok kode sacara terus menerus aya dasarkeun kondisi tertentu.",
    note: [
      "-Digunakeun kanggo neruskeun tugas tertentu nepi ka kondisi nu ditetepkeun kahirna terpenuhi.",
      "-Jenis perulangan umum antara lian for, while, sareng do-while.",
      "-Perulangan bisa digunakeun kanggo ngolah kumpulan data sapertos array.",
    ],
    contohkode: "for (let i = 0; i < 5; i++) { console.log(i); }",
  },
  {
    id: "0024",
    kosakata: "array",
    pengertian:
      "Struktur data nu bisa ngadung leuwih ti hiji nilai dina hiji variabel.",
    note: [
      "-Nilai dina array bisa diakses nganggo indeks, ngaleungitkeun tina indeks 0.",
      "-Array bisa ngandung jenis data naon wae, kaleungitan array lian atanapi objek.",
      "-Metode umum dina array antara lian push, pop, shift, sareng unshift.",
    ],
    contohkode: "var numbers = [1, 2, 3, 4, 5];",
  },
  {
    id: "0025",
    kosakata: "object",
    pengertian:
      "Struktur data anu kompleks nu dipaké kanggo ngadung kumpulan data sareng/atawa fungsi dina hiji variabel.",
    note: [
      "-Objek aya tina pasangan kunci (key) sareng nilai (value), anu disebut properti.",
      "-Nilai properti objek bisa dumasarkeun kana jenis data naon wae, kaleungitan fungsi atanapi objek lian.",
      "-Properti objek bisa diakses nganggo sintaksis titik atanapi kurung siku.",
    ],
    contohkode: "var person = { name: 'John', age: 30, gender: 'male' };",
  },
  {
    id: "0026",
    kosakata: "string",
    pengertian:
      "Jinis data anu dipaké kanggo ngrepreséntasikeun téks atanapi urutan karakter.",
    note: [
      "-String dumasarkeun ku tanda kutip hiji (') atanapi tanda kutip ganda (\").",
      "-String bisa diakses sareng dimanipulasi karakter ku karakter.",
      "-Beberapa metode umum dina string antara lian length, indexOf, sareng slice.",
    ],
    contohkode: "var message = 'Hello, World!';",
  },
  {
    id: "0027",
    kosakata: "conditioning",
    pengertian:
      "Proses ngamimitian keputusan dina program dasarkeun kondisi tertentu.",
    note: [
      "-Pengkondisian nyadiakeun jalan kanggo ngajalankeun kode tertentu upami kondisi nu ditetepkeun kahirna terpenuhi, sareng kode lian upami henteu.",
      "-Jenis pengkondisian umum antara lian if, else, sareng else if.",
      "-Pengkondisian ogé bisa ngagunakeun operator perbandingan sareng logika kanggo nglucutan kondisi.",
    ],
    contohkode:
      "var x = 10; if (x > 5) { console.log('x leuwih gedé ti 5'); } else { console.log('x leuwih cilik atanapi sarua jeung 5'); }",
  },
  {
    id: "0028",
    kosakata: "operator",
    pengertian:
      "Simbol atanapi frase anu dipaké kanggo ngajalankeun operasi tertentu kana hiji atanapi leuwih nilai.",
    note: [
      "-Operator bisa dipaké kanggo ngajalankeun operasi matematika, perbandingan, logika, atanapi manipulasi nilai.",
      "-Beberapa jinis operator umum antara lian operator aritmatika (+, -, *, /), operator perbandingan (==, !=, <, >), sareng operator logika (&&, ||, !).",
      "-Urutan eksekusi operasi dina hiji ekspresi bisa dikontrol nganggo tanda kurung.",
    ],
    contohkode: "var result = 10 + 5;",
  },
  {
    id: "0029",
    kosakata: "method",
    pengertian:
      "Fungsi anu nyambung sareng objek tertentu sareng dipaké kanggo ngajalkeun tugas tertentu dina objek éta.",
    note: [
      "-Metode umumna dipaké kanggo ngamanipulasi atanapi ngakses properti objek.",
      "-Beberapa objek bawaan dina JavaScript ngandung metode bawaan, sapertos metode dina array atanapi string.",
      "-Objek ogé bisa ngandung metode anu ditambahan manual.",
    ],
    contohkode:
      "var person = { name: 'John', age: 30, greet: function() { return 'Halo, panalungtik kuring ' + this.name; } };",
  },
  {
    id: "0030",
    kosakata: "parameter",
    pengertian:
      "Variabel anu dipaké dina deklarasi fungsi atanapi metode, anu nilainya geus dirojong nalika fungsi atanapi metode éta dipanggil.",
    note: [
      "-Paramater dipaké kanggo ngirim data ka dina fungsi atanapi metode.",
      "-Paramater bisa ngandung nilai default, anu bakal dipaké upami teu dirojong nilai nalika panggilan fungsi atanapi metode.",
      "-Jumlah sareng jinis paramater dina panggilan fungsi kedah sesuai sareng deklarasi fungsi.",
    ],
    contohkode: "function pangkat(a, b) { return Math.pow(a, b); }",
  },
];
export const dataKamusLength = dataKamus.length;
