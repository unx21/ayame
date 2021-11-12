let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('pencarikode', '/api/truthid', {}, 'apikey'))
  await m.reply(global.wait)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.message) throw 'Error!'
  if (json.message) m.reply(json.message)
  else throw json
}
//handler.help = ['truth']
//handler.tags = ['fun']
handler.command = /^(truth|kebenaran|kejujuran)$/i
handler.register = true
handler.limit = true
//ftwr
module.exports = handler