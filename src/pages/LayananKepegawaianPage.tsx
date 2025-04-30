import { Phone, Mail } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/autoplay";

type Layanan = {
  title: string;
  description: string;
  image: string;
};

const informasiSlider: Layanan[] = [
  {
    title: "Update Data Kepegawaian 2025",
    description: "Pastikan data kepegawaian Anda telah diperbarui sebelum batas waktu.",
    image: "https://cdn.pixabay.com/photo/2016/10/23/22/28/office-1760007_1280.jpg",
  },
  {
    title: "Pendaftaran Diklat Fungsional",
    description: "Segera daftarkan diri Anda pada pelatihan terbaru untuk peningkatan kompetensi.",
    image: "https://cdn.pixabay.com/photo/2015/01/08/18/26/startup-593327_1280.jpg",
  },
  {
    title: "Layanan Kenaikan Pangkat",
    description: "Proses pengajuan kenaikan pangkat dibuka hingga akhir bulan ini.",
    image: "https://cdn.pixabay.com/photo/2016/11/08/05/26/laptop-1807506_1280.jpg",
  },
];

const KepegawaianPage: Layanan[] = [
  {
    title: "Layanan Kenaikan Pangkat",
    description: "Pengajuan kenaikan pangkat guru dan staf tata usaha berdasarkan ketentuan yang berlaku.",
    image: "https://cdn.pixabay.com/photo/2020/02/07/10/58/promotion-4824996_1280.jpg",
  },
  {
    title: "Layanan Pensiun",
    description: "Prosedur dan pengajuan pensiun bagi ASN di lingkungan Dinas Pendidikan.",
    image: "https://cdn.pixabay.com/photo/2021/02/25/09/42/retirement-6049042_1280.jpg",
  },
  {
    title: "Mutasi & Rotasi Pegawai",
    description: "Proses pengajuan mutasi atau rotasi bagi tenaga pendidik dan kependidikan.",
    image: "https://cdn.pixabay.com/photo/2017/08/01/08/29/businessman-2562325_1280.jpg",
  },
  {
    title: "Kartu Pegawai (KARPEG)",
    description: "Permohonan dan pencetakan ulang KARPEG ASN.",
    image: "https://cdn.pixabay.com/photo/2016/12/07/09/46/business-card-1883300_1280.jpg",
  },
  {
    title: "SK CPNS & PNS",
    description: "Permintaan salinan SK CPNS atau PNS serta pengesahan dokumen kepegawaian.",
    image: "https://cdn.pixabay.com/photo/2016/11/29/04/17/business-1868728_1280.jpg",
  },
  {
    title: "Cuti Pegawai",
    description: "Pengajuan dan verifikasi cuti tahunan, cuti besar, maupun cuti lainnya.",
    image: "https://cdn.pixabay.com/photo/2015/07/02/10/14/calendar-828611_1280.jpg",
  },
  {
    title: "Bimbingan Karier",
    description: "Layanan konsultasi karier dan pengembangan profesional pegawai.",
    image: "https://cdn.pixabay.com/photo/2015/01/27/09/58/job-613088_1280.jpg",
  },
  {
    title: "E-Laporan Kinerja (e-LKP)",
    description: "Pelaporan kinerja secara elektronik untuk ASN Dinas Pendidikan.",
    image: "https://cdn.pixabay.com/photo/2016/03/31/18/52/checklist-1295319_1280.png",
  },
];

export default function LayananSMP() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0d47a1] to-[#1976d2] text-white h-[33vh] flex flex-col justify-center px-6">
        <div className="relative left-[210px] top-[30px]">
          <div className="text-sm text-yellow-300 mb-2">
            <Link to="/" className="font-semibold text-white hover:underline">
              Beranda
            </Link>{" "}
            <span className="mx-1">{">"}</span>Layanan Pegawai
          </div>
          <h1 className="text-3xl font-bold mb-2">LAYANAN KEPEGAWAIAN</h1>
          <p className="text-lg">
            Menyajikan informasi layanan Kepegawaian Dinas Pendidikan Kota Palu
          </p>
        </div>
      </div>

      {/* Konten utama */}
      <div className="pt-12 max-w-6xl mx-auto px-6">
        {/* Slider */}
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

        {/* Layanan Kepegawaian */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">Pelayanan Bidang Kepegawaian</h2>
          <p className="text-gray-600 mb-8 text-center">
            Layanan ini disediakan untuk mendukung manajemen sumber daya manusia di lingkungan Dinas Pendidikan dan Kebudayaan Kota Palu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {KepegawaianPage.map((item, index) => (
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
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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
    </div>
  );
}
