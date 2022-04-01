let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let bdh = (args[0] || '').toLowerCase()
    let slime = global.db.data.users[m.sender].slime
    let goblin = global.db.data.users[m.sender].goblin
    let skeleton = global.db.data.users[m.sender].skeleton
    let wolf = global.db.data.users[m.sender].wolf
let bed = `
Monster yang bisa di bedah

*• Slime*
*• Goblin*
*• Skeleton*
*• Wolf*


*[ Stok Monster Kamu ]*

• Slime  ${slime}
• Goblin  ${goblin}
• Skeleton  ${skeleton}
• Wolf  ${wolf}


contoh:
*${usedPrefix + command } slime 3*
`.trim()
try {
       if (/bedah/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'slime':
            if (global.db.data.users[m.sender].slime >= count * 1) {
                           global.db.data.users[m.sender].slime >= count * 1
                            global.db.data.users[m.sender].slime -= count * 1
                            global.db.data.users[m.sender].mgstone += count * 1
                            conn.reply(m.chat, `Anda berhasil mendapatkan ${count} Magic Stone`, m)
                       } else conn.reply(m.chat, `Monster kamu tidak cukup untuk dibedah`, m)
break

                  case 'goblin':
            if (global.db.data.users[m.sender].goblin >= count * 1) {
                            global.db.data.users[m.sender].goblin >= count * 1
                            global.db.data.users[m.sender].goblin -= count * 1
                            global.db.data.users[m.sender].mgstone += count * 1
                            conn.reply(m.chat, `Anda berhasil mendapatkan ${count} Magic Stone`, m)
                       } else conn.reply(m.chat, `Monster kamu tidak cukup untuk dibedah`, m)
break
                   case 'skeleton':
            if (global.db.data.users[m.sender].skeleton >= count * 1) {
                           global.db.data.users[m.sender].skeleton >= count * 1
                            global.db.data.users[m.sender].skeleton -= count * 1
                            global.db.data.users[m.sender].mgstone += count * 3
                            conn.reply(m.chat, `Anda berhasil mendapatkan ${count * 3} Magic Stone`, m)
                       } else conn.reply(m.chat, `Monster kamu tidak cukup untuk dibedah`, m)
break
                   case 'wolf':
            if (global.db.data.users[m.sender].wolf >= count * 1) {
                          global.db.data.users[m.sender].wolf >= count * 1
                            global.db.data.users[m.sender].wolf -= count * 1
                            global.db.data.users[m.sender].mgstone += count * 5
                            conn.reply(m.chat, `Anda berhasil mendapatkan ${count * 5} Magic Stone`, m)
                       } else conn.reply(m.chat, `Monster kamu tidak cukup untuk dibedah`, m)
break
                default:
                    conn.reply(m.chat, bed, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Error`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'bedah.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['bedah <jenis monster> <jumlah>']
handler.tags = ['rpg']
handler.register = false
handler.command = /^(bedah)$/i

module.exports = handler
