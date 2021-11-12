let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah exp yang akan diberi'
  if (isNaN(txt)) throw 'Hanya angka'
  let money = parseInt(txt)
  let uang = money
  let pjk = Math.ceil(money * pajak)
  uang += pjk
  if (uang < 1) throw 'Minimal 1'
  let users = global.db.data.users
  if (uang > users[m.sender].uang) throw 'Uang tidak mencukupi untuk mentransfer'
  users[m.sender].uang -= uang
  users[who].uang += money

  m.reply(`(Rp${-money}) + (Rp${-pjk} (Pajak 2%)) = ( Rp${-uang} )`)
  conn.fakeReply(m.chat, `+Rp${money}`, who, m.text)
}
//handler.help = ['pay @user <amount>']
//handler.tags = ['xp']
handler.command = /^pay|t(f|ransfer)$/
handler.register = true

module.exports = handler

