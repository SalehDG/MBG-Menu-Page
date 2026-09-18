// src/app/dapur/[id]/page.tsx

export default async function DapurPage({ params }: { params: Promise<{ id: string }> }) {
  // Mengambil ID dapur dari URL (misal: /dapur/1, /dapur/2)
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-blue-400">Halaman Dapur #{id}</h1>
        <p className="text-slate-400 text-sm mt-2">
          Halaman ini menampilkan menu harian khusus untuk Unit Dapur MBG No. {id}.
        </p>

        {/* Nanti di sini tempat menampilkan gambar menu dari Database berdasarkan ID Dapur */}
        <div className="mt-6 p-4 bg-slate-900 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-500">Foto Menu Dapur {id} akan dirender di sini</p>
        </div>
      </div>
    </main>
  );
}