let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 CREATOR MENU 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}army_ <teks> Ⓛ
┃ ❖ _${usedPrefix}bold_ <teks> Ⓛ
┃ ❖ _${usedPrefix}colorful_ <teks> Ⓛ
┃ ❖ _${usedPrefix}ctrigger_ <teks> Ⓛ
┃ ❖ _${usedPrefix}customtrigger_ <teks> Ⓛ
┃ ❖ _${usedPrefix}enhance_ <reply media> Ⓛ
┃ ❖ _${usedPrefix}enphoto360_ <effect> <teks>|<teks2>|<teks3> Ⓛ
┃ ❖ _${usedPrefix}gay_ <reply media> Ⓛ
┃ ❖ _${usedPrefix}glowing_ <teks> Ⓛ
┃ ❖ _${usedPrefix}horny_ <reply media> Ⓛ
┃ ❖ _${usedPrefix}hornycard_ <reply media> Ⓛ
┃ ❖ _${usedPrefix}hartatahta_ <teks> Ⓛ
┃ ❖ _${usedPrefix}hug_
┃ ❖ _${usedPrefix}iss_  Ⓛ
┃ ❖ _${usedPrefix}itssostupid_  Ⓛ
┃ ❖ _${usedPrefix}magernulis_ <teks> Ⓟ
┃ ❖ _${usedPrefix}magernulis2_ <teks> Ⓟ
┃ ❖ _${usedPrefix}magernulis3_ <teks> Ⓟ
┃ ❖ _${usedPrefix}magernulis4_ <teks> Ⓟ
┃ ❖ _${usedPrefix}magernulis5_ <teks> Ⓟ
┃ ❖ _${usedPrefix}magernulis6_ <teks> Ⓟ
┃ ❖ _${usedPrefix}memecreator_ <teks>|<teks> Ⓛ
┃ ❖ _${usedPrefix}nulis_ <teks> Ⓛ
┃ ❖ _${usedPrefix}nulis2_ <teks> Ⓛ
┃ ❖ _${usedPrefix}pat_
┃ ❖ _${usedPrefix}poly_ <teks> Ⓛ
┃ ❖ _${usedPrefix}quotemaker_ <teks>|<wm> Ⓛ
┃ ❖ _${usedPrefix}quotemaker2_ <teks>|<wm> Ⓛ
┃ ❖ _${usedPrefix}retro_ <teks> Ⓛ
┃ ❖ _${usedPrefix}shaunthesheep_ <reply media> Ⓟ
┃ ❖ _${usedPrefix}tahta2_ <teks> Ⓛ
┃ ❖ _${usedPrefix}textpro_ <effect> <teks> Ⓟ
┃ ❖ _${usedPrefix}textpro_ <effect> <teks>|<teks> Ⓟ
┃ ❖ _${usedPrefix}trigger_  Ⓛ
┃ ❖ _${usedPrefix}tweet_ <username>|<tweet> Ⓛ
┃ ❖ _${usedPrefix}twt_ <username>|<tweet> Ⓛ
┃ ❖ _${usedPrefix}unsplash_ <keyword> Ⓛ
┃ ❖ _${usedPrefix}wink_
┃ ❖ _${usedPrefix}ytcomment_ <comment> Ⓛ
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Creator And Maker Menu', 'status@broadcast')
  }
handler.help = ['creatormenu']
handler.tags = ['main']
handler.command = /^creatormenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
