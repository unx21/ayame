let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
await m.reply(global.wait)
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', '© 栗山未来', m)
}

handler.help = ['ytcomment <comment>']
handler.tags = ['maker']
handler.command = /^(ytc|ytcomment)$/i
handler.register = false
handler.limit = 2


module.exports = handler
