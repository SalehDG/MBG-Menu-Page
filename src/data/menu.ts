export interface MenuItem {
  id: string;
  tanggal: string;
  namaMenu: string;
  fotoUrl: string;
  deskripsi: string;
  komposisi: string[];
}

export const menuHariIni: MenuItem = {
    id: "1",
    tanggal: "Jumat, 14 Juni 2024",
    namaMenu: "Nasi Goreng Spesial",
    fotoUrl: "/Menu.jpeg",
    deskripsi: "Nasi goreng spesial dengan bumbu rahasia dan topping ayam suwir.",
    komposisi: ["Nasi", "Ayam", "Telur", "Bawang Merah", "Bawang Putih", "Kecap Manis", "Sambal"]
};