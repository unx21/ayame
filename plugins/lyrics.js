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
  await conn.sendButtonImg(m.chat, await(await fetch(json.thumbnail.genius)).buffer(), `
*${json.title}*
_${json.author}_

${json.lyrics}


${json.links.genius}
`, `© 百鬼あやめ`, m)
}
//handler.help = ['lirik'].map(v => v + ' <Apa>')
//handler.tags = ['internet']
handler.command = /^(lrc|lirik|lyrics|lyric)$/i
handler.register = false
handler.limit = true

module.exports = handler
