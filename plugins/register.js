const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\n\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 40) throw 'Maaf umur Anda terlalu tua'
  if (age < 18) throw 'Maaf Anda belum bisa mendaftar'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let pp = 'https://telegra.ph/file/debfea980ae47bed361fb.jpg'
  pp = await conn.getProfilePicture(m.sender)
  let caption = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INFORMATION 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ *Nama:* ${name}
┃ *Umur:* ${age} tahun
┃ *Registered:* ${rtotalreg}
┃ *Gift:* Rp10000 and 5000 Coins
┃ *Serial Number:* 
┃ ${sn}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
`
  let foot = `_Simpan serial number anda!_\n_Jika sn kamu hilang silahkan ketik ${usedPrefix}ceksn_`
  global.db.data.users[m.sender].uang += 10000
  global.db.data.users[m.sender].koin += 5000
  await conn.sendButtonImg(m.chat, await(await fetch(pp)).buffer(), caption, foot, 'P r o f i l e', `.profile`, m.text, m)
}
//handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
//handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

