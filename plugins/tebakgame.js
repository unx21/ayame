let fetch = require('node-fetch')
let timeout = 120000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
 await m.reply('```Mohon tunggu, sedang menyiapkan gambar terbaik```')
    conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
    let id = m.chat
    if (id in conn.tebakgame) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgame[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/tebakgame.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = 
    `*「 Tebak Game 」*
    
Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: Rp${poin}
`.trim()
    conn.tebakgame[id] = [
        await conn.sendFile(m.chat, json.img,  '', caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakgame[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgame[id][0])
            delete conn.tebakgame[id]
        }, timeout)
    ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i
handler.register = false
handler.limit = 1

module.exports = handler
