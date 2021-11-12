let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, isOwner, DevMode }) => {
    if (!isOwner) throw false
	let type = (args[0] || '').toLowerCase()
    let cht = (args[0] || '').toLowerCase()
    let cok = `
Pilihan yang Siap untuk di Cheat

Uang\nKoin\nDiamond\nPeti\Legendary\nMythic\nHealt\nStamina\nDurability
`.trim()
try {
       if (/cheat|cit|gacha/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'uang':
                            let bcd = `Cheat Uang ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan Rp${count * 1} ke dalam database`.trim()
                            global.DATABASE._data.users[m.sender].uang += count * 1
                            conn.reply(m.chat, bcd, m)
break

                case 'koin':
                            let ahh = `Cheat Koin ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan ${count * 1} Koin ke dalam database`.trim()
                            global.DATABASE._data.users[m.sender].koin += count * 1
                            conn.reply(m.chat, ahh, m)
break
                case 'diamond':
                            let uhh = `Cheat Diamond ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan ${count * 1} Diamond kedalam database`.trim()
                            global.DATABASE._data.users[m.sender].diamond += count * 1
                            conn.reply(m.chat, uhh, m)
                       
break
                case 'peti':
                            let ahoy = `Cheat Peti ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan ${count * 1} Peti kedalam database`.trim()
                            global.DATABASE._data.users[m.sender].peti += count * 1
                            conn.reply(m.chat, ahoy, m)
                       
break
                case 'legendary':
                            let aqua = `Cheat Legendary Crate ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan ${count * 1} Legendary Crate kedalam database`.trim()
                            global.DATABASE._data.users[m.sender].legendary += count * 1
                            conn.reply(m.chat, aqua, m)
                       
break
                case 'mythic':
                            let wibu = `Cheat Mythic Crate ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan ${count * 1} Mythic Crate kedalam database`.trim()
                            global.DATABASE._data.users[m.sender].mythic += count * 1
                            conn.reply(m.chat, wibu, m)
                       
break
                case 'healt':
                            let baka = `Cheat Nyawa ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan ${count * 1} Healt kedalam database`.trim()
                            global.DATABASE._data.users[m.sender].healt += count * 1
                            conn.reply(m.chat, baka, m)
                       
break
                case 'stamina':
                            let tekk = `Cheat Stamina ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan ${count * 1} Stamina kedalam database`.trim()
                            global.DATABASE._data.users[m.sender].stamina += count * 1
                            conn.reply(m.chat, tekk, m)
                       
break
                case 'durability':
                            let jck = `Cheat Durability ${pickRandom(['berhasil', 'sukses', 'aktif'])}, menambahkan ${count * 1} Durability kedalam database`.trim()
                            global.DATABASE._data.users[m.sender].durability += count * 1
                            conn.reply(m.chat, jck, m)
                       
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
                conn.sendMessage(jid, 'cheat.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.register = true
handler.command = /^(gacha|cheat|cit)$/i
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}