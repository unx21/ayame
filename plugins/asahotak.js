let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 Asah Otak 」*

Soal: "${json.soal}"

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}aohint* untuk bantuan
Bonus: Rp${poin}
    `.trim()
    conn.asahotak[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.asahotak[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.asahotak[id][0])
        delete conn.asahotak[id]
      }, timeout)
    ]
  }
  handler.help = ['asahotak']
  handler.tags = ['game']
  handler.command = /^asahotak/i
  handler.register = false

  handler.limit = 1
  
  module.exports = handler
