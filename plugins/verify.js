const { createHash } = require('crypto')
let handler = async function (m, { text, usedPrefix }) {
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\n\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  let name = conn.getName(m.sender)
  let age = Math.floor(Math.random() * 41)
  age = parseInt(age)
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `┏ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INFORMATION 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ *Nama:* ${name}
┃ *Umur:* ${age} tahun
┃ *Registered:* ${rtotalreg}
┃ *Gift:* Rp10000
┃ *Serial Number:* 
┃ ${sn}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━`
   let foot = `_Simpan Serial Number anda!_\n_Jika sn kamu hilang silahkan ketik ${usedPrefix}ceksn_`
  conn.send3Button(m.chat, caption, foot, 'P r o f i l e', '.profile', 'R a n k c a r d', '.rank', 'M e n u', '.menu', m)
global.db.data.users[m.sender].uang += 10000
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify)$/i

module.exports = handler
