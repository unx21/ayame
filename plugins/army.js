const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await m.reply(global.wait)
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/army', { text: teks }, 'APIKEY'), 'army.mp4', teks, m)
}
//handler.help = ['army'].map((v) => v + " <text>")
//handler.tags = ['videomaker']
handler.command = /^army$/i
handler.register = true
handler.limit = true

module.exports = handler
