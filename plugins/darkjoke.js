let handler = async (m, { conn }) => {
  await m.reply(global.wait)
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'drag joles', m)
}
//handler.help = ['darkjokes']
//handler.tags = ['internet']
handler.command = /^(dragjokes|darkjokes)$/i
handler.register = true
handler.limit = true
handler.disabled = true

module.exports = handler
