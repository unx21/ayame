let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/tebakbendera.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 Tebak Bendera 」*

"${json.emoji} Bendera negara manakah ini ?"

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tbhint* untuk bantuan
Bonus: Rp${poin}
    `.trim()
    conn.tebakbendera[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakbendera[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakbendera[id][0])
        delete conn.tebakbendera[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakbendera']
handler.tags = ['game']
  handler.command = /^tebakbendera/i
  handler.register = false

  handler.limit = 1
  
  module.exports = handler
