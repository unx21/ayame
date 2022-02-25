let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  let res = await fetch(global.API('zeks', '/api/pinimg', {
    q: encodeURI(text)
  }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.data[Math.floor(Math.random() * json.data.length)];
  conn.sendButtonImg(m.chat, await(await fetch(pint)), `Hasil Pencarian\n${text}`, '© 百鬼あやめ', 'N e x t', `#pint2 ${text}`, m)
}
//handler.help = ['pinterest <pencarian>']
//handler.tags = ['internet']
handler.command = /^(pint2)$/i
handler.premium = true

module.exports = handler
