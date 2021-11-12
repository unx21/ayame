let handler  = async (m, { conn, usedPrefix }) => {

let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INFO 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}creator_
┃ ❖ _${usedPrefix}owner_
┃ ❖ _${usedPrefix}donasi_
┃ ❖ _${usedPrefix}grouplist_
┃ ❖ _${usedPrefix}info_
┃ ❖ _${usedPrefix}speed_
┃ ❖ _${usedPrefix}ping_
┃ ❖ _${usedPrefix}report_
┃ ❖ _${usedPrefix}rules_
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Info', 'status@broadcast')
  }
handler.help = ['infomenu']
handler.tags = ['main']
handler.command = /^infomenu/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
