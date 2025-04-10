import React, { useState } from 'react';
import { Search, School, BookOpen, Users, Building2, GraduationCap, Facebook, Instagram, X } from 'lucide-react';
import ProfilePage from './pages/ProfilePage.tsx';
import BrandIdentityPage from './pages/BrandIdentityPage.tsx';

function App() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState('home');

  const services = [
    { title: 'Aset dan Keuangan', icon: <Building2 className="w-12 h-12" /> },
    { title: 'Perencanaan', icon: <BookOpen className="w-12 h-12" /> },
    { title: 'Kepegawaian', icon: <Users className="w-12 h-12" /> },
    { title: 'PAUD', icon: <School className="w-12 h-12" /> },
    { title: 'SD', icon: <School className="w-12 h-12" /> },
    { title: 'SMP', icon: <GraduationCap className="w-12 h-12" /> },
  ];

  const news = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Program Beasiswa 2024',
      description: 'Pendaftaran beasiswa untuk siswa berprestasi telah dibuka untuk tahun ajaran 2024/2025.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Pelatihan Guru',
      description: 'Workshop pengembangan kompetensi guru akan diadakan bulan depan di Aula Dinas Pendidikan.'
    },
    {
      icon: <School className="w-8 h-8" />,
      title: 'Pembangunan Sekolah',
      description: 'Renovasi 5 sekolah dasar di Kota Palu akan dimulai pada bulan Juli 2024.'
    }
  ];

  const dropdownMenus = {
    profil: [
      'Profil',
      'Brand Identity',
      'Sejarah'
    ],
    layanan: [
      'Bidang PAUD',
      'Bidang SD',
      'Bidang SMP',
      'Bidang Ketenagaan',
      'Bidang Kebudayaan',
      'Bidang Sub Sekretariat'
    ],
    publikasi: [
      'Berita Artikel',
      'Kalender Pendidikan',
      'Dokumentasi'
    ]
  };

  const handleMenuClick = (menu: string, item: string) => {
    if (menu === 'profil') {
      if (item === 'Profil') {
        setCurrentPage('profile');
      } else if (item === 'Brand Identity') {
        setCurrentPage('brand-identity');
      }
    }
    setActiveDropdown(null);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'profile':
        return <ProfilePage />;
      case 'brand-identity':
        return <BrandIdentityPage />;
      default:
        return (
          <>
            {/* Banner Section */}
            <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
                <h1 className="text-5xl font-bold mb-4">Dinas Pendidikan Kota Palu</h1>
                <p className="text-xl mb-8">Membangun Generasi Cerdas, Kreatif, dan Berakhlak Mulia</p>
                <div className="w-full max-w-2xl flex">
                  <input
                    type="text"
                    placeholder="Cari informasi..."
                    className="w-full px-6 py-3 rounded-l-lg text-gray-900"
                  />
                  <button className="bg-yellow-500 px-6 py-3 rounded-r-lg hover:bg-yellow-600 transition">
                    <Search className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Informasi</h2>
                <p className="text-xl text-gray-600 mb-8">Informasi terbaru</p>
                <div className="flex gap-6 overflow-x-auto pb-4">
                  {news.map((item, index) => (
                    <div key={index} className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-blue-600 mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Carousel Section */}
            <div className="py-16">
              <div className="container mx-auto px-4">
                <div className="flex gap-6 overflow-x-auto pb-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="min-w-[400px] h-[300px] rounded-lg overflow-hidden">
                      <img
                        src={`https://source.unsplash.com/random/800x600?education,school&sig=${item}`}
                        alt={`Education ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Layanan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
                    >
                      <div className="text-blue-600">{service.icon}</div>
                      <span className="text-xl font-semibold">{service.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2" onClick={() => setCurrentPage('home')}>
              <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="font-bold text-xl">Dinas Pendidikan</span>
            </a>
            <div className="flex space-x-4">
              {Object.entries(dropdownMenus).map(([key, items]) => (
                <button
                  key={key}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition">
                Pengaduan
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown Menus */}
      {activeDropdown && (
        <div className="fixed inset-0 bg-white z-40 pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {activeDropdown.charAt(0).toUpperCase() + activeDropdown.slice(1)}
              </h2>
              <button
                onClick={() => setActiveDropdown(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {dropdownMenus[activeDropdown as keyof typeof dropdownMenus].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-4 hover:bg-gray-50 rounded-lg transition group"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(activeDropdown, item);
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                    {item}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-16">
        {renderContent()}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Alamat</h3>
                <p>Jl. Bantilan No. 05, Lere, Kec. Palu Bar., Kota Palu, Sulawesi Tengah 94221</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Kontak</h3>
                <p>Surel: disdik@pemkotpalu.go.id</p>
                <p>Telp: (0451) 451439</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-blue-400 transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-pink-400 transition">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;