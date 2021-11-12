const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let [t1, t2] = text.split`|`
  if (!t1) t1 = ' '
  if (!t2) t2 = ' '
  await m.reply(global.wait)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Unknown Mimetype`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let link = await uploadImage(img).catch(e => uploadFile(img))
  conn.sendFile(m.chat, global.API('https://api.memegen.link', `/images/custom/${encodeURIComponent(t1)}/${encodeURIComponent(t2)}.png`, {
    background: link
  }), 'meme.png', `© 栗山未来`, m)
}
//handler.help = ['memegen'].map(v => v + '<apa|apa>')
//handler.tags = ['tools']
handler.command = /^(memecreator)$/i
handler.register = true
handler.limit = true


module.exports = handler
