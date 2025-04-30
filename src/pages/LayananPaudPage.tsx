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
    title: "Pendaftaran PAUD 2025",
    description: "Pendaftaran peserta didik PAUD segera dibuka! Simak syarat dan waktunya.",
    image: "https://cdn.pixabay.com/photo/2016/03/27/17/40/children-1280240_1280.jpg",
  },
  {
    title: "Bantuan Operasional PAUD",
    description: "Informasi dana BOS PAUD tahap II dan pelaporan penggunaan dana.",
    image: "https://cdn.pixabay.com/photo/2017/03/27/13/28/classroom-2174651_1280.jpg",
  },
  {
    title: "Pelatihan Guru PAUD",
    description: "Program peningkatan kapasitas guru PAUD oleh Dinas Pendidikan.",
    image: "https://cdn.pixabay.com/photo/2016/03/27/21/39/kids-1283826_1280.jpg",
  },
];

const layananPaud: Layanan[] = [
  {
    title: "Pendaftaran Peserta Didik Baru (PPDB)",
    description: "Pengajuan pendaftaran PAUD Kota Palu untuk tahun ajaran baru.",
    image: "https://cdn.pixabay.com/photo/2022/06/22/08/24/kids-7277372_1280.jpg",
  },
  {
    title: "Data Lembaga PAUD",
    description: "Informasi tentang lembaga PAUD terdaftar dan terakreditasi.",
    image: "https://cdn.pixabay.com/photo/2021/09/14/07/51/kindergarten-6623802_1280.jpg",
  },
  {
    title: "Pelaporan BOS PAUD",
    description: "Panduan pengajuan dan pelaporan dana BOS untuk lembaga PAUD.",
    image: "https://cdn.pixabay.com/photo/2016/02/19/10/00/children-1201816_1280.jpg",
  },
  {
    title: "Permohonan Fasilitas Pendidikan",
    description: "Ajukan bantuan sarana dan prasarana untuk lembaga PAUD.",
    image: "https://cdn.pixabay.com/photo/2017/03/02/09/04/kids-2119901_1280.jpg",
  },
];

export default function LayananSMP() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#6dd5ed] overflow-hidden">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-start px-10 md:px-24 pt-16 md:pt-20">
    <div className="max-w-2xl">
      {/* Garis kecil dekoratif */}
      <div className="w-20 h-1 bg-yellow-300 mb-4"></div>

      {/* Breadcrumb */}
      <div className="text-sm text-yellow-300 mb-2 tracking-widest uppercase">
        <Link to="/" className="hover:underline text-white font-medium">
          Beranda
        </Link>
        <span className="mx-1">/</span>
        <span className="text-white">Layanan Siswa</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white drop-shadow-lg mb-4">
        Layanan Siswa <br className="hidden md:block" /> Tingkat PAUD
      </h1>

      {/* Description */}
      <p className="text-lg text-white/90 font-light leading-relaxed">
        Akses layanan digital untuk kebutuhan siswa PAUD di bawah naungan
        <span className="font-semibold text-white"> Dinas Pendidikan Kota Palu</span>. 
        Mulai dari PPDB hingga layanan dokumen resmi.
      </p>
    </div>
  </div>
</section>

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

        {/* Layanan PAUD */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">Pelayanan Bidang PAUD</h2>
          <p className="text-gray-600 mb-8 text-center">
            Layanan ini disediakan untuk mendukung pengelolaan, pendaftaran, dan pengembangan Pendidikan Anak Usia Dini di Kota Palu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layananPaud.map((item, index) => (
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
