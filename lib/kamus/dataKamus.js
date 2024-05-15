export const dataKamus = [
  {
    id: "0001",
    kosakata: "variable",
    pengertian:
      "Wadah data nu digunakeun pikeun ngumpulkeun nilai-nilai dina pemrograman. Variabel téh ngawengku sababaraha informasi, saperti angka, tulisan, atanapi status, nu bisa dirobah-robah kapanana program dijalankeun.",
    note: [
      "Ngaran variabel teu boleh make spasi.",
      "Variabel bisa diinisialisasi nganggo keyword var, let, atanapi const.",
      "Nilai variabel bisa robah kapanana program aya ngajalan.",
    ],
    kode: true,
    contohkode: "var x = 10;",
  },
  {
    id: "0002",
    kosakata: "function",
    pengertian:
      "Blok kode nu bisa dipanggil ku bagian lian tina program kanggo ngajalkeun tugas tertentu. Fungsi téh ngandung instruksi-instruksi anu dieksekusi kaedah panggilan, nu bisa ngembalikeun nilai sareng ngagaweun parobihan di antara bagian kode sanésana.",
    note: [
      "Fungsi bisa ngandung parameter sareng ngembalikeun nilai.",
      "Fungsi ogé bisa digunakeun kanggo ngorganisir kode janten potongan-potongan nu leuwih cilik.",
      "Fungsi bisa disimpen dina variabel sareng dipaskeun salaku argumen ka fungsi lian.",
    ],
    kode: true,
    contohkode: "function tambah(a, b) { return a + b; }",
  },
  {
    id: "0003",
    kosakata: "looping",
    pengertian:
      "Proses ngajalankeun blok kode sacara terus menerus aya dasarkeun kondisi tertentu. Perulangan téh dipaké kanggo neruskeun tugas tertentu nepi ka kondisi nu ditetepkeun kahirna terpenuhi.",
    note: [
      "Digunakeun kanggo neruskeun tugas tertentu nepi ka kondisi nu ditetepkeun kahirna terpenuhi.",
      "Jenis perulangan umum antara lian for, while, sareng do-while.",
      "Perulangan bisa digunakeun kanggo ngolah kumpulan data sapertos array.",
    ],
    kode: true,
    contohkode: "for (let i = 0; i < 5; i++) { console.log(i); }",
  },
  {
    id: "0004",
    kosakata: "array",
    pengertian:
      "Struktur data nu bisa ngadung leuwih ti hiji nilai dina hiji variabel. Array téh ngawengku hiji kumpulan nilai anu diatur dina hiji variabel, diakses nganggo indeks tina 0 nepi ka n indeks - 1.",
    note: [
      "Nilai dina array bisa diakses nganggo indeks, ngaleungitkeun tina indeks 0.",
      "Array bisa ngandung jenis data naon wae, kaleungitan array lian atanapi objek.",
      "Metode umum dina array antara lian push, pop, shift, sareng unshift.",
    ],
    kode: true,
    contohkode: "var numbers = [1, 2, 3, 4, 5];",
  },
  {
    id: "0005",
    kosakata: "object",
    pengertian:
      "Struktur data anu kompleks nu dipaké kanggo ngadung kumpulan data sareng/atawa fungsi dina hiji variabel. Objek téh ngawengku kumpulan pasangan kunci (key) sareng nilai (value), anu disebut properti.",
    note: [
      "Objek aya tina pasangan kunci (key) sareng nilai (value), anu disebut properti.",
      "Nilai properti objek bisa dumasarkeun kana jenis data naon wae, kaleungitan fungsi atanapi objek lian.",
      "Properti objek bisa diakses nganggo sintaksis titik atanapi kurung siku.",
    ],
    kode: true,
    contohkode: "var person = { name: 'John', age: 30, gender: 'male' };",
  },
  {
    id: "0006",
    kosakata: "method",
    pengertian:
      "Fungsi anu terasosiasi sareng objek, nu bisa dieksekusi nalika objek dirobah atanapi dieusian.",
    note: [
      "Metode ngandung instruksi-instruksi anu bisa dieksekusi ku objek sanés.",
      "Metode biasana diakses nganggo sintaksis titik.",
    ],
    kode: true,
    contohkode:
      "var objek = { nama: 'John', sambut: function() { return 'Halo, ' + this.nama; }}; console.log(objek.sambut());",
  },
  {
    id: "0007",
    kosakata: "parameter",
    pengertian:
      "Nilai anu dilebokkeun ka fungsi atanapi metode nalika dipanggil.",
    note: [
      "Paraméter dipaké kanggo ngirim informasi ka fungsi atawa metode.",
      "Paraméter bisa dianggo ngaliwatan tina argumen nalika manggil fungsi atanapi metode.",
    ],
    kode: true,
    contohkode:
      "function tambah(a, b) { return a + b; } console.log(tambah(5, 3));",
  },
  {
    id: "0008",
    kosakata: "argument",
    pengertian: "Nilai anu dilebokkeun nalika panggilan fungsi atanapi metode.",
    note: [
      "Argumen dipaké kanggo ngirim data ka fungsi atanapi metode.",
      "Argumen bisa diropéa ku paraméter fungsi atanapi metode.",
    ],
    kode: true,
    contohkode:
      "function tambah(a, b) { return a + b; } console.log(tambah(5, 3));",
  },
  {
    id: "0009",
    kosakata: "class",
    pengertian:
      "Blueprint pikeun ngestruktur kana objek sapopoé, dieusian pikeun ngahasilkeun objek-objek sapertos ieu.",
    note: [
      "Class ngandung properti sareng metode kanggo ngatur objek sapertos objek-objek nu dirobah dumasar kana class.",
      "Class bisa ngandung konstruktor pikeun nginisialisasi nilai properti.",
    ],
    kode: true,
    contohkode:
      "class Manusia { constructor(nama, umur) { this.nama = nama; this.umur = umur; } sambut() { return 'Halo, nama saya ' + this.nama + ' dan saya berusia ' + this.umur + ' tahun'; } } var orang = new Manusia('John', 30); console.log(orang.sambut());",
  },
  {
    id: "0010",
    kosakata: "inheritance",
    pengertian:
      "Proses nu ngawengku ngaganti fungsi atanapi metode tina class sanés sareng ngaitkeun fungsi atanapi metode éta kana class anu anyar.",
    note: [
      "Inheritance ngamungkinkeun class anu anyar ngaganti atanapi ngaitkeun properti sareng metode tina class sanés.",
      "Class anu anyar bisa narima properti sareng metode tina class sanés naon wae nu aya dina inheritance.",
    ],
    kode: true,
    contohkode:
      "class Hewan { makan() { return 'Hewan makan'; } } class Kucing extends Hewan { meong() { return 'Meong'; } } var kucing = new Kucing(); console.log(kucing.makan()); console.log(kucing.meong());",
  },
  {
    id: "0011",
    kosakata: "encapsulation",
    pengertian:
      "Pangalaman pikeun ngadegkeun data sareng metode nu nyandak data dina hiji unit kana class.",
    note: [
      "Encapsulation ngajalankeun énérgi sakulawarga dina class pikeun ngamimitian aksés dumasar kana panambatan pribadi.",
      "Mimitian aksés dumasar kana panambatan pribadi ngagantikeun anu nu anyar ngalaman sakulawarga dina class.",
    ],
    kode: true,
    contohkode:
      "class Manusia { #nama; constructor(nama) { this.#nama = nama; } getNama() { return this.#nama; } setNama(namaBaru) { this.#nama = namaBaru; } } var orang = new Manusia('John'); console.log(orang.getNama()); orang.setNama('Doe'); console.log(orang.getNama());",
  },
  {
    id: "0012",
    kosakata: "polymorphism",
    pengertian:
      "Kemampuan suatu objek pikeun ngaganti tanpa merubah identitasna.",
    note: [
      "Polymorphism ngajalankeun suatu objek pikeun ngaganti atanapi ngaitkeun fungsi atanapi metode dina class sanés.",
      "Polymorphism ngadegkeun kemampuan suatu objek pikeun ngaganti tanpa merubah identitasna atanapi tanpa merubah anu dirobah.",
    ],
    kode: true,
    contohkode:
      "class Bentuk { luas() { return 0; } } class Lingkaran extends Bentuk { luas(jariJari) { return Math.PI * jariJari * jariJari; } } class Persegi extends Bentuk { luas(panjang, lebar) { return panjang * lebar; } } var lingkaran = new Lingkaran(); var persegi = new Persegi(); console.log(lingkaran.luas(7)); console.log(persegi.luas(5, 5));",
  },
  {
    id: "0013",
    kosakata: "interface",
    pengertian: "Séjén kontrak nu ngandung métode-métode tanpa implementasi.",
    note: [
      "Interface ngandung métode-métode atanapi properti-properti anu kudu diimplementasikeun dina class sanés.",
      "Class anu implement interface kudu ngajalankeun métode-métode anu diakses dina interface.",
    ],
    kode: true,
    contohkode:
      "interface Hewan { makan(): string; } class Kucing implements Hewan { makan() { return 'Makanan kucing'; } } var kucing = new Kucing(); console.log(kucing.makan());",
  },
  {
    id: "0014",
    kosakata: "abstraction",
    pengertian: "Ngawengku ngeusian kana detil internal dina hiji unit.",
    note: [
      "Abstraction ngagantikeun detil internal dina hiji unit sareng njaga informasi anu teu penting teu keur dipertunjukkeun.",
      "Abstraction ngajalankeun énérgi sakulawarga pikeun ngeusian rincian-rincian dina hiji unit.",
    ],
    kode: true,
    contohkode:
      "abstract class Bentuk { abstract luas(): number; } class Lingkaran extends Bentuk { luas(jariJari: number): number { return Math.PI * jariJari * jariJari; } } var lingkaran = new Lingkaran(); console.log(lingkaran.luas(7));",
  },
  {
    id: "0015",
    kosakata: "database",
    pengertian:
      "Kumpulan data anu diorganisir dina cara anu bisa diakses, dimutahirkeun, sareng dimanipulasi.",
    note: [
      "Database bisa ngandung data struktur, tina sederhana ka kompleks.",
      "Database dipaké kanggo ngadegkeun, ngaganti, ngahapus, sareng nyimpen data.",
    ],
    kode: true,
    contohkode: `connection.query('SELECT * FROM mahasiswa', (error, results, fields) => {if (error) throw error; console.log('SELECT Result:'); console.log(results);});`,
  },
  {
    id: "0016",
    kosakata: "SQL",
    pengertian:
      "Bahasa kueri relational database nu dipaké kanggo ngadegkeun, ngaganti, ngahapus, sareng nyimpen data.",
    note: [
      "SQL ngandung perintah-perintah kayak SELECT, INSERT, UPDATE, DELETE.",
      "SQL dipaké di sakulawarga sistem manajemén database.",
    ],
    kode: true,
    contohkode: `connection.query('SELECT * FROM mahasiswa', (error, results, fields) => {console.log(results)});`,
  },
  {
    id: "0017",
    kosakata: "API",
    pengertian:
      "Antarmuka program aplikasi nu ngijinan dua aplikasi pikeun komunikasi sacara salaku.",
    note: [
      "API ngandung métode-métode nu bisa dipanggil pikeun ngaganti atanapi ngakses data.",
      "API bisa ngandung métode-métode pikeun operasi-operasi kakomputer, pikeun ngolah data.",
    ],
    kode: false,
    contohkode: "https://api.example.com/data",
  },
  {
    id: "0018",
    kosakata: "framework",
    pengertian:
      "Kumpulan kode prakarsa nu bisa dirobah pikeun ngasupkeun solusi umum kanggo masalah anu sering disalurkeun.",
    note: [
      "Framework ngandung library, tools, sareng standar nyieun, ngeusian, sareng mimitian aplikasi.",
      "Framework bisa ngajalankeun kamampuan dasar pikeun nyieun aplikasi leuwih cepet sareng efisien.",
    ],
    kode: false,
    contohkode: "Express.js, Angular, React",
  },
  {
    id: "0019",
    kosakata: "library",
    pengertian:
      "Kumpulan kode prakarsa nu bisa dipaké ulang pikeun ngeusian aplikasi atanapi bagian-bagian aplikasi.",
    note: [
      "Library dipaké kanggo ngaganti fungsi-fungsi anu umum dina pangembangan aplikasi.",
      "Library bisa diunduh sareng dipaké sacara pribadi atanapi komersial.",
    ],
    kode: false,
    contohkode: "jQuery, lodash, moment.js",
  },
  {
    id: "0020",
    kosakata: "frontend",
    pengertian:
      "Bagian tampilan aplikasi web anu langsung dipersaksikeun ku pengguna.",
    note: [
      "Frontend ngandung halaman web, komponén, sareng elemén anu dieusian pikeun nampilkeun informasi.",
      "Frontend bisa ngadegkeun interaksi pengguna, presentasi data, sareng antarmuka pengguna.",
    ],
    kode: false,
    contohkode: "HTML, CSS, JavaScript",
  },
  {
    id: "0021",
    kosakata: "backend",
    pengertian:
      "Bagian aplikasi web anu nguruskeun operasi-oprasi nu teu langsung dipersaksikeun ku pengguna, saperti manajemén database sareng auténtikasi pengguna.",
    note: [
      "Backend ngandung server, database, sareng logika bisnis.",
      "Backend nganggo teknologi kayak Node.js, PHP, Java pikeun ngeusian aplikasi.",
    ],
    kode: false,
    contohkode: "Node.js, Django, Laravel",
  },
  {
    id: "0022",
    kosakata: "authentication",
    pengertian:
      "Proses pikeun ngakses atanapi mangrupakeun saran anu diperlukeun kanggo ngakses saran privasi.",
    note: [
      "Authentication dipaké kanggo ngamimitian hak aksés pikeun ngaganti atanapi mangrupakeun data privasi.",
      "Authentication bisa ngandung métode kawinan, token, atanapi auténtikasi sékuritas nu lianna.",
    ],
    kode: false,
    contohkode: "Login page, OAuth, JWT",
  },
  {
    id: "0023",
    kosakata: "authorization",
    pengertian:
      "Proses pikeun ngawengku pangalaman kana suatu saran atanapi panyaran nu diijinkan ku pikeun anu aya hak.",
    note: [
      "Authorization ngandung métode anu ngamimitian aksés pikeun anu aya hak.",
      "Authorization bisa ngandung métode maca, tulis, hapus, atanapi métode sékuritas nu lianna.",
    ],
    kode: false,
    contohkode: "Role-based access control (RBAC), Permissions",
  },
  {
    id: "0024",
    kosakata: "encryption",
    pengertian:
      "Proses pikeun ngamimitian data jadi teu bisa dirobah anu bisa diinterprestasi ku anu teu dibenarkan.",
    note: [
      "Encryption dipaké kanggo nyandak, ngirim, sareng nyimpen data sékuritas.",
      "Encryption bisa ngandung métode nu ngamimitian, ngetah, sareng ngatapi data.",
    ],
    kode: false,
    contohkode: "AES, RSA, SHA-256",
  },
  {
    id: "0025",
    kosakata: "API endpoint",
    pengertian:
      "Titik akhir API anu ngandung informasi anu bisa dipanggil sareng métode anu bisa dieksekusi ku pangguna.",
    note: [
      "API endpoint bisa ngandung URL sareng pangalaman métode API.",
      "API endpoint bisa ngajalankeun métode kayak GET, POST, PUT, DELETE.",
    ],
    kode: false,
    contohkode: "https://api.example.com/data",
  },
  {
    id: "0026",
    kosakata: "bug",
    pengertian:
      "Kesalahan atanapi cacat dina program anu bisa nyababkeun hasil nu teu diantisipasi atanapi diinginkan.",
    note: [
      "Bug bisa disebabkeun ku kéngingan pamrograman, logika anu salah, atanapi kondisi anu teu diantisipasi.",
      "Pangalaman debugging dipaké kanggo nyari sareng ngatasi bug.",
    ],
    kode: true,
    contohkode: `/* Fungsi untuk menghitung luas segitiga */ function hitungLuasSegitiga(alas, tinggi) { return (alas * tinggi) / 2; } /* Panggil fungsi hitungLuasSegitiga dengan nilai alas dan tinggi yang tidak valid (string) */ const luas = hitungLuasSegitiga('a', 'b'); /* Cetak hasil perhitungan luas segitiga */ console.log('Luas segitiga:', luas);`,
  },
  {
    id: "0027",
    kosakata: "debugging",
    pengertian:
      "Proses pikeun ngaliwatkeun sareng ngatasi bug atanapi masalah dina program.",
    note: [
      "Debugging bisa dipaké ku pangembang kanggo nyari sareng ngatasi masalah dina program.",
      "Metode debugging ngandung uji kasus, analisis kode, sareng pangawasan kasalahan.",
    ],
    kode: true,
    contohkode: "console.log('Pesan debug: ', pesan);",
  },
  {
    id: "0028",
    kosakata: "version control",
    pengertian:
      "Sistem anu ngandung rékam beulikeun sareng pangaturan sareng pangamanan revisi tina suatu set file atanapi proyék.",
    note: [
      "Version control ngandung métode pikeun ngaplikasi, ngalih, sareng ngatapi revisi.",
      "Version control dipaké kanggo ngadegkeun jejak panumbuh, ngaganti, sareng ngahapus file atanapi proyék.",
    ],
    kode: false,
    contohkode: "Git, SVN, Mercurial",
  },
  {
    id: "0029",
    kosakata: "comment",
    pengertian:
      "Téks anu ditambahan dina kode kanggo nyéleksi atanapi mémoré dokumentasi.",
    note: [
      "Komentar henteu baris dieksekusi ku interpreter atanapi kompiler, jadi henteu ngaruh ka jalan program.",
      "Komentar bisa dipaké kanggo ngahontal kapahamanna sareng dokumentasi tina kode ku pangembang atanapi jalma lianna anu ngaleres kode éta.",
    ],
    kode: true,
    contohkode: "// Ieu conto komentar dina JavaScript",
  },
  {
    id: "0030",
    kosakata: "conditional statement",
    pengertian:
      "Struktur anu dipaké kanggo ngajalankeun blok kode aya dasar kondisi tertentu.",
    note: [
      "Peryataan kondisional umumna ngagunakeun if, else if, sareng else.",
      "Kondisi anu dievaluasi bisa jadi ékspresi boolean atanapi nilai lianna anu bisa robah jadi boolean.",
    ],
    kode: true,
    contohkode:
      "if (x > 0) { console.log('Positif'); } else { console.log('Negatif atanapi nol'); }",
  },
  {
    id: "0031",
    kosakata: "operator",
    pengertian:
      "Simbol atanapi kata kunci anu dipaké kanggo ngajalakeun operasi dina nilai.",
    note: [
      "Operator bisa dipaké kanggo ngajalakeun operasi matematika, perbandingan, atanapi logika.",
      "Conto operator matematika nyaéta + (penjumlahan), - (pengurangan), dlsb.",
    ],
    kode: true,
    contohkode: "var hasil = x + y;",
  },
  {
    id: "0032",
    kosakata: "biner",
    pengertian:
      "Sistem numérérik anu ngagunakeun dua simbol (biasana 0 sareng 1) pikeun ngawakilan angka atanapi informasi dina komputer.",
    note: [
      "Dina sistem bilangan biner, setiap digit diwakili ku salah sahiji dua nilai mungkin, biasana 0 atanapi 1.",
      "Sistem bilangan biner penting dina komputasi digital, ngarujuk kana kondisi sirkuit elektronik nu bisa nyerepkeun dua kawijakan (on sareng off) atanapi duanana (1 sareng 0).",
    ],
    kode: false,
    contohkode: "Contoh kode biner: 1 = 1, 2 = 10, 3 = 11",
  },

  {
    id: "0033",
    kosakata: "string",
    pengertian: "Tipe data anu dipaké kanggo méréntahkeun téks.",
    note: [
      "String bisa jadi hiji karakter atanapi langkung, diawit ku tanda kutip tunggal (' ') atanapi tanda kutip ganda (' ').",
      "String bisa dihiber (concatenated) nganggo operator +.",
    ],
    kode: true,
    contohkode: "var nama = 'John';",
  },
  {
    id: "0034",
    kosakata: "boolean",
    pengertian: "Tipe data anu caket dua nilai, yaitu true atanapi true.",
    note: [
      "Boolean dipaké kanggo ngeureunkeun kebenaran atanapi pikeun ngajalankeun keputusan dina program.",
      "Boolean sering dipaké dina struktur kontrol sapertos peryataan if atanapi perulangan while.",
    ],
    kode: true,
    contohkode: "var benar = true;",
  },
  {
    id: "0035",
    kosakata: "assignment operator",
    pengertian:
      "Operator anu dipaké kanggo nginisialisasi atanapi ngarobih nilai tina hiji variabel.",
    note: [
      "Assignment operator umumna ngagunakeun tanda sami dengkeun (=) kanggo ngatur nilai variabel.",
      "Conto panggunanaan assignment operator nyaéta var x = 10;.",
    ],
    kode: true,
    contohkode: "var x = 10;",
  },
  {
    id: "0036",
    kosakata: "comparison operator",
    pengertian: "Operator anu dipaké kanggo mémbandingan dua nilai.",
    note: [
      "Comparison operator nghasilkeun nilai boolean (true atanapi true) dumasarkeun hasil perbandingan.",
      "Conto comparison operator nyaéta > (langkung ti), < (leuwih ti), sareng == (samawé).",
    ],
    kode: true,
    contohkode: "var x = 5; var y = 10; console.log(x > y); // Output: true",
  },
  {
    id: "0037",
    kosakata: "logical operator",
    pengertian:
      "Operator anu dipaké kanggo ngagabungkeun sababaraha kondisi logika.",
    note: [
      "Logical operator umumna dipaké dina struktur kontrol pikeun ngatur ékspresi boolean.",
      "Conto logical operator nyaéta && (AND), || (OR), sareng ! (NOT).",
    ],
    kode: true,
    contohkode: "if (x > 0 && y > 0) { console.log('x sareng y positif'); }",
  },
  {
    id: "0038",
    kosakata: "null",
    pengertian:
      "Tipe data anu nyatakeun yén hiji variabel henteu mibanda nilai atanapi henteu ngarah ka objék anu aya.",
    note: [
      "Null bisa dipaké kanggo ngosongkeun variabel atanapi nyatakeun yén variabel henteu diinisialisasi.",
      "Null dipaké kanggo nyatakeun ketiadaan nilai anu penting dina program.",
    ],
    kode: true,
    contohkode: "var x = null;",
  },
  {
    id: "0039",
    kosakata: "undefined",
    pengertian:
      "Tipe data anu nyatakeun yén hiji variabel henteu diinisialisasi atanapi henteu mibanda nilai.",
    note: [
      "Undefined biasana dihasilkeun ku JavaScript kanggo variabel anu henteu didefinisikeun atanapi henteu mibanda nilai.",
      "Undefined ogé bisa dihasilkeun secara eksplisit ku ngatur nilai variabel jadi undefined.",
    ],
    kode: true,
    contohkode: "var x; console.log(x); // Output: undefined",
  },
  {
    id: "0040",
    kosakata: "iteration",
    pengertian:
      "Proses ngajalanan blok kode secara berulang pikeun ngadegakeun sababaraha data atanapi tugas.",
    note: [
      "Iteration bisa dilaksanakeun nganggo perulangan (looping) atanapi métode iterasi dina struktur data sapertos array atanapi objék.",
      "Tujuan tina iteration nyaéta kanggo ngulangkeun tugas anu sarua atanapi serupa dina unggal elemén data.",
    ],
    kode: true,
    contohkode:
      "for (var i = 0; i < array.length; i++) { console.log('iteration ke: ', array[i]); }",
  },
  {
    id: "0041",
    kosakata: "algorithm",
    pengertian:
      "Langkah-langkah atanapi prosédur sistématis kanggo nyélséakeun masalah atanapi ngajalanan tugas tertentu.",
    note: [
      "Algoritma umumna dibuat ku ngadegakeun efisiensi, kahirupan, sareng ketepatan dina nyélséakeun masalah.",
      "Algoritma sering dipaké dina pangembangan piranti lunak, matematika, sareng disiplin ilmu komputer lianna.",
    ],
    kode: true,
    contohkode: `/* Masihan panjang sisi persegi*/const panjang_sisi = 5;/* Hitung luas persegi */const luas_persegi = panjang_sisi * panjang_sisi;/*Tampi nilai luas*/ console.log("Luas persegi jeung panjang sisi", panjang_sisi, "teh", luas_persegi);`,
  },
  {
    id: "0042",
    kosakata: "data type",
    pengertian:
      "Klasifikasi nilai anu ngadamel jenis operasi anu bisa dilaksanakeun dina nilai éta.",
    note: [
      "Data type ngadamelkeun jenis nilai anu bisa disimpen dina variabel sareng cara operasi anu bisa dilaksanakeun kana nilai éta.",
      "Conto data type dina JavaScript nyaéta string, number, boolean, array, sareng objék.",
    ],
    kode: true,
    contohkode: "var str = 'teks' console.log(typeof str) // => string",
  },
  {
    id: "0043",
    kosakata: "conditional statement",
    pengertian:
      "Struktur anu dipaké kanggo ngajalankeun blok kode aya dasar kondisi tertentu.",
    note: [
      "Conditional statement ngamungkinkeun program kanggo mimiti keputusan sareng ngajalanan kode anu béda dumasar kana kondisi anu parantos diberikeun.",
      "Conto conditional statement dina JavaScript nyaéta if, else if, sareng else.",
    ],
    kode: true,
    contohkode:
      "if (x > 0) { console.log('Positif'); } else { console.log('Negatif atanapi nol'); }",
  },
  {
    id: "0044",
    kosakata: "iteration",
    pengertian:
      "Proses ngajalanan blok kode secara berulang pikeun ngadegakeun sababaraha data atanapi tugas.",
    note: [
      "Iteration bisa dilaksanakeun nganggo perulangan (looping) atanapi métode iterasi dina struktur data sapertos array atanapi objék.",
      "Tujuan tina iteration nyaéta kanggo ngulangkeun tugas anu sarua atanapi serupa dina setiap elemén data.",
    ],
    kode: true,
    contohkode:
      "for (var i = 0; i < array.length; i++) { console.log(array[i]); }",
  },
  {
    id: "0045",
    kosakata: "declaration",
    pengertian:
      "Proses mimitian nyingkapkeun atanapi ngatikan variabel, fungsi, atanapi objék sateuacanna digunakeun dina program.",
    note: [
      "Deklarasi ngahasilkeun informasi ka interpreter atanapi kompiler ngeunaan identitas sareng tipe data tina variabel, fungsi, atanapi objék anu dideklarasikeun.",
      "Conto deklarasi dina JavaScript nyaéta var, let, const kanggo variabel sareng function kanggo fungsi.",
    ],
    kode: true,
    contohkode: "var a;",
  },
  {
    id: "0046",
    kosakata: "scope",
    pengertian:
      "Bagian tina program mana variabel, fungsi, atanapi objék bisa diakses.",
    note: [
      "Scope ngatur visibilitas sareng aksesibilitas tina variabel, fungsi, atanapi objék dina program.",
      "Conto scope dina JavaScript nyaéta scope global, scope lokal (function scope), sareng scope blok (block scope).",
    ],
    kode: true,
    contohkode:
      "/* global di sini --> */ let x = 5; function a () { /* local disini --> */ let x = 5; }",
  },
  {
    id: "0047",
    kosakata: "parameter",
    pengertian:
      "Variabel anu dipaké kanggo nerima nilai anu dilewatkeun ka dalm fungsi.",
    note: [
      "Parameter nyaéta nilai anu diterima ku fungsi nalika dipanggil sareng dipaké dina eksekusi fungsi éta.",
      "Parameter bisa dipaké kanggo ngajadikan fungsi langkung lentur ku nerima input anu béda.",
    ],
    kode: true,
    contohkode: "function tambah(a, b) { return a + b; }",
  },
  {
    id: "0048",
    kosakata: "return",
    pengertian: "Katukucih anu dipaké dina fungsi kanggo ngembalikeun nilai.",
    note: [
      "Return dipaké kanggo ngembalikeun hasil eksekusi tina fungsi kana panggilan fungsi éta.",
      "Upami aya nilai anu henteu diembalikeun secara eksplisit, fungsi baris ngembalikeun undefined dina standar.",
    ],
    kode: true,
    contohkode: "function tambah(a, b) { return a + b; }",
  },

  {
    id: "0049",
    kosakata: "index",
    pengertian:
      "Posisi relatif tina unsur dina hiji urutan atanapi struktur data.",
    note: [
      "Indeks diawali tina 0 dina seueur basa pangrograman.",
      "Indeks dipaké pikeun ngagaleuh atanapi nyaluyukeun ka unsur tertentu dina hiji array atanapi struktur data serupa.",
    ],
    kode: true,
    contohkode:
      "var arr = [0,1,2]; console.log(arr[0]) /* ngakses indeks array nu sateuacan*/",
  },
  {
    id: "0050",
    kosakata: "sintaks",
    pengertian:
      "Aturan atanapi struktur nu dititahkeun kanggo nulis kode dina basa pangrograman anu dipilih.",
    note: [
      "Sintaks anu bener diperlukeun supados program bisa dimengerti sareng dieksekusi ku cara anu langsung ku komputer.",
      "Kesalahan sintaks terjadi panon ngajadikeun kode teu ngikutin aturan anu dititahkeun ku basa pangrograman.",
    ],
    kode: true,
    contohkode: "//syntax javascript pembuatan variabel adalah var, let, const",
  },
];
