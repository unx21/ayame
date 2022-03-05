let fetch = require('node-fetch')
let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 Tebak Lirik 」*

${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tlhint untuk bantuan
Bonus: Rp${poin}
`.trim()
  conn.tebaklirik[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebaklirik[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklirik[id][0])
        delete conn.tebaklirik[id]
      }, timeout)
    ]
  }
  handler.command = /^tebaklirik/i
  handler.register = false
  handler.limit = 1
  
  module.exports = handler
