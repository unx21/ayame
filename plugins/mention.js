let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukan teks yang akan ditirui oleh Bot!'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
//handler.help = ['mention','say'].map(v => v + ' <text>')
//handler.tags = ['fun']
handler.group = true
handler.register = false
handler.premium = true

handler.command = /^mention|say$/i

module.exports = handler
