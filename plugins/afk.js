let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
`.trim())
}
//handler.help = ['afk [alasan]']
//handler.tags = ['main']
handler.command = /^afk$/
handler.register = false

module.exports = handler
