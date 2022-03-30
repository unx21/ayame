let handler  = async (m, { conn }) => {
  let bot = conn.user.name
  let teks = `
Gausah Beli Paket Premium, Mending Beli Makanan Aja Atau Beli Di Bot Lain Aja
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', `Keuntungan Menjadi Member Premium`, 'status@broadcast')
  
}

handler.command = /^prem(ium)?$/i
handler.register = false

module.exports = handler
