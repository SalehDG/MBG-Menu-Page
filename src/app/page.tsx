import { menuHariIni } from "@/data/menu";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 pb-10 flex flex-col items-center">
      {/* Header Branding MBG */}
      <header className="w-full bg-blue-900 text-white py-6 px-4 text-center shadow-md border-b-4 border-blue-500">
        <h1 className="text-xl font-black tracking-wide uppercase">
          Makan Bergizi Gratis
        </h1>
        <p className="text-xs text-blue-200 mt-1 font-medium">
          Portal Menu Harian Siswa
        </p>
      </header>

      {/* Main Container (Mobile Viewport Optimized) */}
      <div className="w-full max-w-md px-4 mt-6">
        {/* Card Utama */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          
          {/* Badge Tanggal */}
          <div className="bg-blue-50 px-4 py-3 border-b border-blue-100 flex justify-between items-center">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              Menu Hari Ini
            </span>
            <span className="text-xs font-bold text-slate-600">
              {menuHariIni.tanggal}
            </span>
          </div>

          {/* Foto Menu Utama */}
          <div className="relative h-64 w-full bg-slate-200">
            <img
              src={menuHariIni.fotoUrl}
              alt={menuHariIni.namaMenu}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detail Menu */}
          <div className="p-5">
            <h2 className="text-xl font-bold text-slate-800 leading-snug">
              {menuHariIni.namaMenu}
            </h2>
            
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {menuHariIni.deskripsi}
            </p>

            {/* List Komposisi / Nutrisi */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Rincian Hidangan
              </h3>
              <ul className="space-y-2">
                {menuHariIni.komposisi.map((item, index) => (
                  <li key={index} className="flex items-center text-sm font-medium text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}