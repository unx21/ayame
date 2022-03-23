const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  await m.reply(global.wait)
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${link}
${media.length} Byte(s)
${isTele ? '(No Expiry Date)' : '(Unknown)'}`)
}
//handler.help = ['upload (caption|reply media)']
//handler.tags = ['tools']
handler.command = /^up(load)$/i
handler.register = false
handler.premium = true

module.exports = handler
