let handler = async (m, { text, isOwner }) => {
  if (!isOwner) throw false
  user.afk = + new Date
  user.afkReason = text
  /*m.reply(`
${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
`)*/
}
//handler.help = ['oafk [alasan]']
//handler.tags = ['main']
handler.command = /^oafk$/i
handler.limit = false

module.exports = handler
