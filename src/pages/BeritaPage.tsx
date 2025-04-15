import React from 'react';
import { Calendar, User, Eye, Search } from 'react-feather';

const Banner: React.FC = () => {
  return (
    <div className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
      {/* Overlay hitam dengan opacity untuk meningkatkan kontras */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Konten Banner */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4">Berita Artikel</h1>
        <p className="text-xl">Dinas Pendidikan Kota Palu</p>
      </div>
    </div>
  );
};

const SearchBar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Cari berita..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

interface NewsCardProps {
  title: string;
  date: string;
  author: string;
  views: number;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, author, views, image }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Gambar Card */}
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Konten Card */}
      <div className="p-4 flex flex-col flex-1">
        {/* Judul Berita */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>

        {/* Informasi Meta (disusun secara vertikal) */}
        <div className="flex flex-col text-sm text-gray-600 mb-4 space-y-2">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={16} />
            <span>{views} views</span>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-auto">
          <button className="w-full inline-block text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

const NewsCardSection: React.FC = () => {
  // Data dummy untuk card berita
  const newsData = [
    {
      title: 'Judul Berita 1',
      date: '01 Jan 2025',
      author: 'Ahmad Yusuf Fikira Heqshi',
      views: 100,
      image: 'https://awsimages.detik.net.id/community/media/visual/2022/07/13/ilustrasi-baca-berita_169.jpeg?w=1200,1',
    },
    {
      title: 'Judul Berita 2',
      date: '02 Jan 2025',
      author: 'Ahmad Yusuf Fikira Heqshi',
      views: 150,
      image: 'https://awsimages.detik.net.id/community/media/visual/2022/07/13/ilustrasi-baca-berita_169.jpeg?w=1200,2',
    },
    {
      title: 'Judul Berita 3',
      date: '03 Jan 2025',
      author: 'Ahmad Yusuf Fikira Heqshi',
      views: 200,
      image: 'https://awsimages.detik.net.id/community/media/visual/2022/07/13/ilustrasi-baca-berita_169.jpeg?w=1200,3',
    },
  ];

  return (
    <div className="container mx-auto pb-2 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-14">
        {newsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            date={item.date}
            author={item.author}
            views={item.views}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

// Komponen Pagination sederhana
const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Previous
      </button>
      {/* Nomor halaman, sebagai contoh halaman 1 sampai 3 */}
      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        1
      </button>
      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        2
      </button>
      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        3
      </button>
      <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Next
      </button>
    </div>
  );
};

const NewsPage: React.FC = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Kolom Pencarian */}
      <SearchBar />

      {/* Bagian Card Berita */}
      <NewsCardSection />

      {/* Menu Pencarian (Pagination) */}
      <div className="container mx-auto mt-0 pb-10">
        <Pagination />
      </div>
    </div>
  );
};

export default NewsPage;
