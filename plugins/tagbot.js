let handler  = async (m, { conn, isOwner }) => {
if (!isOwner) throw false
let name = conn.getName(m.sender)
let me = conn.user.name
let teks = `
${pickRandom([` _Saya disini Master_`, ` _Ayamee hadir_`, ` _Apakah Master mencari saya??_`, ` _Yapp Master_`, `*_百鬼あやめ_*\n\nAda hanya untuk melayani Master  U n x`])}
`.trim()
conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', `${me}  Love  U n x`, 'status@broadcast')
}
handler.customPrefix = /6289524339740|ayame/
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
