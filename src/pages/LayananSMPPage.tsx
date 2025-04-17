import { Phone, Mail } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Tipe data untuk layanan
type Layanan = {
  title: string;
  description: string;
  image: string;
};

// Data Slider
const informasiSlider: Layanan[] = [
  {
    title: "PPDB 2025 Segera Dibuka!",
    description: "Persiapkan berkas dan pantau jadwal resmi dari Dinas Pendidikan.",
    image: "https://www.satusulteng.com/wp-content/uploads/2024/07/Kunjungan-SMP-11-1024x576.jpg",
  },
  {
    title: "Pengajuan BOS Tahap II",
    description: "Sekolah diminta segera melengkapi laporan penggunaan dana BOS tahap I.",
    image: "https://mercusuar.web.id/file/2022/06/SMPN-18-Palu-ba7237ba.jpeg",
  },
  {
    title: "Beasiswa Prestasi",
    description: "Pendaftaran beasiswa bagi siswa berprestasi kini dibuka hingga akhir bulan.",
    image: "https://www.satusulteng.com/wp-content/uploads/2023/12/Apresiasi-SMPN-7.jpg",
  },
];

// Data Layanan
const SmpPage: Layanan[] = [
  {
    title: "Penerimaan Peserta Didik Baru (PPDB)",
    description: "Informasi dan pengajuan pendaftaran siswa baru tingkat SMP di Kota.",
    image: "https://cdn.pixabay.com/photo/2024/06/08/17/28/ai-generated-8817237_1280.png",
  },
  {
    title: "Mutasi Siswa",
    description: "Prosedur mutasi masuk dan keluar siswa antar sekolah tingkat SMP.",
    image: "https://cdn.pixabay.com/photo/2023/12/09/04/58/ai-generated-8438610_1280.jpg",
  },
  {
    title: "Data Sekolah",
    description: "Akses informasi profil sekolah SMP, akreditasi, dan data pendukung lainnya.",
    image: "https://cdn.pixabay.com/photo/2023/10/24/06/28/ai-generated-8337506_1280.png",
  },
  {
    title: "Bantuan Operasional Sekolah (BOS)",
    description: "Informasi pengajuan dan pelaporan dana BOS untuk sekolah tingkat SMP.",
    image: "https://cdn.pixabay.com/photo/2024/08/16/14/21/ai-generated-8973951_1280.png",
  },
  {
    title: "Pengajuan Sarana & Prasarana",
    description: "Layanan permohonan bantuan fasilitas untuk sekolah SMP.",
    image: "https://cdn.pixabay.com/photo/2017/11/24/08/48/office-2974407_1280.png",
  },
  {
    title: "Legalisir Ijazah",
    description: "Layanan legalisir dokumen ijazah secara resmi dari Dinas Pendidikan.",
    image: "https://cdn.pixabay.com/photo/2023/01/27/17/56/graduation-7749214_1280.jpg",
  },
  {
    title: "Surat Keterangan Ijazah Rusak / Kesalahan",
    description: "Permohonan surat pengganti karena ijazah rusak atau kesalahan penulisan.",
    image: "https://cdn.pixabay.com/photo/2019/11/14/08/44/documents-4625654_1280.png",
  },
  {
    title: "Pelayanan Surat Pengganti Ijazah",
    description: "Ajukan surat pengganti jika ijazah hilang atau tidak dapat digunakan.",
    image: "https://cdn.pixabay.com/photo/2024/07/04/20/24/data-8873303_1280.png",
  },
];

export default function LayananSMP() {
  return (
    <div className="p-0 max-w-6xl mx-auto">
      {/* Bagian Slider Media Informasi */}
      <div className="w-full h-[300px] mb-12 relative rounded-xl overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          {informasiSlider.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                  <p className="text-lg max-w-xl">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pelayanan Bidang SMP */}
      <div className="px-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Pelayanan Bidang SMP</h1>
        <p className="text-gray-600 mb-8 text-center">
          Layanan ini disediakan oleh Dinas Pendidikan dan Kebudayaan Kota untuk mendukung pengelolaan dan pengembangan pendidikan tingkat Sekolah Menengah Pertama (SMP).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SmpPage.map((item, index) => (
            <div
              key={index}
              className="group border rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Kontak */}
        <div className="mt-12 p-6 bg-gray-100 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Kontak Pelayanan</h2>
          <div className="flex flex-col gap-2 text-gray-800">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> (0451) 123456
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> disdikbud@kotapalu.go.id
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
