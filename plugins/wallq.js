const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Nyari apa?'
  await m.reply(global.wait)
  let res = await fetch(global.API('https://wall.alphacoders.com/api2.0','/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
  await conn.sendButtonImg(m.chat, await(await fetch(img.url_image)).buffer(), `Hasil Pencarian\n${text}`, '© ヴァイオレット', 'N e x t', m.text, m)
}
//handler.help = ['wallpaperq <query>']
//handler.tags = ['internet']
handler.command = /^wall(paper)?q?$/i
handler.register = false

handler.premium = true

module.exports = handler
