let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` Hii ${name}\n\nSaya disini`, `Oeetss`, `Ekhheemmm`, `Puuuiyy`, `Poom`, `Hadiirr`, `Panggil Trosss`, `Diemin aja dah`, `Mohon maaf ${name}\n\nSaya sedang sibuk saat ini, Hubungi saya lain waktu`, `Meh`, `Nyahallo`])}
`.trim()
conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Ajak Ngomong Lah Biar Gak Stress', 'status@broadcast')
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
