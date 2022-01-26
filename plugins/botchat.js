let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` _Hii @{name}_\n\n_Saya disini_`, `_Oeetss ${name}_\n\n_Ada apa??_`, `_Ekhheemmm, Uhuk Ughhuk_`, `_Puuuiyy_`, `_Poom_`, `_Hadirrr_`, `_Panggil Trosss_`, `_Diemin aja dah_`, `_Mohon maaf ${name}_\n\n_Saya sedang sibuk saat ini, Hubungi saya lain waktu_`, `Meh`, `Nyenyenyenye`, `Aku Diam Aku Aman`])}
`.trim()
conn.reply(m.chat, teks, m)
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
