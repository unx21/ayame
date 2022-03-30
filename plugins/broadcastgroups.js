let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? text : text + '\n\n' + readMore + '「 ' + conn.getName(conn.user.jid) + ' Broadcast 」')
 )
}
handler.help = ['broadcastgroup', 'bcgc']
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
