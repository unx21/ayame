let handler  = async (m, { conn, usedPrefix }) => {

let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INTERNET MENU 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}brainly_  Ⓛ
┃ ❖ _${usedPrefix}chord_ <judul lagu> Ⓛ
┃ ❖ _${usedPrefix}cekresi_ <jasa|resi> Ⓛ
┃ ❖ _${usedPrefix}covid_ <negara>
┃ ❖ _${usedPrefix}cuaca_ <nama kota> Ⓛ
┃ ❖ _${usedPrefix}darkjoke_
┃ ❖ _${usedPrefix}fetch_ <url> Ⓛ
┃ ❖ _${usedPrefix}get_ <url> Ⓛ
┃ ❖ _${usedPrefix}gitclone_ <url> Ⓛ
┃ ❖ _${usedPrefix}githubsearch_ <pencarian> Ⓛ
┃ ❖ _${usedPrefix}githubdl_  Ⓛ
┃ ❖ _${usedPrefix}infogempa_
┃ ❖ _${usedPrefix}jodoh_ <nama>|<nama doi> Ⓛ
┃ ❖ _${usedPrefix}katabijak_ <opsi> Ⓛ
┃ ❖ _${usedPrefix}kbbi_ <teks> Ⓛ
┃ ❖ _${usedPrefix}kodepos_ <kota> Ⓛ
┃ ❖ _${usedPrefix}layarkaca_ <query> Ⓛ
┃ ❖ _${usedPrefix}lrc_ <apa> Ⓛ
┃ ❖ _${usedPrefix}lirik_ <apa> Ⓛ
┃ ❖ _${usedPrefix}lyrics_ <apa> Ⓛ
┃ ❖ _${usedPrefix}memes_  Ⓛ
┃ ❖ _${usedPrefix}resep_ <masakan> Ⓛ
┃ ❖ _${usedPrefix}ssweb_ <url>
┃ ❖ _${usedPrefix}subreddit_ <query> Ⓛ
┃ ❖ _${usedPrefix}tr_ <lang> <teks>
┃ ❖ _${usedPrefix}translate_ <lang> <teks>
┃ ❖ _${usedPrefix}wikipedia_ <apa> Ⓛ
┃ ❖ _${usedPrefix}wiki_ <apa> Ⓛ
┃ ❖ _${usedPrefix}yts_ <pencarian> Ⓛ
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Internet To Enjoy Your Day', 'status@broadcast')
  }
handler.help = ['internetmenu']
handler.tags = ['main']
handler.command = /^internetmenu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
//A
