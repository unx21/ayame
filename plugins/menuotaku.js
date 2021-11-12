let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 HOW TO BE AN OTAKU 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}anime_  [ judul ] Ⓛ
┃ ❖ _${usedPrefix}chara_  [ nama ] Ⓛ
┃ ❖ _${usedPrefix}kanji_  Ⓛ
┃ ❖ _${usedPrefix}mangainfo_  [ judul ] Ⓛ
┃ ❖ _${usedPrefix}waifu_  Ⓛ
┃ ❖ _${usedPrefix}neko_  Ⓛ
┃ ❖ _${usedPrefix}loli_  Ⓛ
┃ ❖ _${usedPrefix}megumin_  Ⓛ
┃ ❖ _${usedPrefix}wallpaper_  Ⓟ
┃ ❖ _${usedPrefix}wallpaperanime_  Ⓟ
┃ ❖ _${usedPrefix}wait_  [ caption|reply media ] Ⓟ
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Cara Menjadi Wibu Elit', 'status@broadcast')
  }
handler.help = ['otakumenu']
handler.tags = ['main']
handler.command = /^otakumenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
