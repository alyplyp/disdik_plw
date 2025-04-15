import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const HIGHLIGHTS: Record<string, string[]> = {
  '5-2': ['Hari Pendidikan Nasional']
};

function KalenderPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7;

  const daysInMonth = lastDayOfMonth.getDate();
  const days: (number | null)[] = [];

  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    const newDate = new Date(year, month - 1, 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(year, month + 1, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4">Kalender Pendidikan</h1>
          <p className="text-xl">Tahun Ajaran 2024/2025</p>
        </div>
      </div>

      {/* Section Wrapper */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Kalender Pendidikan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kalender ini berisi jadwal kegiatan pendidikan sepanjang tahun ajaran, termasuk awal semester, ujian, dan libur sekolah.
            </p>
          </div>

          {/* Calendar and Highlights */}
          <div className="flex flex-col lg:flex-row gap-10 justify-center">
            {/* Calendar Box */}
            <div className="max-w-xl rounded-xl border-3 border-grey-400 bg-white p-6 shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <button onClick={handlePrevMonth}>
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>
                <h2 className="text-lg font-bold uppercase">
                  {MONTH_NAMES[month]} {year}
                </h2>
                <button onClick={handleNextMonth}>
                  <ChevronRight className="h-5 w-5 text-black" />
                </button>
              </div>

              <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-700">
                {WEEK_DAYS.map((day, i) => (
                  <div key={i} className="py-1">
                    {day}
                  </div>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-7 gap-y-2 text-center text-sm">
                {days.map((day, index) => {
                  const isSunday = (index + 1) % 7 === 0;
                  const isToday = day && HIGHLIGHTS[`${month + 1}-${day}`];
                  return (
                    <div
                      key={index}
                      className={`py-2 rounded ${day ? '' : 'text-transparent'} ${isSunday ? 'text-red-500' : ''} ${isToday ? 'bg-yellow-200 font-bold' : ''}`}
                    >
                      {day || '.'}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Highlights Box */}
            <div className="max-w-sm w-full bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Highlight Bulan Ini</h3>
              <ul className="space-y-2 text-gray-700">
                {(
                  Object.entries(HIGHLIGHTS)
                    .filter(([key]) => key.startsWith(`${month + 1}-`))
                    .flatMap(([key, events]) => {
                      const date = key.split('-')[1];
                      return events.map(event => ({ date, event }));
                    })
                ).map((item, index) => (
                  <li key={index} className="border-l-4 border-blue-500 pl-3">
                    <span className="font-semibold">{item.date} {MONTH_NAMES[month]}:</span> {item.event}
                  </li>
                ))}
                {
                  Object.entries(HIGHLIGHTS)
                    .filter(([key]) => key.startsWith(`${month + 1}-`))
                    .flatMap(([_, events]) => events).length === 0 && (
                    <li className="text-gray-400 italic">Tidak ada kegiatan penting</li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KalenderPage;
