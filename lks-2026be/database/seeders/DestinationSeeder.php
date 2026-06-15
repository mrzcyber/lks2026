<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Destination;
use App\Models\Galery;
use Illuminate\Database\Seeder;

class DestinationSeeder extends Seeder
{
    /**
     * Seed the application's database with dummy destinations.
     */
    public function run(): void
    {
        // Create categories
        $categories = [
            ['nama_kategori' => 'Wisata Alam'],
            ['nama_kategori' => 'Wisata Sejarah'],
            ['nama_kategori' => 'Wisata Budaya'],
            ['nama_kategori' => 'Wisata Kuliner'],
        ];

        foreach ($categories as $cat) {
            Category::firstOrCreate($cat);
        }

        $wisataAlam = Category::where('nama_kategori', 'Wisata Alam')->first()->id;
        $wisataSejarah = Category::where('nama_kategori', 'Wisata Sejarah')->first()->id;
        $wisataBudaya = Category::where('nama_kategori', 'Wisata Budaya')->first()->id;
        $wisataKuliner = Category::where('nama_kategori', 'Wisata Kuliner')->first()->id;

        // Image path (using hero image copied to storage)
        $foto = 'images/hero-destination.png';

        $destinations = [
            [
                'nama' => 'Waduk Kedung Ombo',
                'deskripsi' => 'Waduk Kedung Ombo adalah waduk yang terletak di perbatasan tiga kabupaten yaitu Sragen, Grobogan, dan Boyolali. Waduk ini menawarkan pemandangan alam yang indah dengan air biru yang dikelilingi perbukitan hijau. Pengunjung dapat menikmati aktivitas seperti memancing, berperahu, dan menikmati sunset yang memukau. Area sekitar waduk juga terdapat berbagai warung makan yang menyajikan ikan bakar segar.',
                'lokasi' => 'Kec. Miri, Sragen, Jawa Tengah',
                'lat' => '-7.2500',
                'long' => '110.8833',
                'foto' => $foto,
                'category_id' => $wisataAlam,
                'harga_tiket' => 'Rp 10.000',
            ],
            [
                'nama' => 'Museum Sangiran',
                'deskripsi' => 'Museum Sangiran adalah museum arkeologi yang terletak di kawasan Situs Sangiran, salah satu situs purbakala terpenting di dunia. Museum ini menyimpan koleksi fosil manusia purba (Homo erectus), fosil hewan, dan artefak batu yang berusia jutaan tahun. Situs Sangiran telah diakui UNESCO sebagai Warisan Dunia sejak tahun 1996. Terdapat 4 klaster museum yang bisa dikunjungi.',
                'lokasi' => 'Kec. Kalijambe, Sragen, Jawa Tengah',
                'lat' => '-7.4667',
                'long' => '110.8500',
                'foto' => $foto,
                'category_id' => $wisataSejarah,
                'harga_tiket' => 'Rp 5.000',
            ],
            [
                'nama' => 'Gunung Kemukus',
                'deskripsi' => 'Gunung Kemukus merupakan sebuah bukit yang terletak di tepi Waduk Kedung Ombo. Tempat ini terkenal sebagai situs bersejarah dengan makam Pangeran Samudro, putra dari Prabu Brawijaya V. Selain nilai historisnya, lokasi ini menawarkan pemandangan waduk yang spektakuler dari ketinggian. Terdapat pula petilasan dan tempat ibadah yang sering dikunjungi peziarah.',
                'lokasi' => 'Kec. Miri, Sragen, Jawa Tengah',
                'lat' => '-7.2333',
                'long' => '110.8667',
                'foto' => $foto,
                'category_id' => $wisataBudaya,
                'harga_tiket' => 'Rp 5.000',
            ],
            [
                'nama' => 'Pemandian Air Panas Bayanan',
                'deskripsi' => 'Pemandian Air Panas Bayanan adalah destinasi wisata relaksasi yang menyajikan kolam renang dengan air hangat alami yang bersumber dari mata air panas bumi. Tempat ini sangat cocok untuk melepas penat dan terapi kesehatan. Fasilitas yang tersedia meliputi kolam dewasa, kolam anak-anak, gazebo, mushola, dan area parkir yang luas. Suasananya asri dengan pepohonan rindang.',
                'lokasi' => 'Kec. Tangen, Sragen, Jawa Tengah',
                'lat' => '-7.3167',
                'long' => '110.9833',
                'foto' => $foto,
                'category_id' => $wisataAlam,
                'harga_tiket' => 'Rp 15.000',
            ],
            [
                'nama' => 'Pesanggrahan Kiai Ageng Srenggi',
                'deskripsi' => 'Pesanggrahan Kiai Ageng Srenggi merupakan situs bersejarah yang menjadi cikal bakal berdirinya Kabupaten Sragen. Tempat ini dipercaya sebagai kediaman Kiai Ageng Srenggi yang merupakan tokoh penting dalam sejarah Sragen. Di kompleks ini terdapat makam, pendopo, dan berbagai peninggalan bersejarah. Banyak wisatawan datang untuk berziarah sekaligus mempelajari sejarah lokal.',
                'lokasi' => 'Kec. Sragen, Sragen, Jawa Tengah',
                'lat' => '-7.4333',
                'long' => '111.0167',
                'foto' => $foto,
                'category_id' => $wisataSejarah,
                'harga_tiket' => 'Gratis',
            ],
            [
                'nama' => 'Taman Sukowati Sragen',
                'deskripsi' => 'Taman Sukowati adalah ruang terbuka hijau di pusat Kota Sragen yang menjadi tempat favorit warga untuk bersantai. Taman ini dilengkapi dengan jogging track, taman bermain anak, area skateboard, dan panggung terbuka. Pada malam hari, taman ini semakin ramai dengan pedagang kuliner khas Sragen. Taman ini juga sering digunakan untuk event budaya dan festival.',
                'lokasi' => 'Kec. Sragen, Sragen, Jawa Tengah',
                'lat' => '-7.4317',
                'long' => '111.0183',
                'foto' => $foto,
                'category_id' => $wisataBudaya,
                'harga_tiket' => 'Gratis',
            ],
            [
                'nama' => 'Sentra Kuliner Nasi Gandul',
                'deskripsi' => 'Nasi Gandul adalah kuliner khas Sragen yang wajib dicoba saat berkunjung ke kota ini. Nasi gandul terdiri dari nasi putih yang disiram kuah santan kental dengan lauk daging sapi atau kerbau yang dimasak bumbu tradisional. Sentra kuliner ini menyajikan berbagai varian nasi gandul dari berbagai penjual legendaris yang telah berdiri puluhan tahun. Harga terjangkau dengan cita rasa autentik.',
                'lokasi' => 'Kec. Sragen, Sragen, Jawa Tengah',
                'lat' => '-7.4300',
                'long' => '111.0200',
                'foto' => $foto,
                'category_id' => $wisataKuliner,
                'harga_tiket' => 'Gratis',
            ],
            [
                'nama' => 'Air Terjun Grojogan Sewu',
                'deskripsi' => 'Air Terjun Grojogan Sewu merupakan salah satu destinasi wisata alam tersembunyi di Sragen. Air terjun ini memiliki ketinggian sekitar 30 meter dengan aliran air yang deras dan segar. Lokasinya berada di tengah hutan yang masih asri, sehingga pengunjung bisa merasakan kesejukan udara pegunungan. Akses menuju air terjun melewati jalan setapak yang menantang namun menyenangkan.',
                'lokasi' => 'Kec. Sambirejo, Sragen, Jawa Tengah',
                'lat' => '-7.3500',
                'long' => '110.9500',
                'foto' => $foto,
                'category_id' => $wisataAlam,
                'harga_tiket' => 'Rp 8.000',
            ],
        ];

        foreach ($destinations as $dest) {
            $destination = Destination::create($dest);

            // Create gallery entries using the same hero image
            for ($i = 1; $i <= 3; $i++) {
                Galery::create([
                    'nama_galeri' => $foto,
                    'destination_id' => $destination->id,
                ]);
            }
        }
    }
}
