let handler = async (m, { conn, text }) => {
  let [text1, text2] = text.split('|')
  if (!text1) throw 'No username'
  if (!text2) throw 'No comment'
  await m.reply(global.wait)
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/tweet', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    username: text1,
    displayname: conn.getName(m.sender),
    comment: text2,
    replies: '69',
    likes: '177013',
    retweets: '666'
  }), 'tweet.png', '*©Kuriyama-Bot*', m)
}

//handler.help = ['tweet <username>|<tweet>']
//handler.tags = ['creator']
handler.command = /^(tw(ee)?t)$/i
handler.limit = true
handler.register = true
module.exports = handler 