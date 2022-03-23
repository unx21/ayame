let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 STICKER EXPRESSION 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}blush_  Ⓛ
┃ ❖ _${usedPrefix}bite_  Ⓛ
┃ ❖ _${usedPrefix}bonk_  [ @user ] Ⓛ
┃ ❖ _${usedPrefix}bonks_  Ⓛ
┃ ❖ _${usedPrefix}cringe_  Ⓛ
┃ ❖ _${usedPrefix}cry_  Ⓛ
┃ ❖ _${usedPrefix}cuddle_  Ⓛ
┃ ❖ _${usedPrefix}facepalm_  Ⓛ
┃ ❖ _${usedPrefix}glomp_  Ⓛ
┃ ❖ _${usedPrefix}happy_  Ⓛ
┃ ❖ _${usedPrefix}handhold_  Ⓛ
┃ ❖ _${usedPrefix}highfive_  Ⓛ
┃ ❖ _${usedPrefix}hug_  Ⓛ
┃ ❖ _${usedPrefix}kicks_  Ⓛ
┃ ❖ _${usedPrefix}kill_  Ⓛ
┃ ❖ _${usedPrefix}kiss_  Ⓛ
┃ ❖ _${usedPrefix}nekoz_  Ⓛ
┃ ❖ _${usedPrefix}notstonk_  Ⓛ
┃ ❖ _${usedPrefix}nyan_  Ⓛ
┃ ❖ _${usedPrefix}nom_  Ⓛ
┃ ❖ _${usedPrefix}pat_  Ⓛ
┃ ❖ _${usedPrefix}poke_  Ⓛ
┃ ❖ _${usedPrefix}punch_  Ⓛ
┃ ❖ _${usedPrefix}slap_  Ⓛ
┃ ❖ _${usedPrefix}smile_  Ⓛ
┃ ❖ _${usedPrefix}smug_  Ⓛ
┃ ❖ _${usedPrefix}stonk_  Ⓛ
┃ ❖ _${usedPrefix}tickle_  Ⓛ
┃ ❖ _${usedPrefix}wave_  Ⓛ
┃ ❖ _${usedPrefix}wink_  Ⓛ
┃ ❖ _${usedPrefix}yeet_  Ⓛ
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Sticker Wibu', 'status@broadcast')
  }
handler.help = ['eksmenu']
handler.tags = ['main']
handler.command = /^eksmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
