const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await m.reply(global.wait)
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/glowing', { text: teks }, 'APIKEY'), 'glowing.mp4', teks, m)
}
handler.help = ['glowing'].map((v) => v + " <text>")
handler.tags = ['videomaker']
handler.command = /^glowing$/i
handler.register = false
handler.limit = 2

module.exports = handler
