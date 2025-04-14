import React from 'react';

function SejarahPage() {
  return (
        <div>
        {/* Banner Section */}
        <div className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-4">Sejarah</h1>
            <p className="text-xl">Dinas Pendidikan Kota Palu</p>
            </div>
        </div>

        {/* Penjelasan Awal yang Terpusat */}
        <div className="container mx-auto px-4 py-8">
            <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Dinas Pendidikan Kota Palu</h2>
            <p className="text-lg text-gray-700">
                Dinas Pendidikan Kota Palu adalah lembaga yang bertanggung jawab untuk
                pengelolaan dan pengembangan mutu pendidikan di kota Palu. Dengan komitmen tinggi,
                instansi ini terus berinovasi untuk memberikan akses pendidikan yang berkualitas bagi seluruh warga.
            </p>
            </div>
        </div>

        {/* Konten Sejarah dengan Grid Layout */}
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Bagian Gambar di Kiri */}
            <div className="md:col-span-1 space-y-4">
                <img
                src="/images/sejarah-1.jpg"
                alt="Gedung lama Dinas Pendidikan"
                className="w-full h-auto rounded-lg shadow-lg"
                />
                <img
                src="/images/sejarah-2.jpg"
                alt="Kegiatan awal Dinas Pendidikan"
                className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>

            {/* Teks Sejarah di Kanan */}
            <div className="md:col-span-2 text-lg text-gray-700 space-y-4">
                <p>
                Dinas Pendidikan Kota Palu berdiri sejak awal terbentuknya pemerintahan kota sebagai
                upaya untuk mengelola dan mengembangkan sektor pendidikan secara mandiri. Pada awalnya,
                Dinas Pendidikan hanya memiliki beberapa staf dan ruang kerja terbatas di lingkungan kantor wali kota.
                </p>
                <p>
                Seiring berjalannya waktu, kebutuhan akan pengelolaan pendidikan yang lebih kompleks mendorong
                pembentukan struktur organisasi yang lebih lengkap dan profesional. Dinas ini mulai mengembangkan
                program-program pendidikan dasar dan menengah serta meningkatkan kualitas guru melalui berbagai pelatihan.
                </p>
                <p>
                Di awal tahun 2000-an, Dinas Pendidikan mulai memanfaatkan teknologi informasi untuk mendukung
                administrasi dan pengawasan sekolah-sekolah di bawah naungannya. Beberapa inisiatif seperti e-learning
                dan manajemen data sekolah mulai diterapkan.
                </p>
                <p>
                Hingga kini, Dinas Pendidikan Kota Palu terus bertransformasi dengan visi meningkatkan kualitas
                pendidikan yang inklusif, adil, dan berdaya saing. Berbagai penghargaan dan pencapaian telah diraih,
                termasuk dalam hal inovasi pembelajaran, peningkatan mutu pendidikan, serta keberhasilan program pendidikan
                karakter di sekolah.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}

export default SejarahPage;
