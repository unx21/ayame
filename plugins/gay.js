let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  await m.reply(global.wait)
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'gay.png', 'Elu Gay?', m)
}

//handler.help = ['gay']
//handler.tags = ['maker']
handler.command = /^(gay)$/i
handler.register = true
handler.limit = true


module.exports = handler
