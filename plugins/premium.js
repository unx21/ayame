let handler  = async (m, { conn }) => {
  let bot = conn.user.name
  let teks = `
Gratis 1 hari percobaan untuk grup! Agar bot _*${bot}*_ tetap berada di grup anda dengan waktu lebih lama silahkan sewa bot dengan harga dibawah ini!
${readMore}
Info donasi untuk premium :
 • Donasi 5.000 = 1 bulan Premium
 • Donasi 10.000 = 2 bulan Premium
 • Donasi 20.000 = 3 bulan Premium
 • Donasi 30.000 = 4 bulan Premium
 • Donasi 50.000 = VIP PERMANEN

Invite bot ke grup :
 • Donasi 10.000 = 1 bulan 
 • Donasi 20.000 = 2 bulan 
 • Donasi 30.000 = 3 bulan 
 • Donasi 40.000 = 4 bulan 
 • Donasi 60.000 = VIP PERMANEN

Apa saja keuntungan premium?
 • Bisa Akses semua fitur
 • Limit UNLIMITED (Tidak Terbatas)
 • Dapat menambahkan bot ke grup Anda
 • Bisa jadi bot di nomor Anda.
 • Bonus saldo bot 500.000 untuk donasi 5.000 dst.

Ayo gabung bersama mereka yang sudah donasi dan mendapatkan banyak keuntungan dengan akses semua fitur bot.
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', `Keuntungan Menjadi Member Premium`, 'status@broadcast')
  
}

handler.command = /^prem(ium)?$/i
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)