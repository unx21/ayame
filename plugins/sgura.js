const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
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
try {
    let stiker = await sticker(null, apiUrl, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('Conversion to Sticker Failed, Sending as Image Instead')
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
  }
}
handler.help = ['stickergura <teks>', 'sgura <teks>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?gura$/i
handler.register = false
handler.limit = 3

module.exports = handler
