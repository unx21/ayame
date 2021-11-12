let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 FUN 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}apakah_  [ teks ]
┃ ❖ _${usedPrefix}apakah_  [ pertanyaan ]
┃ ❖ _${usedPrefix}bisakah_  [ teks ]
┃ ❖ _${usedPrefix}bisakah_  [ pertanyaan ]
┃ ❖ _${usedPrefix}kapan + kah_  [ teks ]
┃ ❖ _${usedPrefix}kapan + kah_  [ pertanyaan ]
┃ ❖ _${usedPrefix}siapa + kah_  [ teks ]
┃ ❖ _${usedPrefix}siapa + kah_  [ pertanyaan ]
┃ ❖ _${usedPrefix}bucincek_
┃ ❖ _${usedPrefix}cantikcek_
┃ ❖ _${usedPrefix}furrycek_
┃ ❖ _${usedPrefix}gabutcek_
┃ ❖ _${usedPrefix}gantengcek_
┃ ❖ _${usedPrefix}gaycek_
┃ ❖ _${usedPrefix}gilacek_
┃ ❖ _${usedPrefix}halucek_
┃ ❖ _${usedPrefix}jonescek_
┃ ❖ _${usedPrefix}lesbicek_
┃ ❖ _${usedPrefix}pedocek_
┃ ❖ _${usedPrefix}pintarcek_
┃ ❖ _${usedPrefix}sadboycek_
┃ ❖ _${usedPrefix}sadgirlcek_
┃ ❖ _${usedPrefix}stresscek_
┃ ❖ _${usedPrefix}tololcek_
┃ ❖ _${usedPrefix}wibucek_
┃ ❖ _${usedPrefix}jadian_
┃ ❖ _${usedPrefix}math_
┃ ❖ _${usedPrefix}simi_  [ teks ]
┃ ❖ _${usedPrefix}simsimi_  [ teks ]
┃ ❖ _${usedPrefix}simih_  [ teks ]
┃ ❖ _${usedPrefix}bucin_
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Fun Menu', 'status@broadcast')
  }
handler.help = ['funmenu']
handler.tags = ['main']
handler.command = /^funmenu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
