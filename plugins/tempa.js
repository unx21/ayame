let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let tpa = (args[0] || '').toLowerCase()
    let iron = global.db.data.users[m.sender].iron
    let gold = global.db.data.users[m.sender].gold
    let mgstone = global.db.data.users[m.sender].mgstone
let bed = `
Resource yang bisa di tempa

*~ ironarmor*
*~ goldarmor*
*~ magicarmor*
*~ peluru*
*~ sword*
*~ highsword*


contoh:
*${usedPrefix + command } ironarmor 3*


_Biaya Penempaan_

- _ironarmor = 25 iron_
- _goldarmor = 75 gold_
- _magicarmor = 170 mgstone_
- _peluru = 1 mgstone_
- _sword = 5 iron_
- _highsword = 10 iron + 3 gold_


*[ Stok Item Kamu ]*

- Iron  ${iron} buah
- Gold  ${gold} buah
- Magic Stone  ${mgstone} buah
`.trim()
try {

       if (/tempa|menempa/i.test(command)) {
       	const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ironarmor':
            if (global.db.data.users[m.sender].iron >= count * 25) {
                           global.db.data.users[m.sender].iron >= count * 25
                            global.db.data.users[m.sender].iron -= count * 25
                            global.db.data.users[m.sender].ironarmor += count * 1
                            conn.reply(m.chat, `${count * 25} Iron ditempa menjadi ${count} Iron Armor`, m)
                       } else conn.reply(m.chat, `Kamu tidak memiliki stok iron yang cukup`, m)
break
                case 'goldarmor':
            if (global.db.data.users[m.sender].gold >= count * 75) {
                           global.db.data.users[m.sender].gold >= count * 75
                            global.db.data.users[m.sender].gold -= count * 75
                            global.db.data.users[m.sender].goldarmor += count * 1
                            conn.reply(m.chat, `${count * 75} Gold ditempa menjadi ${count} Gold Armor`, m)
                       } else conn.reply(m.chat, `Kamu tidak memiliki stok gold yang cukup`, m)
break
                case 'magicarmor':
            if (global.db.data.users[m.sender].mgstone >= count * 170) {
                           global.db.data.users[m.sender].mgstone >= count * 170
                            global.db.data.users[m.sender].mgstone -= count * 170
                            global.db.data.users[m.sender].magicarmor += count * 1
                            conn.reply(m.chat, `${count * 170} Magic Stone ditempa menjadi ${count} Magic Armor`, m)
                       } else conn.reply(m.chat, `Kamu tidak memiliki stok magic stone yang cukup`, m)
break
                case 'sword':
            if (global.db.data.users[m.sender].iron >= count * 5) {
                            global.db.data.users[m.sender].iron >= count * 5
                            global.db.data.users[m.sender].iron -= count * 5
                            global.db.data.users[m.sender].sword += count * 1
                            global.db.data.users[m.sender].swordpower += count * 100
                            conn.reply(m.chat, `${count * 5} Iron di tempa menjadi ${count} Sword dan mendapatkan ${count * 100} Sword Power`, m)
                       } else conn.reply(m.chat, `Kamu tidak memiliki stok iron yang cukup`, m)
break
                 case 'highsword':
             if (global.db.data.users[m.sender].gold >= count * 3) {
             if (global.db.data.users[m.sender].iron >= count * 10) {
                            global.db.data.users[m.sender].gold >= count * 3
                            global.db.data.users[m.sender].iron >= count * 10
                            global.db.data.users[m.sender].gold -= count * 3
                            global.db.data.users[m.sender].iron -= count * 10
                            global.db.data.users[m.sender].highsword += count * 1
                            global.db.data.users[m.sender].swordpower += count * 275
                            conn.reply(m.chat, `${count * 3} Gold dan ${count * 10} Iron di tempa menjadi ${count} Sword dan mendapatkan ${count * 275} Sword Power`, m)
                       } else conn.reply(m.chat, `Kamu tidak memiliki stok iron yang cukup`, m)
                     } else conn.reply(m.chat, `Kamu tidam memiliki stok gold yang cukup`, m)
break
                case 'peluru':
            if (global.db.data.users[m.sender].mgstone >= count * 1) {
                           global.db.data.users[m.sender].mgstone >= count * 1
                            global.db.data.users[m.sender].mgstone -= count * 1
                            global.db.data.users[m.sender].peluru += count * 1
                            conn.reply(m.chat, `${count} Magic Stone ditempa menjadi ${count} Peluru`, m)
                       } else conn.reply(m.chat, `Kamu tidak memiliki stok magic stone yang cukup`, m)
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
                conn.sendMessage(jid, 'tempa.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.register = false
handler.command = /^(tempa|menempa)$/

module.exports = handler
