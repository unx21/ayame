let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, isOwner, DevMode }) => {
    if (!isOwner) throw false
	let type = (args[0] || '').toLowerCase()
    let cht = (args[0] || '').toLowerCase()
    let cok = `
Pilihan yang Siap untuk di Buang

Uang\nKoin\nDiamond\nPeti\Legendary\nMythic\nHealt\nStamina\nDurability
`.trim()
try {
       if (/buang/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'uang':
                            let bcd = `${pickRandom(['berhasil', 'sukses'])} membuang Rp${count * 1}, database di ubah`.trim()
                            global.DATABASE._data.users[m.sender].uang -= count * 1
                            conn.reply(m.chat, bcd, m)
break

                case 'koin':
                            global.DATABASE._data.users[m.sender].koin -= count * 1
                            let ahh = `${pickRandom(['berhasil', 'sukses', 'aktif'])} membuang ${count * 1} Koin, database di ubah`.trim()
                            conn.reply(m.chat, ahh, m)
break
                case 'diamond':
                            global.DATABASE._data.users[m.sender].diamond -= count * 1
                            let uhh = `${pickRandom(['berhasil', 'sukses', 'aktif'])} membuang ${count * 1} Diamond, database di ubah`.trim()
                            conn.reply(m.chat, uhh, m)
                       
break
                case 'peti':
                            global.DATABASE._data.users[m.sender].peti -= count * 1
                            let ahoy = `${pickRandom(['berhasil', 'sukses', 'aktif'])} membuang ${count * 1} Peti, database di ubah`.trim()
                            conn.reply(m.chat, ahoy, m)
                       
break
                case 'legendary':
                            global.DATABASE._data.users[m.sender].legendary -= count * 1
                            let aqua = `${pickRandom(['berhasil', 'sukses', 'aktif'])} membuang ${count * 1} Legendary Crate, database di ubah`.trim()
                            conn.reply(m.chat, aqua, m)
                       
break
                case 'mythic':
                            global.DATABASE._data.users[m.sender].mythic -= count * 1
                            let wibu = `${pickRandom(['berhasil', 'sukses', 'aktif'])} membuang ${count * 1} Mythic Crate, database di ubah`.trim()
                            conn.reply(m.chat, wibu, m)
                       
break
                case 'healt':
                            global.DATABASE._data.users[m.sender].healt -= count * 1
                            let baka = `${pickRandom(['berhasil', 'sukses', 'aktif'])} membuang ${count * 1} Healt, database di ubah`.trim()
                            conn.reply(m.chat, baka, m)
                       
break
                case 'stamina':
                            global.DATABASE._data.users[m.sender].stamina -= count * 1
                            let tekk = `${pickRandom(['berhasil', 'sukses', 'aktif'])} membuang ${count * 1} Stamina, database di ubah`.trim()
                            conn.reply(m.chat, tekk, m)
                       
break
                case 'durability':
                            global.DATABASE._data.users[m.sender].durability -= count * 1
                            let jck = `${pickRandom(['berhasil', 'sukses', 'aktif'])} membuang ${count * 1} Durability, database di ubah`.trim()
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
                conn.sendMessage(jid, 'buang.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.register = true
handler.command = /^(buang)$/i
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}