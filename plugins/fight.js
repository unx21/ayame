let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
  conn.fight = conn.fight ? conn.fight : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fight[m.sender] != "undefined" && conn.fight[m.sender] == true) return m.reply(`*Tidak bisa melakukan pertarungan lagi karena anda sedang bertarung*`)

  let users = participants.map(u => u.jid)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(1,5)

  m.reply(`*Kamu* (level ${global.db.data.users[m.sender].level}) menantang *${conn.getName(lawan)}* (level ${global.db.data.users[lawan].level}) dan sedang dalam pertarungan sengit.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang.`)

  conn.fight[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['cupu','tolol','kebanyakan coli','kurang tidur','pedang patah','tangan buntung','pincang','mimpi basah','dicurangi','belum ngopi','belum mandi','dengkul kopong','gay','dibenci owner']
  let alasanMenang = ['hebat','tidak suka merokok','punya pedang panjang','memiliki pedang yang kuat','tidak suka coli','sudah ngopi pagi ini','disayang owner','bisa salto','jago','rajin push up','tidak suka ngocok batang']

  let kesempatan = []
  for (i=0;i<global.db.data.users[m.sender].level;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.data.users[lawan].level;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = getRandom(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 5000
    global.db.data.users[m.sender].uang += hadiah
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Kamu* (level ${global.db.data.users[m.sender].level}) MENANG melawan *${conn.getName(lawan)}* (level ${global.db.data.users[lawan].level}) karena kamu ${alasanMenang[getRandom(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 5000
    global.db.data.users[m.sender].uang -= denda
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Kamu* (level ${global.db.data.users[m.sender].level}) KALAH melawan *${conn.getName(lawan)}* (level ${global.db.data.users[lawan].level}) karena kamu ${alasanKalah[getRandom(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}`)
  }else {
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil imbang kack, ga dapet apa apa :v`)
  }

  delete conn.fight[m.sender]
}
handler.help = ['fight', 'tarung']
handler.tags = ['rpg']
handler.command = /^(fight|tarun(g|k))$/i
handler.limit = false
handler.group = true
handler.exp = 0
module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
