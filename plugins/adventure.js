let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        
        
        if (global.db.data.users[m.sender].durability > 19) {
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
            let rubah = global.db.data.users[m.sender].rubah
            let anjing = global.db.data.users[m.sender].anjing
            let kucing = global.db.data.users[m.sender].kucing
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - kucingnya : ___health)
            let healt = (kucing == 0 ? pickRandom(['100', '100', '100']) : kucing > 0 ? __health : ___health)
            let durability = (pickRandom(['15', '14', '13', '12', '10', '11', '9', '8', '7']))
            let uang = `${Math.floor(Math.random() * 250)}`.trim() 
            let koin = `${Math.floor(Math.random() * 250)}`.trim() 
            let kayu = `${Math.floor(Math.random() * 20)}`.trim() 
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
            let diamond = (_diamond * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
            let str = `
Nyawa mu berkurang -${healt * 1} durability berkurang -${durability * 1} karena Kamu telah berpetualang sampai ${pickRandom(['Jepang 🇯🇵', 'Korea 🇰🇷', 'Bali 🇮🇩', 'Amerika 🇺🇸', 'Iraq 🇮🇶', 'Arab 🇸🇦', 'Pakistan 🇵🇰', 'German 🇩🇪', 'Finlandia 🇫🇮', 'Ke bawa dunia mimpi 🏴‍☠️', 'Ujung dunia 🌏', 'Mars 🚩', 'Bulan 🌙', 'Pluto 🏴', 'Matahari ☀️', 'Hatinya dia ❤️‍🔥', '...'])} dan mendapatkan

*「 PRIZE 」*

🪙 *Koin: ${koin}*
💵 *Uang: ${uang}*
🪙 *Koin: ${koin}*
🪵 *Kayu: ${kayu}*
♻️ *Sampah: ${sampah}*${potion == 0 ? '' : '\n🧃 *Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n💎 *Diamond:* ' + diamond + ''}${common == 0 ? '' : '\n🎁 *Common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n🎁 *Uncommon crate:* ' + uncommon + ''}
`.trim()
            conn.reply(m.chat, str, m)
            if (mythic > 0) {
                   global.db.data.users[m.sender].mythic += mythic * 1
                   conn.reply(m.chat, 'Selamat anda mendapatkan item Rare yaitu\n *_'  + mythic + ' Mythic Crate_* 🎁', m)
            }
            if (legendary > 0) {
                global.db.data.users[m.sender].legendary += legendary * 1
                conn.reply(m.chat, 'Selamat anda mendapatkan item Epic yaitu\n *_' + legendary + ' Legendary Crate_* 🎁', m)
            }
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].koin += koin * 1
            global.db.data.users[m.sender].uang += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].kayu += kayu * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`, m)
          } else conn.reply(m.chat, 'Minimal 80 health untuk bisa berpetualang, racik potion dulu dengan cara ketik *' + usedPrefix + 'racik <tanaman herbal>|<jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*', m)
        } else conn.reply(m.chat, 'Dibutuhkan 20 durability untuk bisa berpetualang lagi', m)
      if (global.db.data.users[m.sender].healt < 0) {   // Jika healt user kurang dari 0, maka level dan exp akan di kurangi sebagaimana mestinya  :v
        	let exp = `${Math.floor(Math.random() * 1000)}`.trim()
            let _level = `${pickRandom(['1', '1', '1', '1', '1'])}`
            let level = (_level * 1)
            let uhu = `Nyawa kamu adalah 0\nLevel berkurang -${level * 1} dan Exp berukurang ${exp} XP`.trim()
            conn.reply(m.chat, uhu, m)
            global.db.data.users[m.sender].exp -= exp * 1
            global.db.data.users[m.sender].level -= level * 1
            }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.command = /^(adventure|(ber)?petualang?|mulung|work)$/i
handler.register = true
handler.fail = null

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
