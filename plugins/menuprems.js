let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 PREMIUM MENU 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}fb_  [ url ]
┃ ❖ _${usedPrefix}image_  [ query ]
┃ ❖ _${usedPrefix}google_  [ pencarian ]
┃ ❖ _${usedPrefix}googlef_  [ pencarian ]
┃ ❖ _${usedPrefix}ig_  [ url ]
┃ ❖ _${usedPrefix}ighighlight_  [ username ]
┃ ❖ _${usedPrefix}igstalk_  [ username ]
┃ ❖ _${usedPrefix}igstory_  [ username ]
┃ ❖ _${usedPrefix}jadibot_
┃ ❖ _${usedPrefix}join_  [ link grup ]
┃ ❖ _${usedPrefix}joox_  [ judul ]
┃ ❖ _${usedPrefix}pinterest_  [ keyword ]
┃ ❖ _${usedPrefix}play_  [ pencarian ]
┃ ❖ _${usedPrefix}play2_  [ pencarian ]
┃ ❖ _${usedPrefix}spotify_  [ query ]
┃ ❖ _${usedPrefix}tiktok_  [ url ]
┃ ❖ _${usedPrefix}trendingtwitter_
┃ ❖ _${usedPrefix}twitter_  [ url ]
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
handler.command = /^premsmenu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
