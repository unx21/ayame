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
││ • *${usedPrefix}profile*
││    Untuk mengetahui Informasi saldo, dll
││
││ • *${usedPrefix}rank*
││ • *${usedPrefix}rankcard*
││    Untuk mengecek level, ranking, dll
││
││ • *${usedPrefix}inv*
││ • *${usedPrefix}inventory*
││ • *${usedPrefix}perlengkapan*
││    Untuk mengecek nyawa, item, dll.
│╰────────────────
│
│
│╭─[ *Berpetualang* ]
││
││ • *${usedPrefix}mulung*
││ • *${usedPrefix}adventure*
││ • *${usedPrefix}work*
││   Untuk mencari resource seperti 
││   Uang, Koin, Exp, dll.., dibutuhkan  
││   minimal 80 nyawa dan 20 durability
││   untuk bisa melakukannya dan
││   kamu tidak dapat spam karena
││   ada delay 5 menit
││
││ • *${usedPrefix}use <type> <jumlah>*
││    Untuk memakai potion dan untuk 
││    mengisi nyawa/health, selengkapnya
││    ketik ${usedPrefix}use untuk melihat
││    list potion
││
││ • *${usedPrefix}open <crate> <jumlah>*
││    Untuk membuka crate mu
│╰────────────────
│
│
│╭─[ *Dungeon* ]
││
││ • *${usedPrefix}dungeon*
││    Untuk menangkap monster dan
││    mencari tanaman herbal.., dibutuhkan
││    minimal 90 nyawa, 20 durability dan
││    50 swordpower untuk bisa 
││    melakukannya dan, kamu tidak 
││    dapat spam karena ada delay 5 menit
││ 
││ • *${usedPrefix}racik*
││ • *${usedPrefix}meracik*
││    Untuk meracik beragam jenis potion
││    seperti, spotion, mpotion atau hpotion
││
││ • *${usedPrefix}bedah <monster> <jumlah>*
││    Untuk mendapatkan Magic Stone agar
││    dapat di tempa menjadi peluru
│╰────────────────
│
│
│╭─[ *Berburu* ]
││
││ • *${usedPrefix}berburu*
││ • *${usedPrefix}hunt*
││    Untuk berburu hewan untuk dimasak
││    kemudian dimakan.., dibutuhkan
││    minimal 80 stamina dan 12 magazine
││    untuk bisa melakukannya dan, kamu
││    tidak dapat spam karena ada delay 5 menit
││
││ • *${usedPrefix}reload*
││ • *${usedPrefix}isi peluru <jumlah>*
││    Untuk mereload atau mengisi magazine
││
││ • *${usedPrefix}menempa*
││ • *${usedPrefix}tempa <item>*
││    Untuk membuat perlengkapan seperti
││    peluru dan armor
││
││ • *${usedPrefix}makan*
││ • *${usedPrefix}eat <makanan> <jumlah>*
││    Untuk mengisi stamina kamu
││    yang habis ketika berburu
││
││ • *${usedPrefix}cook*
││ • *${usedPrefix}masak <hewan buruan> <jumlah>*
││    Untuk memasak hewan buruan yang
││    kamu tangkap, jangan lupa sesuaikan
││    dengan kayu bakar mu
│╰────────────────
│
│
│╭─[ *Menambang* ]
││
││ • *${usedPrefix}menambang*
││ • *${usedPrefix}nambang*
││ • *${usedPrefix}tambang*
││    Untuk mencari resource atau item
││    seperti iron dan gold agar dapat
││    di tempa menjadi armor yang akan
││    digunakan untuk berpetualang atau
││    memasuki dungeon
││
││ • *${usedPrefix}pakai <armor> <jumlah>*
││ • *${usedPrefix}gunakan <armor> <jumlah>*
││    Untuk menggunakan armor yang telah
││    ditempa agar mendapatkan
││    durability atau ketahanan
││
││ • *${usedPrefix}menempa <item> <jumlah>*
││ • *${usedPrefix}tempa <item> <jumlah>*
││    Untuk membuat perlengkapan seperti
││    peluru dan armor
│╰────────────────
│
│
│╭─[ *Toko* ]
││ 
││ • *${usedPrefix}shop*
││    Untuk melihat item dan harganya
││
││ • *${usedPrefix}shop buy <item> <jumlah>*
││    Untuk membeli item
││
││ • *${usedPrefix}shop sell <item> < jumlah>*
││    Untuk menjual item
│╰────────────────
│
│
│╭─[ *Pet* ]
││
││ • *${usedPrefix}open <pet>*
││    Untuk mendapatkan pet
││
││ • *${usedPrefix}feed <pet>*
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
