let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let msk = (args[0] || '').toLowerCase()
    let rusa = global.db.data.users[m.sender].rusa
    let babi = global.db.data.users[m.sender].babi
    let kalkun = global.db.data.users[m.sender].kalkun
    let kelinci = global.db.data.users[m.sender].kelinci
    let bison = global.db.data.users[m.sender].bison
let cok = `
Hewan buruan yang bisa dimasak

🦌 *Rusa*
🐗 *Babi*
🦃 *Kalkun*
🐇 *Kelinci*
🦬 *Bison*


*[ Stok Buruan Kamu ]*

🦌 Rusa  ${rusa} stok
🐗 Babi  ${babi} stok
🦃 Kalkun  ${kalkun} stok
🐇 Kelinci  ${kelinci} stok
🦬 Bison  ${bison} stok


contoh:
*${usedPrefix + command } rusa 1*
`.trim()

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'rusa':
            if (global.db.data.users[m.sender].rusa >= count * 1) {
            if (global.db.data.users[m.sender].kayu >= count * 1) {
            	            global.db.data.users[m.sender].kayu >= count * 1
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].rusa >= count * 1
                            global.db.data.users[m.sender].rusa -= count * 1
                            global.db.data.users[m.sender].rusabakar += count * 1
                            conn.reply(m.chat, `Succes memasak ${count} rusa bakar dengan ${count} kayu`, m)
                         } else conn.reply(m.chat, `Kamu tidak mempunyai kayu bakar yang cukup`, m)
                       } else conn.reply(m.chat, `Stok buruan tidak cukup untuk dimasak`, m)
break
                  case 'babi':
            if (global.db.data.users[m.sender].babi >= count * 1) {
            if (global.db.data.users[m.sender].kayu >= count * 1) {
            	            global.db.data.users[m.sender].kayu >= count * 1
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].babi >= count * 1
                            global.db.data.users[m.sender].babi -= count * 1
                            global.db.data.users[m.sender].babibakar += count * 1
                            conn.reply(m.chat, `Succes memasak ${count} babi bakar dengan ${count} kayu`, m)
                         } else conn.reply(m.chat, `Kamu tidak mempunyai kayu bakar yang cukup`, m)
                       } else conn.reply(m.chat, `Stok buruan tidak cukup untuk dimasak`, m)
break
                   case 'kalkun':
            if (global.db.data.users[m.sender].kalkun >= count * 1) {
            if (global.db.data.users[m.sender].kayu >= count * 1) {
            	            global.db.data.users[m.sender].kayu >= count * 1
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].kalkun >= count * 1
                            global.db.data.users[m.sender].kalkun -= count * 1
                            global.db.data.users[m.sender].kalkunbakar += count * 1
                            conn.reply(m.chat, `Succes memasak ${count} kalkun bakar dengan ${count} kayu`, m)
                         } else conn.reply(m.chat, `Kamu tidak mempunyai kayu bakar yang cukup`, m)
                       } else conn.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
                       
break
                   case 'kelinci':
            if (global.db.data.users[m.sender].kelinci >= count * 1) {
            if (global.db.data.users[m.sender].kayu >= count * 1) {
            	            global.db.data.users[m.sender].kayu >= count * 1
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].kelinci >= count * 1
                            global.db.data.users[m.sender].kelinci -= count * 1
                            global.db.data.users[m.sender].kelincibakar += count * 1
                            conn.reply(m.chat, `Succes memasak ${count} kelinci bakar dengan ${count} kayu`, m)
                         } else conn.reply(m.chat, `Kamu tidak mempunyai kayu bakar yang cukup`, m)
                       } else conn.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
break
                   case 'bison':
            if (global.db.data.users[m.sender].bison >= count * 1) {
            if (global.db.data.users[m.sender].kayu >= count * 1) {
            	            global.db.data.users[m.sender].kayu >= count * 1
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].bison >= count * 1
                            global.db.data.users[m.sender].bison -= count * 1
                            global.db.data.users[m.sender].bisonbakar += count * 1
                            conn.reply(m.chat, `Succes memasak ${count} bison bakar dengan ${count} kayu`, m)
                         } else conn.reply(m.chat, `Kamu tidak mempunyai kayu bakar yang cukup`, m)
                       } else conn.reply(m.chat, `Stok buruan mu tidak cukup untuk dimasak`, m)
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
                conn.sendMessage(jid, 'cook.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['cook <buruan> <jumlah>', 'masak <buruan> <jumlah>']
handler.tags = ['rpg']
handler.register = false
handler.command = /^(masak|cook)$/i
module.exports = handler
