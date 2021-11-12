let handler = async (m, { conn, args, participants }) => {
    let grup = await conn.getName(m.key.remoteJid)
    let mimin = m.isGroup ? NgeriAtmin(participants) : ''
    let txt = `List Admin Group *${grup}*\n*Total:* ${mimin.length}\n\n`
    for (let min of mimin) {
    txt += `❖ @${min.split('@')[0]}\n`
      }
conn.reply(m.chat, txt, m, { contextInfo: { mentionedJid: mimin }})
}
//handler.help = ['listadmin']
//handler.tag = ['group']
handler.command = /^(adminlist|listadmin)$/i
handler.register = true

handler.group = true
module.exports = handler

const NgeriAtmin = (participants) => {
        atminn = []
	for (let b of participants) {
             b.isAdmin ? atminn.push(b.jid) : ''
	}
	return atminn
}

//By Afdhan