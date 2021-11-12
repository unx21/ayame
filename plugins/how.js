let handler = async (m, { conn, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let cok = conn.getName(who)
  conn.reply(m.chat, `
${command.charAt(0).toUpperCase() + command.slice(1)} *${cok}*

*${cok}* is *${Math.floor(Math.random() * 101)}*% ${command.replace('cek', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.command = /^(gay|pintar|cantik|ganteng|gabut|gila|halu|lesbi|stress?|bucin|jones|sad(boy|girl)|tolol|wibu|pedo|furry|horny)cek/i
handler.register = true

module.exports = handler