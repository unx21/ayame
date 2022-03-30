const { MessageType } = require('@adiwajshing/baileys')
let num = /([0-9])$/i
let handler = async (m, { conn, text }) => {
if (text.length > 7) throw 'Max. 7 huruf!'
if (num.test(text)) throw 'Hanya Huruf!'
if (!text) text = await conn.getName(m.sender)
await m.reply(global.wait)
  let apiUrl = global.API( 'https://hardianto.xyz', '/api/bot/gura', {
    apikey: 'hardianto',
    nama: text
  })
    await conn.sendFile(m.chat, apiUrl, 'image.png', global.packname, m)
}
handler.help = ['gura <teks>']
handler.tags = ['sticker']
handler.command = /^gura$/i
handler.register = false
handler.limit = 3

module.exports = handler
