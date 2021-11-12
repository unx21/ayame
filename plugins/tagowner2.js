let handler = async (m, { conn, text }) => {
  let name = ('62887436568613@s.whatsapp.net')
  let panggil = `
  Jangan Tag Master\n\nSaya Tidak Suka Jika Master Saya Di Tag Oleh Anda
  `.trim()
  let mentionedJid = [name]
 conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})
  
}
handler.customPrefix = /62887436568613/i
handler.command = new RegExp

module.exports = handler
