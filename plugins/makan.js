let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let mkn = (args[0] || '').toLowerCase()
    let stamina = global.db.data.users[m.sender].stamina
    let rusabakar = global.db.data.users[m.sender].rusabakar
    let babibakar = global.db.data.users[m.sender].babibakar
    let kalkunbakar = global.db.data.users[m.sender].kalkunbakar
    let kelincibakar = global.db.data.users[m.sender].kelincibakar
    let bisonbakar = global.db.data.users[m.sender].bisonbakar
let cok = `
*[ Stok Makanan Kamu ]*

• rusabakar  ${rusabakar} stok
• babibakar  ${babibakar} stok
• kalkunbakar  ${kalkunbakar} stok
• kelincibakar  ${kelincibakar} stok
• bisonbakar  ${bisonbakar} stok


contoh:
*${usedPrefix + command} bisonbakar 4*
`.trim()
try {
       if (/makan|eat/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'rusabakar':
            if (global.db.data.users[m.sender].stamina < 100) {
                        if (global.db.data.users[m.sender].rusabakar >= count * 1) {
                            global.db.data.users[m.sender].rusabakar -= count * 1
                            global.db.data.users[m.sender].stamina += stamina * count
                            conn.reply(m.chat, `Berhasil memakan ${count} rusa bakar`, m)
                       } else conn.reply(m.chat, `Daging rusa bakar kamu dah habis`, m)
                       } else conn.reply(m.chat, `Dah kenyang wuh`, m)
break

                  case 'babibakar':
            if (global.db.data.users[m.sender].stamina < 100) {
                        if (global.db.data.users[m.sender].babibakar >= count * 1) {
                            global.db.data.users[m.sender].babibakar -= count * 1
                            global.db.data.users[m.sender].stamina += stamina * count
                            conn.reply(m.chat, `Succes memakan ${count} babi bakar`, m)
                       } else conn.reply(m.chat, `Babi bakar kamu telah habis`, m)
                       } else conn.reply(m.chat, `Udah kenyang woyy udahh`, m)
break
                   case 'kalkunbakar':
            if (global.db.data.users[m.sender].stamina < 100) {
                        if (global.db.data.users[m.sender].kalkunbakar >= count * 1) {
                            global.db.data.users[m.sender].kalkunbakar -= count * 1
                            global.db.data.users[m.sender].stamina += stamina * count
                            conn.reply(m.chat, `${count} daging kalkun bakar dimakan`, m)
                       } else conn.reply(m.chat, `Kalkun bakar tidak cukup`, m)
                       } else conn.reply(m.chat, `Nanti mati kekenyangan mampos`, m)
                       
break
                   case 'kelincibakar':
            if (global.db.data.users[m.sender].stamina < 100) {
                        if (global.db.data.users[m.sender].kelincibakar >= count * 1) {
                            global.db.data.users[m.sender].kelincibakar -= count * 1
                            global.db.data.users[m.sender].stamina += stamina * count
                            conn.reply(m.chat, `Memakan ${count} kelinci bakar`, m)
                       } else conn.reply(m.chat, `Stok kelinci bakar habis`, m)
                       } else conn.reply(m.chat, `Turu lah dah kenyang juga`, m)
                       
break
                   case 'bisonbakar':
            if (global.db.data.users[m.sender].stamina < 100) {
                        if (global.db.data.users[m.sender].bisonbakar >= count * 1) {
                            global.db.data.users[m.sender].bisonbakar -= count * 1
                            global.db.data.users[m.sender].stamina += stamina * count
                            conn.reply(m.chat, `Berhasil memakan ${count} bison bakar`, m)
                       } else conn.reply(m.chat, `Bison bakar belum dimasak`, m)
                       } else conn.reply(m.chat, `Masak makan kenyang tidur`, m)
                       
break
                default:
                    return conn.reply( m.chat, cok, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Error`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'makan.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['makan <food> <jumlah>', 'eat <food> <jumlah>']
handler.tags = ['rpg']
handler.register = false
handler.command = /^(makan|eat)$/i
module.exports = handler
