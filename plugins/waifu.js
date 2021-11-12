let fetch = require('node-fetch')
let handler = async(m, { conn, command }) => {
  let res = await fetch(`https://api.waifu.pics/sfw/${command.toLowerCase()}`)
  await m.reply(global.wait)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '© 栗山未来', m)
}
//handler.help = ['waifu']
//handler.tags = ['internet']
handler.command = /^(waifu|neko|megumin|shinobu|kitsune)$/i
handler.register = true
handler.limit = 5

module.exports = handler
