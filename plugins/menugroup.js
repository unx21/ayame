let handler  = async (m, { conn, usedPrefix }) => {
  
let  teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 GROUPS 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃    Ⓐ   = Admin
┃ ❖ _${usedPrefix}absen_
┃ ❖ _${usedPrefix}cekabsen_
┃ ❖ _${usedPrefix}hapusabsen_  Ⓐ
┃ ❖ _${usedPrefix}mulaiabsen_  [ text ] Ⓐ
┃ ❖ _${usedPrefix}enable_  [ option ] Ⓐ
┃ ❖ _${usedPrefix}disable_  [ option ] Ⓐ
┃ ❖ _${usedPrefix}group_  [ chat open ] Ⓐ
┃ ❖ _${usedPrefix}group_  [ chat close ] Ⓐ
┃ ❖ _${usedPrefix}group_  [ setting admin ] Ⓐ
┃ ❖ _${usedPrefix}group_  [ setting member ] Ⓐ
┃ ❖ _${usedPrefix}groupinfo_
┃ ❖ _${usedPrefix}getsider_
┃ ❖ _${usedPrefix}htag_  [ jumlah  pesan ] Ⓐ
┃ ❖ _${usedPrefix}linkgroup_
┃ ❖ _${usedPrefix}listonline_
┃ ❖ _${usedPrefix}here_
┃ ❖ _${usedPrefix}pengumuman_  [ text ] Ⓐ
┃ ❖ _${usedPrefix}announce_  [ text ] Ⓐ
┃ ❖ _${usedPrefix}hidetag_  [ text ] Ⓐ
┃ ❖ _${usedPrefix}revoke_  Ⓐ
┃ ❖ _${usedPrefix}setpp_  Ⓐ
┃ ❖ _${usedPrefix}setdesk_  [ text ] Ⓐ
┃ ❖ _${usedPrefix}setname_  [ text ] Ⓐ
┃ ❖ _${usedPrefix}setbye_  [ text ] Ⓐ
┃ ❖ _${usedPrefix}setwelcome_  [ text ] Ⓐ
┃ ❖ _${usedPrefix}simulate_   [ event  @mention ]
┃ ❖ _${usedPrefix}tagall_  Ⓐ
┃ ❖ _${usedPrefix}totalpesan_
┃ ❖ _${usedPrefix}warn_  Ⓐ
┃ ❖ _${usedPrefix}cekwarn_  Ⓐ
┃ ❖ _${usedPrefix}delwarn_  Ⓐ
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat,  teks, '0@s.whatsapp.net', 'Group Menu', 'status@broadcast')
  }
handler.help = ['groupmenu']
handler.tags = ['main']
handler.command = /^gro?upmenu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
