let handler = async (m, { conn, text }) => {
  let [teks, wm] = text.split`|`
  await m.reply(global.wait)
  await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text: teks, wm: wm ? wm : conn.getName(m.sender) }, 'APIKEY'), 'file.jpg', '© 栗山未来', m)
}
handler.help = ['quote'].map(v => v + 'maker <teks>|<wm>')
handler.tags = ['maker']
handler.command = /^quotemaker$/i
handler.register = false
handler.premium = true

module.exports = handler
