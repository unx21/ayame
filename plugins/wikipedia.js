let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('zeks', '/api/wiki', { q: text }, 'apikey'))
  await m.reply(global.wait)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result.result) throw 'Error!'
  if (json.result.status) m.reply(`${json.result.result}\n\n© 栗山未来`)
  else throw json
}
//handler.help = ['wikipedia'].map(v => v + ' <apa>')
//handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i
handler.register = true
handler.limit = true
//belajar ngocok
module.exports = handler
