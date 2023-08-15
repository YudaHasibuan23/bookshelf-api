const Hapi = require('@hapi/hapi');
const routes = require('./Routing');  // Mengimpor file dengan definisi rute

const init = async () => {
    // Membuat instance server Hapi
    const server = Hapi.server({
        port: 9000,
        host: 'localhost'
    });

    // Menghubungkan rute-rute yang telah didefinisikan ke dalam server
    server.route(routes);

    // Memulai server
    await server.start();

    // Menampilkan pesan bahwa server telah berhasil dijalankan
    console.log('Server berjalan pada port: %s', server.info.uri);
}

// Mengekspor fungsi init agar dapat digunakan di file lain
module.exports = init;
