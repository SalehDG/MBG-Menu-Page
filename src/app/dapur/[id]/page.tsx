import { menuHariIni } from "@/data/menu";

export default async function DapurPage({ params }: { params: Promise<{ id: string }> }) {
  // Nilai 'id' bisa berisi "1", "2", "baktijaya-1", "sukamaju-2", dll.
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-50 pb-10 flex flex-col items-center">
      {/* Header Branding MBG */}
      <header className="w-full bg-blue-900 text-white py-6 px-4 text-center shadow-md border-b-4 border-blue-500">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wide uppercase">
          Menu Hari Ini
        </h1>
        <p className="text-xs sm:text-base lg:text-xl text-blue-200 mt-1 font-medium">
          SPPG {id}
        </p>
      </header>

      {/* Main Container (Mobile Viewport Optimized) */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-2.5xl px-4 mt-6">
        {/* Card Utama */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 p-2 sm:p-4">

          {/* Foto Menu Utama */}
          <div className="relative h-auto w-full bg-slate-200 overflow-hidden rounded-xl">
            <img
              src={menuHariIni.fotoUrl}
              alt={menuHariIni.namaMenu}
              className="w-full h-auto max-h-[75vh] object-contain mx-auto"
            />
          </div>

        </div>
      </div>
    </main>
  );
}