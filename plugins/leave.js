let handler = async function(m, { conn, args, isPrems, isOwner }) {

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      this.fakeReply(m.chat, `_Bye Semuaa, stay happy_ π`, '0@s.whatsapp.net', `γγγγͺγγΏγγͺη§γγγͺγγ¦γεΉΈγγͺγΎγΎ`, 'status@broadcast')
      await time(5000)
  await conn.groupLeave(m.key.remoteJid)
}
//handler.help = ['leavegroup', 'keluargrup']
//handler.tags = ['owner']
handler.command = /^leaveg(c|ro?up)(all|semua)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
