import React, { useState } from 'react';

interface Profile {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pimpinan');

  const profiles: Record<string, Profile[]> = {
    pimpinan: [
      {
        name: 'Dr. H. Ahmad Suriadi, S.Pd., M.Pd.',
        title: 'Kepala Dinas Pendidikan',
        subtitle: 'Kota Palu',
        image: 'https://source.unsplash.com/random/400x500?portrait,man,formal&sig=1',
        description: 'Bertanggung jawab atas perencanaan, pengorganisasian, dan pengawasan seluruh kegiatan pendidikan di Kota Palu.'
      },
      {
        name: 'Dra. Hj. Nurhaeda, M.Pd.',
        title: 'Sekretaris Dinas Pendidikan',
        subtitle: 'Kota Palu',
        image: 'https://source.unsplash.com/random/400x500?portrait,woman,formal&sig=2',
        description: 'Mengelola administrasi, keuangan, dan koordinasi antar bidang di Dinas Pendidikan Kota Palu.'
      }
    ],
    bidang: [
      {
        name: 'Dr. H. Muhammad Yusuf, M.Pd.',
        title: 'Kepala Bidang PAUD',
        subtitle: 'Pendidikan Anak Usia Dini',
        image: 'https://source.unsplash.com/random/400x500?portrait,man,formal&sig=3',
        description: 'Mengembangkan dan mengawasi program pendidikan anak usia dini di Kota Palu.'
      },
      {
        name: 'Dra. Hj. Fatimah, M.Pd.',
        title: 'Kepala Bidang SD',
        subtitle: 'Sekolah Dasar',
        image: 'https://source.unsplash.com/random/400x500?portrait,woman,formal&sig=4',
        description: 'Mengelola dan mengembangkan pendidikan tingkat sekolah dasar di Kota Palu.'
      },
      {
        name: 'Dr. H. Abdul Rahman, M.Pd.',
        title: 'Kepala Bidang SMP',
        subtitle: 'Sekolah Menengah Pertama',
        image: 'https://source.unsplash.com/random/400x500?portrait,man,formal&sig=5',
        description: 'Bertanggung jawab atas pengembangan pendidikan tingkat menengah pertama di Kota Palu.'
      }
    ],
    pendukung: [
      {
        name: 'Drs. H. Ismail, M.Si.',
        title: 'Kepala Bidang Ketenagaan',
        subtitle: 'Manajemen Sumber Daya Manusia',
        image: 'https://source.unsplash.com/random/400x500?portrait,man,formal&sig=6',
        description: 'Mengelola pengembangan dan pembinaan tenaga pendidik dan kependidikan.'
      },
      {
        name: 'Dr. Hj. Aminah, M.Pd.',
        title: 'Kepala Bidang Kebudayaan',
        subtitle: 'Pengembangan Budaya',
        image: 'https://source.unsplash.com/random/400x500?portrait,woman,formal&sig=7',
        description: 'Mengembangkan dan melestarikan nilai-nilai budaya dalam pendidikan.'
      }
    ]
  };

  const tabs = [
    { id: 'pimpinan', label: 'Pimpinan' },
    { id: 'bidang', label: 'Bidang' },
    { id: 'pendukung', label: 'Pendukung' }
  ];

  const bidangInfo = {
    pimpinan: 'Pimpinan Dinas Pendidikan Kota Palu bertanggung jawab atas perencanaan strategis dan pengembangan pendidikan di Kota Palu, memastikan tercapainya visi dan misi pendidikan yang berkualitas.',
    bidang: 'Bidang-bidang teknis mengelola program pendidikan sesuai jenjang masing-masing, fokus pada peningkatan kualitas pembelajaran dan pengembangan kompetensi peserta didik.',
    pendukung: 'Bidang pendukung berperan dalam pengelolaan sumber daya manusia dan pengembangan nilai-nilai budaya untuk mendukung tercapainya tujuan pendidikan yang holistik.'
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Profil Pejabat</h1>
          <p className="text-xl">Dinas Pendidikan Kota Palu</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'bg-white shadow-md text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tentang Bidang Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Bidang</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
              {bidangInfo[activeTab as keyof typeof bidangInfo]}
            </p>
          </div>

          {/* Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles[activeTab].map((profile, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <div className="h-[400px] overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{profile.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{profile.title}</p>
                  <p className="text-gray-500 mb-4">{profile.subtitle}</p>
                  <p className="text-gray-600">{profile.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;