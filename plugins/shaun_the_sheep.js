const uploadImage = require('../lib/uploadImage')
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  await m.reply(global.wait)
  let media = await q.download()
  let url = await uploadImage(media)
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/shaunthesheep', { url }, 'APIKEY'), 'shaunthesheep.mp4', 'jangan sedih yaa...', m)
}
//handler.help = ['shaunthesheep']
//handler.tags = ['videomaker']

handler.command = /^shaunthesheep|sts$/i
handler.register = false
handler.premium = true
module.exports = handler
