let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
*「 Tebak Kata 」*

Soal: "${json.soal}"

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tkhint* untuk bantuan
Bonus: Rp${poin}
    `.trim()
    conn.tebakkata[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkata[id][0])
        delete conn.tebakkata[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakkata']
handler.tags = ['game']
  handler.command = /^tebakkata/i
  handler.register = false

  handler.limit = 1
  
  module.exports = handler
