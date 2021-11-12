
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
  await m.reply(global.wait)
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = Buffer.alloc(0)
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.png', '© 栗山未来', m, false, {
    thumbnail: Buffer.alloc(0)
  })
}
//handler.help = ['toimg2 (reply)']
//handler.tags = ['sticker']
handler.command = ['toimg2']
handler.register = true
handler.limit = true
module.exports = handler
