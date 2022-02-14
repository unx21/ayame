// Pngocok handal

let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  await m.reply(global.wait)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  let teks = `*${json.title}*\n_${json.author}_\n\n${json.lyrics}\n\n\n${json.links.genius}`
  let foot = '© 百鬼あやめ'
  await conn.sendButtonImg(m.chat, await(await fetch(json.thumbnail.genius)).buffer(), teks, foot, 'S o n g   Ⓟ', `#play ${text}`, m)
}
//handler.help = ['lirik'].map(v => v + ' <Apa>')
//handler.tags = ['internet']
handler.command = /^(lrc|lirik|lyrics|lyric)$/i
handler.register = false
handler.limit = true

module.exports = handler
