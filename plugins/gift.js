let fs = require('fs')
let handler = async (m, { conn, text }) => {
let LastGift = global.db.data.users[m.sender].lastgift
let cdm = `${MeNit(new Date - LastGift)}`
let cds = `${DeTik(new Date - LastGift)}`
let cd1 = Math.ceil(59 - cdm)
let cd2 = Math.ceil(60 - cds)
let data = fs.readFileSync('/data/data/com.termux/files/home/ayame/lib/gift.js')
let parse = JSON.parse(data)
let random = Math.floor(Math.random() * parse.length);
let json = parse[random]
  if (new Date - global.db.data.users[m.sender].lastgift > 3600000) {
    global.db.data.users[m.sender].uang += json.uang * 1
    global.db.data.users[m.sender].exp += 500
    m.reply(`Selamat anda mendapatkan +Rp${json.uang}`)
    global.db.data.users[m.sender].lastgift = new Date * 1
  } else m.reply(`Silahkan Menunggu *${cd1}* Menit *${cd2}* Detik Lagi!`)
}
handler.command = /^gift$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false
handler.limit = false

module.exports = handler

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}
