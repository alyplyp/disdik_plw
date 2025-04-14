import React from 'react';
import { Search, Calendar, Eye, User } from 'lucide-react';

function BeritaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4">
      {/* Kolom Pencarian */}
      <div className="container mx-auto py-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Pencarian Berita"
            className="w-full p-3 pl-4 pr-12 border border-black rounded focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <Search size={20} className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col bg-white rounded p-4 shadow-md">
              {/* Placeholder Gambar */}
              <div className="w-full h-40 bg-gray-200 mb-4 rounded" />

              {/* Judul Berita */}
              <h2 className="text-xl font-bold mb-2">Judul Berita {item}</h2>

              {/* Meta Informasi */}
              <div className="text-sm text-gray-600 flex flex-col gap-1 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>01 Jan 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>Ahmad Yusuf Fikira Heqshi</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={16} />
                  <span>100 views</span>
                </div>
              </div>

              {/* Footer Informasi */}
              <div className="mt-auto border-t border-gray-200 pt-2 flex justify-between text-sm text-gray-700">
                <span>100 views</span>
                <span>Ahmad Yusuf Fikira Heqshi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi Halaman */}
        <div className="mt-12 flex justify-center items-center space-x-3">
          {["1", "2", "10"].map((page) => (
            <button
              key={page}
              className="px-4 py-2 rounded hover:bg-gray-200 focus:bg-gray-200 transition-colors"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeritaPage;
