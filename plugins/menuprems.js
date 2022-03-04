let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 PREMIUM MENU 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}fb_  *E R R O R ! !*
┃ ❖ _${usedPrefix}image_  [ query ]
┃ ❖ _${usedPrefix}google_  [ pencarian ]
┃ ❖ _${usedPrefix}googlef_  [ pencarian ]
┃ ❖ _${usedPrefix}ig_  [ url ]
┃ ❖ _${usedPrefix}ig2_  [ url ]
┃ ❖ _${usedPrefix}ighighlight_  [ username ]
┃ ❖ _${usedPrefix}igstalk_  [ username ]
┃ ❖ _${usedPrefix}igstalk2_  [ username ]
┃ ❖ _${usedPrefix}igstalk3_  [ username ]
┃ ❖ _${usedPrefix}igstory_  [ username ]
┃ ❖ _${usedPrefix}igstory2_  [ username ]
┃ ❖ _${usedPrefix}jadibot_
┃ ❖ _${usedPrefix}join_  [ link grup ]
┃ ❖ _${usedPrefix}joox_  [ judul ]
┃ ❖ _${usedPrefix}pinterest_  [ keyword ]
┃ ❖ _${usedPrefix}pint_  [ keyword ]
┃ ❖ _${usedPrefix}pint2_  [ pencarian ]
┃ ❖ _${usedPrefix}pint3_  [ query ]
┃ ❖ _${usedPrefix}play_  [ pencarian ]
┃ ❖ _${usedPrefix}play2_  [ pencarian ]
┃ ❖ _${usedPrefix}spotify_  [ query ]
┃ ❖ _${usedPrefix}tt_  [ url ]
┃ ❖ _${usedPrefix}tiktok_  [ url ]
┃ ❖ _${usedPrefix}tt2_  [ url ]
┃ ❖ _${usedPrefix}tiktok2_  [ url ]
┃ ❖ _${usedPrefix}trendingtwitter_
┃ ❖ _${usedPrefix}twitter_  [ url ]
┃ ❖ _${usedPrefix}twitter2_  [ url ]
┃ ❖ _${usedPrefix}upload_  [ caption|reply media ]
┃ ❖ _${usedPrefix}wallpaperq_ [ query ]
┃ ❖ _${usedPrefix}yta_  [ url ]
┃ ❖ _${usedPrefix}ytv_  [ url ]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Spesial Premium User', 'status@broadcast')
  }
handler.help = ['premsmenu']
handler.tags = ['main']
handler.command = /^prem(ium|s)menu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
