const { nanoid } = require("nanoid");  // Mengimpor fungsi nanoid dari paket "nanoid"
const buku = require('./buku');       // Mengimpor data buku dari file terpisah "buku"

// Fungsi untuk menangani permintaan pembuatan buku baru
const createbukuHandler = (request, h) => {
    // Men-destrukturisasi payload permintaan untuk mendapatkan data buku
    const {
        name, 
        year, 
        author, 
        summary, 
        publisher, 
        pageCount, 
        readPage, 
        reading
    } = request.payload;

    // Menggunakan nanoid untuk membuat ID unik dengan panjang 16 karakter
    const id = nanoid(16);

    // Memvalidasi judul buku tidak boleh kosong
    if (!name) {
        const response = h.response({
            status: "fail",
            message: "Gagal menambah buku, isi kembali judul buku"
        });
        response.code(400);
        return response;
    }

    // Memvalidasi readPage tidak boleh lebih besar dari pageCount
    if (readPage > pageCount) {
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. Coba perbaiki read page tidak boleh lebih besar dari jumlah halaman"
        });
        response.code(400);
        return response;
    }

    // Fungsi untuk mengecek apakah buku telah selesai dibaca atau tidak
    const isFinished = (readPage, pageCount) => {
        return readPage === pageCount;
    };
    const finished = isFinished(readPage, pageCount);

    const insertedAt = new Date().toISOString(); // Waktu saat buku ditambahkan
    const updatedAt = insertedAt; // Waktu terakhir buku diupdate

    // Membuat objek buku baru
    const newBook = {
        id,
        name, 
        year, 
        author, 
        summary, 
        publisher, 
        pageCount, 
        readPage, 
        finished,
        reading,
        insertedAt,
        updatedAt
    };

    // Menambahkan buku baru ke dalam daftar buku
    buku.push(newBook);

    // Memeriksa apakah penambahan buku berhasil
    const isSuccess = buku.filter((book) => book.id === id).length > 0;

    // Menyiapkan respons berhasil atau gagal
    if (isSuccess) {
        const response = h.response({
            status: "Berhasil!!",
            message: "Buku berhasil ditambah",
            data: { idBook: id }
        });
        response.code(201);
        return response;
    } else {
        const response = h.response({
            status: "fail",
            message: "Buku tidak bisa ditambahkan"
        });
        response.code(500);
        return response;
    }
}

// Fungsi untuk menangani permintaan mendapatkan semua buku
const getAllbukuHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    // Memproses permintaan berdasarkan parameter yang diberikan
    // Melakukan filter dan pemetaan pada data buku sesuai permintaan

    // name: Menampilkan buku dengan judul yang cocok
    // reading: Menampilkan buku berdasarkan status membaca
    // finished: Menampilkan buku berdasarkan status selesai

    // Jika tidak ada parameter, akan menampilkan semua buku

    // Setelah diproses, respons disusun sesuai format dan dikembalikan

    // ... (kode berlanjut)

    return response; // Mengembalikan respons sesuai hasil pemrosesan
}

// Fungsi untuk menangani permintaan mendapatkan buku berdasarkan ID
const getByIdbukuHandler = (request, h) => {
    const { idBook } = request.params;

    // Melakukan pencarian buku berdasarkan ID
    // Jika ditemukan, mengembalikan respons dengan data buku
    // Jika tidak ditemukan, mengembalikan respons bahwa buku tidak ditemukan

    // ... (kode berlanjut)

    return response; // Mengembalikan respons sesuai hasil pemrosesan
}

// Mengekspor fungsi-fungsi penanganan permintaan agar dapat digunakan di tempat lain
module.exports = {
    createbukuHandler,
    getAllbukuHandler,
    getByIdbukuHandler
};
