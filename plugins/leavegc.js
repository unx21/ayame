let handler = async function(m, { conn, args, isPrems, isOwner }) {

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      this.fakeReply(m.chat, `*Bye Semua* 🙂, *Ayame pamit pulang*`, '0@s.whatsapp.net', ` Stay Happy `, 'status@broadcast')
      await time(5000)
  await conn.groupLeave(m.key.remoteJid)
}
handler.command = /^leaveg(c|ro?up)(all|semua)?$/i
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
