let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timer = (new Date - global.db.data.users[m.sender].lastberburu)
        let _timer = (300000 - __timer)
        let timer = clockString(_timer)
        
        
        if (global.db.data.users[m.sender].magazine > 11) {
        if (global.db.data.users[m.sender].stamina > 79) {
            if (new Date - global.db.data.users[m.sender].lastberburu > 300000) {
            let magazine = (pickRandom(['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']))
            let stamina = (pickRandom(['75', '74', '73', '72', '71', '70', '69', '68', '67', '66', '65']))
            let exp = `${Math.floor(Math.random() * 150)}`.trim() 
            let kayu = `${Math.floor(Math.random() * 20)}`.trim() 
            let rusa = `${Math.floor(Math.random() * 3)}`.trim() 
            let babi = `${Math.floor(Math.random() * 2)}`.trim() 
            let kalkun = `${Math.floor(Math.random() * 2)}`.trim() 
            let kelinci = `${Math.floor(Math.random() * 5)}`.trim()
            let _bison = `${pickRandom(['1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])}`
            let bison = (_bison * 1)
            let str = `
Peluru mu berkurang *-${magazine * 1}* karena berburu dan Stamina mu juga berkurang sebanyak *-${stamina}*

*Hewan yang berhasil diburu:*

${rusa == 0 ? '' : '\n🦌 *Rusa:* ' + rusa + ''}${babi == 0 ? '' : '\n🐗 *Babi:* ' + babi + ''}${kalkun == 0 ? '' : '\n🦃 *Kalkun:* ' + kalkun + ''}${kelinci == 0 ? '' : '\n🐇 *Kelinci:* ' + kelinci + ''}
🪵 Kayu: ${kayu}

*Bonus: 🔗 ${exp} Exp*
`.trim()
            conn.reply(m.chat, str, m)
            if (bison > 0) {
                global.db.data.users[m.sender].bison += bison * 1
                conn.reply(m.chat, 'Anda berhasil mendapatkan tangkapan Langka yaitu *' + bison + ' Bison* 🦬', m)
            }
            global.db.data.users[m.sender].magazine -= magazine * 1
            global.db.data.users[m.sender].stamina -= stamina * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].kayu += kayu * 1
            global.db.data.users[m.sender].rusa += rusa * 1
            global.db.data.users[m.sender].kalkun += kalkun * 1
            global.db.data.users[m.sender].babi += babi * 1
            global.db.data.users[m.sender].kelinci += kelinci * 1
            global.db.data.users[m.sender].lastberburu = new Date * 1
            } else conn.reply(m.chat, `Anda sudah berburu untuk kelangsungan hidup dan kelelahan, silahkan coba *${timer}* lagi`, m)
        } else conn.reply(m.chat, 'Minimal 80 stamina untuk bisa berburu, Makan hasil buruan mu untuk menambah stamina', m)
       } else conn.reply(m.chat, 'Dibutuhkan 12 magazine untuk berburu lagi, Silahkan reload magazine mu dengan peluru', m)
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
handler.command = /^(berburu|hunt)$/i
handler.register = false
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
