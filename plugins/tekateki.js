//Menjiplak Dengan Gaya Jatuh//

let fetch = require('node-fetch')
let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
    *「 Teka Teki 」*
    
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}teki* untuk bantuan
Bonus: Rp${poin}
`.trim()
  conn.tekateki[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tekateki[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tekateki[id][0])
        delete conn.tekateki[id]
      }, timeout)
    ]
  }
  handler.help = ['tekateki']
handler.tags = ['game']
  handler.command = /^tekateki/i
  handler.register = false

  handler.limit = 1
  
  module.exports = handler
