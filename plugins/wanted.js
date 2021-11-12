const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  await m.reply(global.wait)
try {
 await m.reply(global.wait)
  let [text1, text2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://videfikri.com/api/textmaker/wanted/?urlgbr=${url}&text1=${text1}&text2=${text2}`
  let stiker = await sticker(null, wanted, 'Wanted', 'Haachamaa')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
} catch (e) {
  m.reply('Conversion Failed')
  }
}
handler.command = /^(wanted)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler
