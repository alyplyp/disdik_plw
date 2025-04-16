import React from 'react';

const LayananPaudPage: React.FC = () => {
  const services = [
    {
      title: 'Pendaftaran Peserta Didik Baru',
      description: 'Informasi mengenai pendaftaran siswa baru untuk tahun ajaran.',
    },
    {
      title: 'Kurikulum dan Pembelajaran',
      description: 'Detail tentang kurikulum yang diterapkan di sekolah.',
    },
    {
      title: 'Bantuan Operasional Sekolah (BOS)',
      description: 'Informasi mengenai bantuan dana untuk operasional sekolah.',
    },
    {
      title: 'Pengembangan Guru dan Tenaga Pendidikan',
      description: 'Program pelatihan dan pengembangan untuk guru dan tenaga pendidikan.',
    },
    {
      title: 'Sarana dan Prasarana',
      description: 'Informasi mengenai fasilitas dan infrastruktur sekolah.',
    },
    {
      title: 'Ekstra Kulikuler dan Pengembangan Bakat',
      description: 'Kegiatan ekstra kurikuler yang mendukung pengembangan bakat siswa.',
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Layanan PAUD</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default LayananPaudPage;
