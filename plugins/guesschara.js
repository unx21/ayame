let fetch = require('node-fetch')
let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
 await m.reply('```Mohon tunggu, sedang menyiapkan gambar terbaik```')
    conn.guesschara = conn.guesschara ? conn.guesschara : {}
    let id = m.chat
    if (id in conn.guesschara) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.guesschara[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/guesschara.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = 
    `*「 GUESS CHARA 」*
    
Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: Rp${poin}
`.trim()
    conn.guesschara[id] = [
        await conn.sendFile(m.chat, json.img,  '', caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.guesschara[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\nDeskripsi:\n*${json.desk}*`, conn.guesschara[id][0])
            delete conn.guesschara[id]
        }, timeout)
    ]
}

handler.command = /^guesschara/i
handler.register = false
handler.limit = 1

module.exports = handler
