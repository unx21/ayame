const pilihan = ['batu', 'gunting', 'kertas']
const Case = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan yang tersedia Gunting, Kertas, Batu\n\n*Contoh* : ${usedPrefix}suit gunting\n`
    if (!text) throw salah
    if (!pilihan.includes(text.toLowerCase())) throw salah
    let suitP1 = pilihan.indexOf(text.toLowerCase())
    let suitPC = Math.floor(Math.random() * 3)
    let kamu = Case(pilihan[suitP1])
    let bot = Case(pilihan[suitPC])
    let state = `Kamu: ${kamu}\nBot: ${bot}`
    let user = global.db.data.users[m.sender]
    if (suitP1 === suitPC) {
        user.uang += 500
        m.reply(`*Kita Seri*\n\n${state}\n\nPoin ±Rp500`)
    } else if ((suitP1 + 1) % 3 === suitPC) {
        user.uang += 1000
        m.reply(`*Kamu Menang*\n\n${state}\n\nPoin +Rp1000`)
    } else if ((suitP1 - 1) % 3 === suitPC) {
        user.uang -= 750
        m.reply(`*Kamu Kalah*\n\n${state}\n\nPoin -Rp750`)
    } else throw 'Terjadi kesalahan'
}
//handler.help = ['suit [gunting|batu|kertas]']
//handler.tags = ['game']

handler.command = /^suit$/i
handler.register = true

module.exports = handler
