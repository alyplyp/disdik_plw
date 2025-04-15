import React from 'react';

const PerencanaanPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Layanan Perencanaan</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Informasi Perencanaan</h2>
          <p className="text-gray-600 mb-6">
            Layanan ini menyediakan informasi terkait perencanaan pendidikan di lingkungan Dinas Pendidikan Kota Palu.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Perencanaan Anggaran</h3>
              <p className="text-gray-600">
                Sistem perencanaan dan penganggaran untuk program-program pendidikan.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Pengembangan Sekolah</h3>
              <p className="text-gray-600">
                Informasi tentang rencana pengembangan infrastruktur sekolah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerencanaanPage;
