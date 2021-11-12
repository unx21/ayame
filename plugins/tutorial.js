let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭─「 *Tutorial Main RPG* 」
│
│
│       *[ Just Info ]*
│
│     Tidak perlu menggunakan kode seperti
│     <  ataupun  >  karena itu hanya sebagai
│     pembatas teks antara satu dan lainnya
│ 
│       *[ Just Info ]*
│
│
│
│╭─[ *Profile* ]
││
││ • *.profile*
││    Untuk mengetahui Informasi saldo, dll
││
││ • *.rank*
││ • *.rankcard*
││    Untuk mengecek level, ranking, dll
││
││ • *.inv*
││ • *.inventory*
││ • *.perlengkapan*
││    Untuk mengecek nyawa, item, dll.
│╰────────────────
│
│
│╭─[ *Berpetualang* ]
││
││ • *.mulung*
││ • *.adventure*
││ • *.work*
││   Untuk mencari resource seperti 
││   Uang, Koin, Exp, dll.., dibutuhkan  
││   minimal 80 nyawa untuk bisa 
││   melakukannya dan, kamu tidak 
││   dapat spam karena ada delay 5 menit
││
││ • *.heal*
││ • *.use potion <jumlah>*
││    Untuk memakai potion dan untuk 
││    mengisi nyawa/health
││
││ • *.open <crate> <jumlah>*
││    Untuk membuka crate mu
│╰────────────────
│
│
│╭─[ *Dungeon* ]
││
││ • *.gasdungeon*
││ • *.dungeon*
││    Untuk menangkap monster dan
││    mencari tanaman herbal.., dibutuhkan
││    minimal 90 nyawa untuk bisa 
││    melakukannya dan, kamu tidak 
││    dapat spam karena ada delay 5 menit
││ 
││ • *.racik*
││ • *.meracik*
││    Untuk meracik Small Potion dan
││    dapat di tukarkan dengan Potion
││
││ • *.bedah <monster> <jumlah>*
││    Untuk mendapatkan Magic Stone agar
││    dapat di tempa menjadi peluru
││
││ • *.barter*
││    Untuk menukarkan Small Potion
││    menjadi Potion
│╰────────────────
│
│
│╭─[ *Berburu* ]
││
││ • *.berburu*
││ • *.hunt*
││    Untuk berburu hewan untuk dimasak
││    kemudian dimakan.., dibutuhkan
││    minimal 80 stamina dan 12 magazine
││    untuk bisa melakukannya dan, kamu
││    tidak dapat spam karena ada delay 5 menit
││
││ • *.reload*
││ • *.isi peluru <jumlah>*
││    Untuk mereload atau mengisi magazine
││
││ • *.menempa*
││ • *.tempa <item>*
││    Untuk membuat perlengkapan seperti
││    peluru dan armor
││
││ • *.makan*
││ • *.eat <makanan> <jumlah>*
││    Untuk mengisi stamina kamu
││    yang habis ketika berburu
││
││ • *.cook*
││ • *.masak <hewan buruan> <jumlah>*
││    Untuk memasak hewan buruan yang
││    kamu tangkap, jangan lupa sesuaikan
││    dengan kayu bakar mu
│╰────────────────
│
│
│╭─[ *Menambang* ]
││
││ • *.menambang*
││ • *.nambang*
││ • *.tambang*
││    Untuk mencari resource atau item
││    seperti iron dan gold agar dapat
││    di tempa menjadi armor yang akan
││    digunakan untuk berpetualang atau
││    memasuki dungeon
││
││ • *.pakai <armor> <jumlah>*
││ • *.gunakan <armor> <jumlah>*
││    Untuk menggunakan armor yang telah
││    ditempa agar mendapatkan
││    durability atau ketahanan
││
││ • *.menempa <item> <jumlah>*
││ • *.tempa <item> <jumlah>*
││    Untuk membuat perlengkapan seperti
││    peluru dan armor
│╰────────────────
│
│
│╭─[ *Toko* ]
││ 
││ • *.shop*
││    Untuk melihat item dan harganya
││
││ • *.shop buy <item> <jumlah>*
││    Untuk membeli item
││
││ • *.shop sell <item> < jumlah>*
││    Untuk menjual item
│╰────────────────
│
│
│╭─[ *Pet* ]
││
││ • *.open <pet>*
││    Untuk mendapatkan pet
││
││ • *.feed <pet>*
││    Untuk memberi makan pet
│╰────────────────
│
│
╰─「 *Tutorial Main RPG* 」

`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Tutorial Bermain RPG', 'status@broadcast')
  }
handler.command = /^tutorial$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler