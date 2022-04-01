let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 Siapakah Aku 」*

Soal: "${json.soal}"

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}sahint* untuk bantuan
Bonus: Rp${poin}
    `.trim()
    conn.siapakahaku[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.siapakahaku[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.siapakahaku[id][0])
        delete conn.siapakahaku[id]
      }, timeout)
    ]
  }
  handler.help = ['siapakahaku']
handler.tags = ['rpg']
  handler.command = /^siapakahaku/i
  handler.register = false

  handler.limit = 1
  
  module.exports = handler
