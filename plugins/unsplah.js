// suka susu

const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Nyari apa?'
  let res = await fetch(global.API('zeks','/api/unsplash', {
    q : encodeURI(text)
  }, 'apikey'))
  await m.reply(global.wait)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.result[Math.floor(Math.random() * json.result.length)]
  if (json.status) conn.sendFile(m.chat, img.img_hd, 'unsplash', '© 栗山未来', m)
    else throw json
}
//handler.help = ['unsplash <keyword>']
//handler.tags = ['internet']
handler.command = /^(unsplash)$/i
handler.register = true
handler.limit = true
//
module.exports = handler
