let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {

    let type = (args[0] || '').toLowerCase()
    let use = (args[0] || '').toLowerCase()
    let spotion = global.db.data.users[m.sender].spotion
    let mpotion = global.db.data.users[m.sender].mpotion
    let hpotion = global.db.data.users[m.sender].hpotion
    let ironarmor = global.db.data.users[m.sender].ironarmor
    let goldarmor = global.db.data.users[m.sender].goldarmor
    let magicarmor = global.db.data.users[m.sender].magicarmor
    
 let cok = `
                 *「 POTION 」*
Jumlah Healt per Potion

*• spotion   25 healt*
*• mpotion   60 healt*
*• hpotion   150 healt*


*[ Stok Potion Kamu ]*

• spotion  ${spotion} buah
• mpotion  ${mpotion} buah
• hpotion  ${hpotion} buah


                 *「 ARMOR 」*
Jumlah Durability per Armor

*• ironarmor   25 durability*
*• goldarmor   60 durability*
*• magicarmor   150 durability*


*[ Stok Armor Kamu ]*

• ironarmor  ${ironarmor} buah
• goldarmor  ${goldarmor} buah
• magicarmor  ${magicarmor} buah

contoh:
*${usedPrefix + command} spotion 2*
`.trim()
try {
       if (/use|pakai/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'spotion':
            if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].spotion >= count * 1) {
                            global.db.data.users[m.sender].spotion -= count * 1
                            global.db.data.users[m.sender].healt += count * 25
                            conn.reply(m.chat, `Sukses menggunakan ${count} spotion\n+${count * 25} Healt`, m)
                       } else conn.reply(m.chat, `Tidak memiliki spotion lagi`, m)
                       } else conn.reply(m.chat, `Nyawa dah penuh`, m)
break
                  case 'mpotion':
            if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].mpotion >= count * 1) {
                            global.db.data.users[m.sender].mpotion -= count * 1
                            global.db.data.users[m.sender].healt += count * 60
                            conn.reply(m.chat, `Berhasil menggunakan ${count} mpotion\n+${count * 60} Healt`, m)
                       } else conn.reply(m.chat, `Kehabisan stok mpotion`, m)
                       } else conn.reply(m.chat, `Healt mu penuh oyy`, m)
break
                   case 'hpotion':
            if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].hpotion >= count * 1) {
                            global.db.data.users[m.sender].hpotion -= count * 1
                            global.db.data.users[m.sender].healt += count * 150
                            conn.reply(m.chat, `Primitif, menggunakan ${count} hpotion\n+${count * 150} Healt`, m)
                       } else conn.reply(m.chat, `Belum meracik hpotion`, m)
                       } else conn.reply(m.chat, `Udah weh, dah penuh`, m)               
break
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
                conn.sendMessage(jid, 'use.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['use <tipe> <jumlah>', 'pakai <tipe> <jumlah>']
handler.tags = ['rpg']
handler.register = false
handler.command = /^(use|pakai)$/i
module.exports = handler
