import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar.tsx";
import Footer from "./Components/Footer";
import {
  School,
  BookOpen,
  Users,
  Building2,
  Star,
} from "lucide-react";

import ProfilePage from "./pages/Public/ProfilePage.tsx";
import BrandIdentityPage from "./pages/Public/BrandIdentityPage.tsx";
import SejarahPage from "./pages/Public/SejarahPage.tsx";
import KalenderPage from "./pages/Public/KalenderPage.tsx";
import DokumentasiPage from "./pages/Public/DokumentasiPage.tsx";
import KepegawaianPage from "./pages/Public/LayananKepegawaianPage.tsx";
import PerencanaanPage from "./pages/Public/LayananPerencanaanPage.tsx";
import KetenagaanPage from "./pages/Public/LayananKetenagaanPage.tsx";
import KebudayaanPage from "./pages/Public/LayananKebudayaanPage.tsx";
import PaudPage from "./pages/Public/LayananPaudPage.tsx";
import SdPage from "./pages/Public/LayananSDPage.tsx";
import SmpPage from "./pages/Public/LayananSMPPage.tsx";
import SubSekretariatPage from "./pages/Public/LayananSubSekretariatPage.tsx";
import AsetKeuanganPage from "./pages/Public/LayananAsetKeuanganPage.tsx";
import BeritaPage from "./pages/Public/BeritaPage.tsx";
// Import core Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import "animate.css";

function App() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const services = [
    { title: "PAUD", icon: <School className="w-12 h-12" /> },
    { title: "SD", icon: <School className="w-12 h-12" /> },
    { title: "SMP", icon: <School className="w-12 h-12" /> },
    { title: "Ketenagaan", icon: <Users className="w-12 h-12" /> },
    { title: "Kepegawaian", icon: <Users className="w-12 h-12" /> },
    { title: "Kebudayaan", icon: <Star className="w-12 h-12" /> },
    { title: "Perencanaan", icon: <BookOpen className="w-12 h-12" /> },
    { title: "Sub Sekretariat", icon: <Building2 className="w-12 h-12" /> },
    { title: "Aset dan Keuangan", icon: <Building2 className="w-12 h-12" /> },
  ];

  const news = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Program Beasiswa 2024",
      description: "Pendaftaran beasiswa untuk siswa berprestasi telah dibuka untuk tahun ajaran 2024/2025.",
      image: "https://sultengraya.com/wp-content/uploads/2024/11/HLLL-1.jpg",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pelatihan Guru",
      description: "Workshop pengembangan kompetensi guru akan diadakan bulan depan di Aula Dinas Pendidikan.",
      image: "https://palukota.go.id/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-19-at-16.09.38-1-1024x576.jpeg",
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Pembangunan Sekolah",
      description: "Renovasi 5 sekolah dasar di Kota Palu akan dimulai pada bulan Juli 2024.",
      image: "https://asset-2.tstatic.net/palu/foto/bank/images/Wali-Kota-Palu-diwakili-Kepala-Dinas-Pendidikan-dan-Kebud.jpg",
    },
  ];

  const onMenuClick = (_menu: string, item: string) => {
    const routes: Record<string, string> = {
      "Sejarah": "/sejarah",
      "Beranda": "/beranda",
      "Visi Misi": "/brand-identity",
      "Struktur Organisasi": "/profile",
      "PAUD": "/paud",
      "SD": "/sd",
      "SMP": "/smp",
      "Ketenagaan": "/ketenagaan",
      "Kepegawaian": "/kepegawaian",
      "Kebudayaan": "/kebudayaan",
      "Perencanaan": "/perencanaan",
      "Sub Sekretariat": "/sub-sekretariat",
      "Aset dan Keuangan": "/aset-dan-keuangan",
      "Berita": "/berita",
      "Kalender": "/kalender",
      "Dokumentasi": "/dokumentasi",
    };
    const route = routes[item];
    if (route) {
      navigate(route);
    }
  };
  
  const HomeSection = () => (
    <>
      <section className="relative h-[900px] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="h-full swiper-fade"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="h-full w-full relative bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url('public/images/bg beranda/Sisi Depan.jpg')` }}
            >
              {/* Layer gelap */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
              {/* Text di tengah */}
              <div className="relative text-center text-white z-10">
                <motion.h1 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  Dinas Pendidikan dan Kebudayaan Kota Palu
                </motion.h1>
                <motion.h2 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="text-2xl md:text-4xl font-semibold"
                >
                  #Palukanamapande
                </motion.h2>
              </div>
            </div>
          </SwiperSlide>
  
          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="h-full w-full relative bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url('public/images/bg beranda/Sisi samping kanan.jpg')` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative text-center text-white z-10">
                <motion.h1 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  Dinas Pendidikan dan Kebudayaan Kota Palu
                </motion.h1>
                <motion.h2 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="text-2xl md:text-4xl font-semibold"
                >
                  #Palukanamapande
                </motion.h2>
              </div>
            </div>
          </SwiperSlide>
  
          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="h-full w-full relative bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url('public/images/bg beranda/sisi samping kiri.jpg')` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative text-center text-white z-10">
                <motion.h1 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  Dinas Pendidikan dan Kebudayaan Kota Palu
                </motion.h1>
                <motion.h2 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="text-2xl md:text-4xl font-semibold"
                >
                  Palukanamapande
                </motion.h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
     {/* Highlight Berita Section */}
     <section className="py-20 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#6dd5ed]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-semibold text-center text-white mb-12">
      Highlight Berita
    </h2>
    <div className="flex flex-col lg:flex-row gap-8">
      
      {/* Berita Populer */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white mb-6">Berita Populer</h3>
        {news.slice(0, 1).map((n, i) => (
          <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div
              className="w-full h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${n.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-semibold">{n.title}</h3>
              <p className="text-lg mt-2">{n.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Berita Terkini */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white mb-6">Berita Terkini</h3>
        {news.slice(1).map((n, i) => (
          <div key={i} className="relative mb-8 group overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${n.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">{n.title}</h3>
              <p className="text-lg mt-2">{n.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


  
      {/* Kalender Pendidikan Section */}
<section className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-10 tracking-wide">
      Kalender Pendidikan
    </h2>
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <KalenderPage /> {/* Kalender component */}
    </div>
  </div>
</section>

    </>
  );
  

  return (
    <>
      <Navbar
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        dropdownMenus={{
          profil: ["Sejarah", "Visi Misi", "Struktur Organisasi",],
          layanan: [
            "PAUD", "SD", "SMP", "Ketenagaan", "Kepegawaian",
            "Kebudayaan", "Perencanaan", "Sub Sekretariat", "Aset dan Keuangan"
          ],
          publikasi: ["Berita", "Kalender", "Dokumentasi"]
        }}
        onMenuClick={onMenuClick}
      />

      <Routes>
        <Route path="/beranda" element={<HomeSection />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/brand-identity" element={<BrandIdentityPage />} />
        <Route path="/sejarah" element={<SejarahPage />} />
        <Route path="/kalender" element={<KalenderPage />} />
        <Route path="/dokumentasi" element={<DokumentasiPage />} />
        <Route path="/kepegawaian" element={<KepegawaianPage />} />
        <Route path="/ketenagaan" element={<KetenagaanPage />} />
        <Route path="/kebudayaan" element={<KebudayaanPage />} />
        <Route path="/perencanaan" element={<PerencanaanPage />} />
        <Route path="/paud" element={<PaudPage />} />
        <Route path="/sd" element={<SdPage />} />
        <Route path="/smp" element={<SmpPage />} />
        <Route path="/sub-sekretariat" element={<SubSekretariatPage />} />
        <Route path="/aset-dan-keuangan" element={<AsetKeuanganPage />} />
        <Route path="/berita" element={<BeritaPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
