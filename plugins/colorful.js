const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await m.reply(global.wait)
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/colorful', { text: teks }, 'APIKEY'), 'colorful.mp4', "© 栗山未来", m)
}
//handler.help = ['colorful'].map((v) => v + " <text>")
//handler.tags = ['videomaker']

handler.command = /^colorful$/i
handler.register = true
handler.limit = true

module.exports = handler
