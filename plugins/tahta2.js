let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// HartA tahta Xteam
let handler  = async (m, { conn, text }) => {
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 text,
 await m.reply(global.wait)
await conn.sendFile(m.chat, global.API('xteam', '/tahta', { text, }, 'APIKEY'), 'Harta Tahta.png', '© 栗山未来', m)
}
//handler.help = ['tahta2'].map(v => v + '<teks>')
//handler.tags = ['nulis']
handler.command = /^tahta2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = false
handler.limit = 2

module.exports = handler
