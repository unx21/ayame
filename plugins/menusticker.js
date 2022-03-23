let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 STICKER 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}attp_  [ teks ] Ⓛ
┃ ❖ _${usedPrefix}attp2_  [ teks ] Ⓛ
┃ ❖ _${usedPrefix}colong_  [ reply sticker ] Ⓛ
┃ ❖ _${usedPrefix}steal_  [ reply sticker ] Ⓛ
┃ ❖ _${usedPrefix}getexif_  [ reply sticker ]
┃ ❖ _${usedPrefix}semoji_  [ type|emoji ] Ⓛ
┃ ❖ _${usedPrefix}sgay_  [ reply media ]
┃ ❖ _${usedPrefix}stickermeme_  [ teks|teks ] Ⓛ
┃ ❖ _${usedPrefix}sticker_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}sticker_  [ url ] Ⓛ
┃ ❖ _${usedPrefix}stickergif_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}stickergif_  [ url ] Ⓛ
┃ ❖ _${usedPrefix}stickerline_  [ url ] Ⓛ
┃ ❖ _${usedPrefix}stickerly_  [ url ] Ⓛ
┃ ❖ _${usedPrefix}stickertelegram_  [ url ] Ⓛ
┃ ❖ _${usedPrefix}stickfilter_  [ filter ] Ⓛ
┃ ❖ _${usedPrefix}ttp_  [ teks ] Ⓛ
┃ ❖ _${usedPrefix}ttp2_  [ teks ] Ⓛ
┃ ❖ _${usedPrefix}ttpdark_  [ teks ] Ⓛ
┃ ❖ _${usedPrefix}wanted_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}wasted_  [ reply media ] Ⓛ
┃ ❖ _${usedPrefix}wm_  [ pack|author ] Ⓟ
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
    conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Sticker', 'status@broadcast')
  }
handler.help = ['stickermenu']
handler.tags = ['main']
handler.command = /^stickermenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
