let handler  = async (m, { conn, usedPrefix }) => {

let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 GAMES MENU 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}start_
┃ ❖ _${usedPrefix}next_
┃ ❖ _${usedPrefix}leave_
┃ ❖ _${usedPrefix}asahotak_  Ⓛ
┃ ❖ _${usedPrefix}caklontong_  Ⓛ
┃ ❖ _${usedPrefix}dadu_
┃ ❖ _${usedPrefix}delsesittt_  Ⓛ
┃ ❖ _${usedPrefix}family100_  Ⓛ
┃ ❖ _${usedPrefix}guesschara_  Ⓛ
┃ ❖ _${usedPrefix}siapakahaku_  Ⓛ  
┃ ❖ _${usedPrefix}slot_ Ⓛ
┃ ❖ _${usedPrefix}suit_
┃ ❖ _${usedPrefix}suitpvp_ <@user>
┃ ❖ _${usedPrefix}susunkata_  Ⓛ
┃ ❖ _${usedPrefix}tebakanime_  Ⓛ
┃ ❖ _${usedPrefix}tebakbendera_  Ⓛ
┃ ❖ _${usedPrefix}tebakchara_  Ⓛ
┃ ❖ _${usedPrefix}tebakgambar_  Ⓛ
┃ ❖ _${usedPrefix}tebakgame_  Ⓛ
┃ ❖ _${usedPrefix}tebakkata_  Ⓛ
┃ ❖ _${usedPrefix}tebakkimia_  Ⓛ
┃ ❖ _${usedPrefix}tebaklirik_  Ⓛ
┃ ❖ _${usedPrefix}tebaktebakan_  Ⓛ
┃ ❖ _${usedPrefix}tekateki_  Ⓛ
┃ ❖ _${usedPrefix}tesotak_  Ⓛ
┃ ❖ _${usedPrefix}tictactoe_ <custom room name>
┃ ❖ _${usedPrefix}ttt_ <custom room name>
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Games For Your Day', 'status@broadcast')
  }
handler.help = ['gamesmenu']
handler.tags = ['main']
handler.command = /^gamesmenu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
