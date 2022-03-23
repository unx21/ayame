let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 MAIN 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃      [ Informasi ]
┃     Ⓗ  = perhari
┃     Ⓙ  = perjam
┃     Ⓟ  = Fitur premium
┃ ❖ _${usedPrefix}afk_  [ alasan ]
┃ ❖ _${usedPrefix}buy_
┃ ❖ _${usedPrefix}buy_  [ jumlah limit ]
┃ ❖ _${usedPrefix}buyall_
┃ ❖ _${usedPrefix}claim_ Ⓗ
┃ ❖ _${usedPrefix}daily_ Ⓗ
┃ ❖ _${usedPrefix}gift_ Ⓟ Ⓙ
┃ ❖ _${usedPrefix}leaderboard_  [ jumlah user ]
┃ ❖ _${usedPrefix}lb_  [ jumlah user ]
┃ ❖ _${usedPrefix}levelup_
┃ ❖ _${usedPrefix}limit_  [ @user ]
┃ ❖ _${usedPrefix}paylimit_  [ @user mount ]
┃ ❖ _${usedPrefix}mining_ Ⓙ
┃ ❖ _${usedPrefix}profile_
┃ ❖ _${usedPrefix}ref_
┃ ❖ _${usedPrefix}rank_
┃ ❖ _${usedPrefix}rankcard_
┃ ❖ _${usedPrefix}ceksn_
┃ ❖ _${usedPrefix}daftar_  [ nama|umur ]
┃ ❖ _${usedPrefix}register_  [ nama|umur ]
┃ ❖ _${usedPrefix}tf_  [ uang @user ] Ⓛ
┃ ❖ _${usedPrefix}transfer_  [ uang @user ] Ⓛ
┃ ❖ _${usedPrefix}unreg_  [ SN|Serial number ]
┃ ❖ _${usedPrefix}unregister_  [ SN|Serial number ]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Utama', 'status@broadcast')
  }
handler.help = ['mainmenu']
handler.tags = ['main']
handler.command = /^mainmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
