//kok cewe gw jadi cuek yahh? daritadi pagi gw chat ga dibales cuman di read doang

const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  await m.reply(global.wait)
  let marah = global.API('https://some-random-api.ml', '/canvas/triggered', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })
 let stiker = await sticker(null, marah, global.packname, global.author)
 if (stiker) return conn.sendFile(m.chat, stiker, m, false, { asSticker: true });
  else throw stiker.toString()
}


//handler.help = ['trigger']
//handler.tags = ['maker']
handler.command = /^(trigger)$/i
handler.register = false
handler.limit = 1

module.exports = handler
