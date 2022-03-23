let handler  = async (m, { conn, usedPrefix }) => {

  

let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 TOOLS 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}aksara_  [ opsi text ] Ⓛ
┃ ❖ _${usedPrefix}base64_  [ text ]
┃ ❖ _${usedPrefix}calculator_  [ expression ]
┃ ❖ _${usedPrefix}carigrup_  [ pencarian ] Ⓛ
┃ ❖ _${usedPrefix}save_  [ @mention text ]
┃ ❖ _${usedPrefix}delete_  [ reply pesan ]
┃ ❖ _${usedPrefix}inspect_  [ link grup ]
┃ ❖ _${usedPrefix}kodebahasa_
┃ ❖ _${usedPrefix}mention_  [ text ]
┃ ❖ _${usedPrefix}qrcode_  [ text ]
┃ ❖ _${usedPrefix}readmore_  [ text ]
┃ ❖ _${usedPrefix}readviewonce_  [ reply pesan ]
┃ ❖ _${usedPrefix}scan_  [ nomor ]
┃ ❖ _${usedPrefix}styletext_  [ text ]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Tools', 'status@broadcast')
  }
handler.help = ['toolsmenu']
handler.tags = ['main']
handler.command = /^toolsmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
