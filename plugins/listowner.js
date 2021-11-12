let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let owner = JSON.parse(fs.readFileSync('./src/owner.json')).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━\n┇       *「 LIST OWNER 」*\n┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━` + `\n` + owner.map(v => isOwner ? '┃ ❖ @' + v.replace(/@.+/, '') : '┃ ❖ ' + conn.getName(v)).join`\n` + '\n┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━', m, { contextInfo: { mentionedJid: owner } })
}
//handler.help = ['ownerlist']
//handler.tags = ['owner']
handler.command = /^(listowner|ownerlist)$/i

module.exports = handler
