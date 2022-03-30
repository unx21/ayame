let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Contoh: ${usedPrefix + command} minecraft`
  let res = await fetch(global.API('zeks', '/api/pinimg', {
    q: encodeURI(text)
  }, 'apikey'))
  await m.reply(global.wait)
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.data[Math.floor(Math.random() * json.data.length)];
  /* conn.sendFile(m.chat, pint, '', `
*Hasil pencarian*
${text}
`.trim(), m) */
await conn.sendButtonImg(m.chat, await(await fetch(pint)).buffer(), `Hasil pencarian\n${text}`, '© 百鬼あやめ', 'N e x t', m.text, m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pint(erest)?)$/i
handler.register = false
handler.premium = true


module.exports = handler
