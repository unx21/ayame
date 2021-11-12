let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await m.reply(global.wait)
  conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
//handler.help = ['attp <teks>']
//handler.tags = ['sticker']
handler.command = /^attp$/i
handler.register = true
handler.limit = true
module.exports = handler
