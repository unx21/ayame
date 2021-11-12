// Made with 💙 by unx //

let fetch = require('node-fetch')
let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.wordorder = conn.wordorder ? conn.wordorder : {}
    let id = m.chat
    if (id in conn.wordorder) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.wordorder[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/wordorder.json')

    if (!res.ok) throw await `${res.status} ${res.statusText}`

    let data = await res.json()

    let json = data[Math.floor(Math.random() * data.length)]

    let caption = `
*「 Word Order 」*

${json.level}
Task: "${json.soal}"

Timeout *${(timeout / 1000).toFixed(2)} detik*
Type *${usedPrefix}wohint* for help
Bonus: Rp${poin}
`.trim()
  conn.wordorder[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.wordorder[id]) conn.reply(m.chat, `Time has run out!\nThe answer is *${json.jawaban}*`, conn.wordorder[id][0])
        delete conn.wordorder[id]
      }, timeout)
    ]
  }
  handler.command = /^wordorder/i
  handler.register = true
  handler.limit = true
  
  module.exports = handler
