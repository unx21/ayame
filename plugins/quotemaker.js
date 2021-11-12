let handler = async (m, { conn, text }) => {
  let [teks, wm] = text.split`|`
  await m.reply(global.wait)
  await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text: teks, wm: wm ? wm : conn.getName(m.sender) }, 'APIKEY'), 'file.jpg', '© 栗山未来', m)
}
//handler.help = ['quote'].map(v => v + 'maker <teks>|<wm>')
//handler.tags = ['nulis']
handler.command = /^quotemaker$/i
handler.register = true
handler.limit = true

module.exports = handler
