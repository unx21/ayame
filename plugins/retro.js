const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await m.reply(global.wait)
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/retro', { text: teks }, 'APIKEY'), 'retro.mp4', teks, m)
}
//handler.help = ['retro'].map((v) => v + " <text>")
//handler.tags = ['videomaker']
handler.register = false
handler.limit = 5
handler.command = /^retro$/i

module.exports = handler
