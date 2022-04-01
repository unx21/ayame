let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, command, DevMode }) => { 

  try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastmeh)
        let _timers = (86400000 - __timers) 
        let timers = clockString(_timers)
        
        conn.duel = conn.duel ? conn.duel : {}
        
   //   if (global.db.data.users[m.sender].durability > 199) {
    //  if (global.db.data.users[m.sender].healt > 299) {
  //    if (global.db.data.users[m.sender].highsword > 9) { 
    //  if (global.db.data.users[m.sender].sword > 14) { 
   //   if (new Date - global.db.data.users[m.sender].lastmeh > 86400000) {
  //   let str = `Kamu Mencapai Lantai Teratas Dungeon Dan Akan Bertarung Melawan *Final Boss*\n\n_Jika Kamu Kalah Dan Mati, Maka Kamu Hanya Menderita Kerugian_\n_Tapi Jika Kamu Menang, Maka Seluruh Hadiah Adalah Milikmu Tanpa Takut Kehilangan Semua Resource_`
  //   let fot = `Pilihan Hanya Gas Atau Skip`
  //   conn.send2Button(m.chat, str, fot, 'G a s s', '.gas', 'S k i p', '.skip', m)
   //    } else conn.reply(m.chat, `Melawan *Final Boss* membuat anda kapok, silahkan coba *${timers}* lagi`, m)
 //   } else conn.reply(m.chat, 'Minimal 15 sword untuk bisa bertarung lagi, terlalu berbahaya', m)
  // } else conn.reply(m.chat, 'Kamu perlu 10 high sword untuk dapat masuk, semakin banyak semakin tinggi harapan menang', m)
// } else conn.reply(m.chat, 'Kamu membutuhkan 300 Nyawa karena menantang *Final Boss* membutuhkan HP yang tebal', m)
 //} else conn.reply(m.chat, 'Dibutuhkan minimal 200 Durability untuk memperkuat pertahanan mu', m)
 
      if (/challenge|dungeon2/.test(command)) {
        if (global.db.data.users[m.sender].durability > 199) {
        if (global.db.data.users[m.sender].healt > 299) {
        if (global.db.data.users[m.sender].highsword > 9) { 
        if (global.db.data.users[m.sender].sword > 14) { 
        if (new Date - global.db.data.users[m.sender].lastmeh > 86400000) {
      let str = `Kamu Mencapai Lantai Teratas Dungeon Dan Akan Bertarung Melawan *Final Boss*\n\n_Jika Kamu Kalah Dan Mati, Maka Kamu Hanya Menderita Kerugian_\n_Tapi Jika Kamu Menang, Maka Seluruh Hadiah Adalah Milikmu Tanpa Takut Kehilangan Semua Resource_`
      let fot = `Pilihan Hanya Gas Atau Skip`
      conn.send2Button(m.chat, str, fot, 'G a s s', '.gas', 'S k i p', '.skip', m)
      } else conn.reply(m.chat, `Melawan *Final Boss* membuat anda kapok, silahkan coba *${timers}* lagi`, m)
     } else conn.reply(m.chat, 'Minimal 15 sword untuk bisa bertarung lagi, terlalu berbahaya', m)
    } else conn.reply(m.chat, 'Kamu perlu 10 high sword untuk dapat masuk, semakin banyak semakin tinggi harapan menang', m)
   } else conn.reply(m.chat, 'Kamu membutuhkan 300 Nyawa karena menantang *Final Boss* membutuhkan HP yang tebal', m)
  } else conn.reply(m.chat, 'Dibutuhkan minimal 200 Durability untuk memperkuat pertahanan mu', m)
 }
     
     let nyawa = (pickRandom(['300', '299', '298', '297', '298', '297', '296', '295', '294', '293', '292', '291', '290', '300', '299', '298', '297', '296', '295', '294', '293', '292', '291', '290']))
     let tahan = (pickRandom(['200', '199', '198', '197', '196', '195', '194', '193', '192', '191', '190']))
     let pedangkuat = (pickRandom(['10', '9', '8', '7', '6', '5']))
     let pedang = (pickRandom(['15', '14', '13', '12', '11', '10']))
     let pedangjago = `${Math.floor(Math.random() * 3700)}`.trim() 
     let money = `${Math.floor(Math.random() * 5000000)}`.trim() 
     let coin = `${Math.floor(Math.random() * 2500000)}`.trim() 
     let mstone = `${Math.floor(Math.random() * 1500)}`.trim() 
     let hplan = `${Math.floor(Math.random() * 250)}`.trim() 
     let daymen = `${Math.floor(Math.random() * 1200)}`.trim() 
     let gol = `${Math.floor(Math.random() * 1300)}`.trim() 
     let lejen = `${Math.floor(Math.random() * 1000)}`.trim() 
     
     let teks = `
Kamu Berhasil ${pickRandom(['membunuh', 'mengalahkan', 'membantai'])} *Final Boss*\n
*「 BIG REWARD 」*

💵 *Uang: ${money}*
🪙 *Koin: ${coin}*
💎 *Diamond: ${daymen}*
🎁 *Legendary: ${lejen}*
🌱 *Hipokute Plant: ${hplan}*
♻️ *Magic Stone: ${mstone}*
♻️ *Gold: ${gol}*
`.trim()

     let tekz = `
Kamu ${pickRandom(['kalah', 'dikalahkan', 'mati', 'terbunuh', 'gagal', 'ketiduran'])} dan berikut *Kerugianmu*\n
_Damage yang di terima sebesar ${nyawa * 1}_
_Durability yang hancur sebesar ${tahan * 1}_
_Sword yang patah berjumlah ${pedang * 1}_
_High Sword berkurang sebanyak ${pedangkuat * 1}_
_*Kerusakan Total Seluruh Pedang mu adalah ${pedangjago * 1}*_
`.trim()
    let caption = `
Kamu menolak untuk melawan *Final Boss* karena kamu ${pickRandom(['penakut', 'sedang ngelek', 'banyak alasan', 'gaberani bertaruh', 'Y o w a i m o', 'masih lemah', 'galau', 'gay', 'dibenci', 'psatir', 'anggota pp'])}
`.trim()
     
     let randomaku = `${Math.floor(Math.random() * 700)}`.trim()
     let randomkamu = `${Math.floor(Math.random() * 600)}`.trim()
     let Aku = (randomaku * 1)
     let Kamu = (randomkamu * 1)
     let user = global.db.data.users[m.sender]
     
     if (/gas/.test(command)) {
     if (global.db.data.users[m.sender].durability > 199) {
     if (global.db.data.users[m.sender].healt > 299) {
     if (global.db.data.users[m.sender].highsword > 9) { 
     if (global.db.data.users[m.sender].sword > 14) { 
     if (Aku < Kamu) {
       user.uang += money * 1
       user.koin += coin * 1
       user.diamond += daymen * 1
       user.legendary += lejen * 1
       user.mgstone += mstone * 1
       user.hplant += hplan * 1
       user.gold += gol * 1
       user.lastmeh = new Date * 1
       conn.reply(m.chat, teks, m)
     } else if (Aku > Kamu) {
       user.healt -= nyawa * 1
       user.durability -= tahan * 1
       user.highsword -= pedangkuat * 1
       user.sword -= pedang * 1
       user.swordpower -= pedangjago * 1
       user.lastmeh = new Date * 1
       conn.reply(m.chat, tekz, m)
       }// else conn.reply(m.chat, 'Minimal 15 sword untuk bisa bertarung lagi, terlalu berbahaya', m)
     }// else conn.reply(m.chat, 'Kamu perlu 10 high sword untuk dapat masuk, semakin banyak semakin tinggi harapan menang', m)
   }// else conn.reply(m.chat, 'Kamu membutuhkan 300 Nyawa karena menantang *Final Boss* membutuhkan HP yang tebal', m)
 }// else conn.reply(m.chat, 'Dibutuhkan minimal 200 Durability untuk memperkuat pertahanan mu', m)
     } }
   
   if (/skip/.test(command)) {
     conn.reply(m.chat, caption, m)
     conn.duel = {}
   }
 } catch (e) {
   //return conn.sendButton( m.chat, `Sepertinya ada bug`, `laporkan ke owner`, `Kanjut Badag`, `+bug duel ${e.stack}`, m)
   return m.reply(`${e.stack}`)
 }
}

handler.help = ['challenge', 'dungeon2']
handler.tags = ['rpg']
handler.command = /^(challenge|dungeon2|gas|skip)/i

module.exports = handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}