# SPEC — news-image-20261122 "The World in One Day"

## Kompetisi
- news-image-20261122, "Sum up 22 November's world news in one image".
- Deadline: Selasa 24 Nov 2026 07:00 WIB (2026-11-24T00:00:00Z). Opens: 22 Nov 2026 00:00 UTC.
- $100, top 50 (1st $20). Judge: GLM-5.3-flash pairwise.
- Gate: PNG/JPEG ≤1 MiB, ≤1024×1024. Force_Last. Transcripts required.
- Akun: tommypatrick18. Submit: --repo-url (README 3 badge live + About: homepage =
  halaman bounty, topik `makefun`).

## Gambar (entry.png)
- 1024×1024, 309,1 KiB, SHA-256 a964e0a6c95fffc34792bdae42e625044a048872a4cd0a73daf80c0434086858.
- 42 cerita unik terverifikasi (4 hero + 12 kartu + 26 indeks + strip 5 angka + peta).
- Mode padat baris 7 (N 41–44) dari SPEC-REVISED-V2.4.2 (ni19): margin 16, gutter 6.
  Masthead 140 (nama 22px, tanggal 52px), hero 178 (4×242), kartu 238 (2 baris × 6),
  strip angka 48 (5×192), peta+panel 200 (peta 560 + panel 420), indeks 112 (4 kolom),
  footer 40.
- Tipografi: Noto Serif bold (masthead + headline), Noto Sans (label/angka/indeks).
  Hero headline 22px (2 baris, ≤36 karakter), kartu 15px (2 baris, ≤24 karakter),
  indeks 10,5px (≤40 karakter).
- Warna: ink blue #12395b, kertas #f7f5ef, teal #0f766e, amber #d97706, merah #b91c1c.
- Ilustrasi: SVG editorial segar, 2–3 warna berani per cerita, tanpa wajah orang nyata.
- Peta: Natural Earth 110m (public domain, world-atlas land-110m.json), equirectangular,
  potong lintang ±60°, pin bernomor = nomor cerita (klaster: Washington ×3, SF Bay Area ×4).
  GLOBAL/SPACE (tanpa pin): Riemann, Bitcoin, BepiColombo, mini-moon, studi ilmiah.
- Footer: DATE CHECK — "EVERY STORY DATED 22 NOVEMBER 2026 OR REPORTED THAT DAY".

## Build (segar, tidak menyalin file repo ni17/ni18/ni19)
- Generator: `~/workspace/makefun/news-image-20261122-work/build.py` (Python 3, stdlib +
  PIL untuk downscale) → `page.html` → Chromium headless (chromium-1255) screenshot
  1024×1024 → `entry.png`. Peta: konversi TopoJSON→SVG di build.py.
- Konten: `stories.json` (42 cerita) + `SOURCES-42.md` (sumber + URL + tanggal per cerita).
- Program entri: `main.ts` (Node 22, stdlib saja) — menyalin `entry.png` ke stdout
  secara deterministik (dua run = byte identik).
- Verifikasi: audit overflow Chromium = OVERFLOW_ITEMS=0, PAGE_OVER=0 (termasuk cek
  container .cell/.card/.panel/.index/.mapbox); dimensi 1024×1024; ukuran ≤1 MiB;
  cek visual penuh + downscale 600/300 (tanggal masthead, headline hero, angka strip
  terbaca di 300px).

## Aturan tanggal (jujur di SOURCES-42.md)
- Bursa tutup Minggu 22 Nov → angka pasar = penutupan Jumat 20 Nov, pertama dilaporkan
  21–22 Nov. Laga Sabtu 21 Nov (Eropa/AS) selesai Minggu 22 Nov dini hari WIB.
- Klaim ditulis sebagai klaim: Riemann ("CLAIMS", Clay masih lists unsolved),
  Sudan SAF ("claims"), CrowdStrike ("in talks"), Hunger Games ("eyes", proyeksi).
- Dibuang: El Chapo Isidro (20–21 Nov), delegasi Qatar–Teheran (20 Nov), feature
  lansia Sudan (21 Nov), plus 8 cerita ekonomi lama/tak terverifikasi.
