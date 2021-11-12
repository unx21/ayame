let handler = async (m, { conn, text }) => {
    let name = ('6289524339740@s.whatsapp.net')
    let panggil = `
    百鬼あやめ\n\nAda Hanya Untuk Melayani Master U n x
    `.trim()
    let mentionedJid = [name]
  conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /6289524339740/i
handler.command = new RegExp

module.exports = handler
