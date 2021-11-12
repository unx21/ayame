let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  conn.reply(m.chat, '*「 TAG ALL 」*\n\n❖ ' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n❖ `, m, {
    contextInfo: { mentionedJid: users }
})
}
handler.command = ['tagall']
handler.register = true

handler.admin = true
handler.group = true

module.exports = handler
