let handler = async (m, { conn }) => {
  let LastDaily = global.db.data.users[m.sender].lastdaily
let cdj = `${JaM(new Date - LastDaily)}`
let cdm = `${MeNit(new Date - LastDaily)}`
let cds = `${DeTik(new Date - LastDaily)}`
let cd1 = Math.ceil(23 - cdj)
let cd2 = Math.ceil(59 - cdm)
let cd3 = Math.ceil(60 - cds)
  if (new Date - global.db.data.users[m.sender].lastdaily > 86400000) {
    global.db.data.users[m.sender].koin += 2500
    global.db.data.users[m.sender].potion += 1
    m.reply('Selamat anda mendapatkan 2500 koin dan 1 potion')
    global.db.data.users[m.sender].lastdaily = new Date * 1
  } else throw `Anda sudah mengklaim harian hari ini.\n\nTunggu ${cd1} Jam ${cd2} Menit ${cd3} Detik!`
}
handler.command = /^(daily)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}
