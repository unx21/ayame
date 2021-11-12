let handler = async function (m, { conn, text }) {
  
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  await conn.reply(m.chat, `Berhasil menghapus data Registrasi @${who.split`@`[0]}`, m, { contextInfo: { mentionedJid: [who]} } )
  let user = global.db.data.users[who]
  user.registered = false
}
//handler.help = ['daftarulang @user']
//handler.tags = ['owner']
handler.command = /^daftarulang$/
handler.owner = true

module.exports = handler