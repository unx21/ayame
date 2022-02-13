let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let pki = (args[0] || '').toLowerCase()
    let ironarmor = global.db.data.users[m.sender].ironarmor
    let goldarmor = global.db.data.users[m.sender].goldarmor
    let magicarmor = global.db.data.users[m.sender].magicarmor
let cok = `
Jumlah Durability per Armor

*• ironarmor   25 durability*
*• goldarmor   60 durability*
*• magicarmor   150 durability*


*[ Stok Armor Kamu ]*

• ironarmor  ${ironarmor} buah
• goldarmor  ${goldarmor} buah
• magicarmor  ${magicarmor} buah

contoh:
*${usedPrefix + command} magicarmor 2*
`.trim()
try {
       if (/pakai|gunakan/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ironarmor':
            if (global.db.data.users[m.sender].durability < 20) {
                        if (global.db.data.users[m.sender].ironarmor >= count * 1) {
                            global.db.data.users[m.sender].ironarmor -= count * 1
                            global.db.data.users[m.sender].durability += count * 25
                            conn.reply(m.chat, `${count} Iron Armor dipakai\n+${count * 25} Durability`, m)
                       } else conn.reply(m.chat, `Tidak memiliki iron armor lagi`, m)
                       } else conn.reply(m.chat, `Durability penuh`, m)
break

                  case 'goldarmor':
            if (global.db.data.users[m.sender].durability < 20) {
                        if (global.db.data.users[m.sender].goldarmor >= count * 1) {
                            global.db.data.users[m.sender].goldarmor -= count * 1
                            global.db.data.users[m.sender].durability += count * 60
                            conn.reply(m.chat, `${count} Gold Armor digunakan\n+${count * 60} Durability`, m)
                       } else conn.reply(m.chat, `Kehabisan stok gold armor`, m)
                       } else conn.reply(m.chat, `Durability penuh`, m)
break
                   case 'magicarmor':
            if (global.db.data.users[m.sender].durability < 20) {
                        if (global.db.data.users[m.sender].magicarmor >= count * 1) {
                            global.db.data.users[m.sender].magicarmor -= count * 1
                            global.db.data.users[m.sender].durability += count * 150
                            conn.reply(m.chat, `${count} Magic Armor terpakai\n+${count * 150} Durability`, m)
                       } else conn.reply(m.chat, `Belum membuat magic armor`, m)
                       } else conn.reply(m.chat, `Durability penuh`, m)
                       
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
                conn.sendMessage(jid, 'pakai.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.register = false
handler.command = /^(pakai|gunakan)$/i
module.exports = handler
