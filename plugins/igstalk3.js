const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} unxzx_`

  let res = await fetch(global.API('zekais', '/igs', { username: args[0] }))
  await m.reply(global.wait)
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profilehd, 'eror.jpg', `*Nama:* ${json.data.fullname}\n*Bio:* ${json.data.bio}\n*Followers:* ${json.data.follower}\n*Following:* ${json.data.following}\n*Posts:* ${json.data.timeline}\n*Private:* ${json.data.private ? 'Ya' : 'Tidak'}\n\n© 百鬼あやめ`, m, 0, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
//handler.help = ['igstalk <username>']
//handler.tags = ['tools']
handler.command = /^(igstalk3)$/i
handler.premium = true
module.exports = handler
