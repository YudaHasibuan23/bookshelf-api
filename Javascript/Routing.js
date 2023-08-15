const { 
    createbukuHandler, 
    getAllbukuHandler,
    getByIdbukuHandler
} = require('./Handlerr');

const routes = [
    // Rute untuk halaman beranda
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return 'Selamat datang di BukuKita! Temukan dunia literasi bersama kami.';
        }
    },
    // Rute untuk penanganan metode yang tidak diizinkan pada halaman beranda
    {
        method: '*',
        path: '/',
        handler: () => {
            return 'Ups! Metode ini tidak diizinkan untuk halaman ini.';
        }
    },
    // Rute untuk menambahkan buku baru
    {
        method: 'POST',
        path: '/buku',
        handler: createbukuHandler
    },
    // Rute untuk mendapatkan daftar semua buku
    {
        method: 'GET',
        path: '/buku',
        handler: getAllbukuHandler
    },
    // Rute untuk mendapatkan detail buku berdasarkan ID
    {
        method: 'GET',
        path: '/buku/{idBook}',
        handler: getByIdbukuHandler
    },
    // Rute untuk halaman "Tentang Kami"
    {
        method: 'GET',
        path: '/tentang',
        handler: () => {
            return 'Selamat datang di halaman "Tentang Kami". Kami adalah komunitas pecinta buku!';
        }
    },
    // Rute untuk halaman "Kontak"
    {
        method: 'GET',
        path: '/kontak',
        handler: () => {
            return 'Anda dapat menghubungi kami di info@bukukita.com. Kami senang mendengar dari Anda!';
        }
    },
    // Rute untuk halaman "404 Tidak Ditemukan"
    {
        method: 'GET',
        path: '/tidak-ditemukan',
        handler: () => {
            return 'Maaf, halaman yang Anda cari tidak ditemukan.';
        }
    }
];

module.exports = routes;
