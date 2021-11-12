let handler  = async (m, { conn, usedPrefix }) => {

let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 DATABASE 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}caripesan_
┃ ❖ _${usedPrefix}getaudio_  [ teks ]
┃ ❖ _${usedPrefix}getimg_  [ teks ]
┃ ❖ _${usedPrefix}getmsg_  [ teks ]
┃ ❖ _${usedPrefix}getsticker_  [ teks ]
┃ ❖ _${usedPrefix}getvideo_  [ teks ]
┃ ❖ _${usedPrefix}getvn_  [ teks ]
┃ ❖ _${usedPrefix}listaudio_  [ teks ]
┃ ❖ _${usedPrefix}listimg_  [ teks ]
┃ ❖ _${usedPrefix}listmsg_  [ teks ]
┃ ❖ _${usedPrefix}liststicker_  [ teks ]
┃ ❖ _${usedPrefix}listvideo_  [ teks ]
┃ ❖ _${usedPrefix}listvn_  [ teks ]
┃ ❖ _${usedPrefix}setcmd_
┃ ❖ _${usedPrefix}delcmd_
┃ ❖ _${usedPrefix}infocmd_
┃ ❖ _${usedPrefix}listcmd_
┃ ❖ _${usedPrefix}lockcmd_
┃ ❖ _${usedPrefix}unlockcmd_
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Database', 'status@broadcast')
  }
handler.help = ['databasemenu']
handler.tags = ['main']
handler.command = /^d(b|atabase)menu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
