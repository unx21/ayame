let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭─「 *I N F O R M A S I* 」
│
│
│   Bot ini sedikit ribet dan mungkin
│   penjelasan dasar ini akan membantu
│   anda agar paham penggunaan bot ini,
│   kamu bisa mengetik ${usedPrefix}tutorial untuk
│   penjelasan tentang fitur RPG.
│   
│
│   1. Nyawa atau Healt
│        yahh sesuai namanya, kamu
│        membutuhkannya untuk bermain fitur
│        RPG seperti adventure, dungeon
│        dan menambang.
│
│   2. Stamina
│        sesuai namanya juga, tapi kamu hanya
│        membutuhkannya untuk memainkan
│        fitur hunt/berburu.
│
│   3. Durability
│        selain nyawa/healt, kamu memerlukan
│        durability untuk memainkan adventure
│        dan dungeon.
│
│   4. Limit
│        memiliki kesamaan seperti tiket,
│        kegunaannya adalah untuk mengakses
│        sebagian besar fitur, jika limit kamu
│        habis, silahkan membelinya dengan cara
│        *${usedPrefix}buy limit*, juga bisa
│        memasukkan jumlah yang sesuai dengan
│        saldo kamu, namun ada beberapa
│        fitur yang hanya bisa di akses oleh
│        _*User Premium.*_
│
│   5. Uang
│        kegunaannya adalah untuk membeli
│        limit, kamu bisa mendapatkannya
│        dengan cara memainkan games
│        yang ada di ${usedPrefix}gamesmenu
│
│   6. Koin
│        kegunaannya untuk membeli barang
│        yang ada di shop.
│
│   7. Level
│        cara menaikkan level adalah dengan
│        cara sering berkomunikasi atau
│        memberikan perintah/menggunakan
│        fitur bot secara rutin (bukan spam),
│        semakin tinggi level kalian maka
│        semakin banyak pula exp yang dibutuhkan
│        untuk menaikkan level kalian.
│
│   8. Rank
│        setiap 10 level, rank kamu akan naik
│        1 tingkat, contoh nya: rank kamu akan
│        naik apabila kamu mencapai level 10,
│        level 20, dst.
│
│
│   Itulah bagian dasar untuk memahami cara
│   bermain bot ini, saya berharap agar tulisan
│   ini dapat dimengerti dan semoga harimu
│   menyenangkan.
│
│                                                         _Salam Hangat_
│                                                                 _U n x_
╰─「 *I N F O R M A S I* 」
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'I N F O R M A S I   D A S A R', 'status@broadcast')
  }
handler.command = /^info$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
