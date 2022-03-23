//made by Anshul
const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const effects = ['jail', 'glass', 'triggered', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text }) => {
    let effect = text.trim().toLowerCase()
  if (!effects.includes(effect)) throw `
*Usage:* ${usedPrefix}stickmaker <effectname>
*Example:* ${usedPrefix}stickmaker jail

*List Effect:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
  await m.reply(global.wait)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No Image Found'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} not support`
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
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

//handler.help = ['stickmaker (caption|reply media)']
//handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?maker)$/i
handler.limit = 1
handler.group = false
handler.register = false
module.exports = handler
