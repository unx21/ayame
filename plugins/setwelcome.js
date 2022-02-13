let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw 'Teksnya mana?'
}
//handler.help = ['setwelcome <teks>']
//handler.tags = ['owner', 'group']
handler.register = false
handler.admin = true
handler.botAdmin = true
handler.group = true

handler.command = /^setwelcome$/i
module.exports = handler

