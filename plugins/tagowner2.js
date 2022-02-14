let handler = async (m, { conn, text }) => {
  let name = ('62887436568613@s.whatsapp.net')
  let panggil = `
  ${pickRandom([`*Jangan Tag Master!!*\n\nSaya Tidak Suka Jika Master Saya Di Tag Oleh Anda`, '*Gausah Sok Kenal Sama Master!!*', `Ngapain manggil Masterku??`, 'Buat apasih tag Master??', `Jauh² lu dari Master`, 'Tag sekali lagi bakal kena ban lu', `Ada hal penting apa sampai tag Master saya?`, 'Gada obrolan penting, jadi gausah tag', `Tag Tag Tag Tag Tag Trossss Master ku`, '*A P A   H A H? ! 1 ? ! 1 ! 1 ? 1 !*'])}
  `.trim()
  let mentionedJid = [name]
 conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})
  
}
handler.customPrefix = /62887436568613/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
