let handler = async function(m, { conn, args, isPrems, isOwner }) {

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      this.fakeReply(m.chat, `*Bye Semuaa 🙂*`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, 'status@broadcast')
      await time(5000)
  await conn.groupLeave(m.key.remoteJid)
}
//handler.help = ['leavegroup', 'keluargrup']
//handler.tags = ['owner']
handler.command = /^(leave|keluar)gro?up$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler