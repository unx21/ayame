let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw 'Teksnya mana?'
}
//handler.help = ['setbye <teks>']
//handler.tags = ['owner', 'group']
handler.register = false
handler.admin = true
handler.botAdmin = true
handler.group = true

handler.command = /^setbye$/i
module.exports = handler

