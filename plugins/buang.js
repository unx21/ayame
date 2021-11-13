let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, isOwner, DevMode }) => {
    if (!isOwner) throw false
	let type = (args[0] || '').toLowerCase()
    let cht = (args[0] || '').toLowerCase()
    let cok = `
*[ LIST ]*

• Uang\n• Koin\n• Diamond\n• Peti\n• Legendary\n• Mythic\n• Healt\n• Stamina\n• Durability
`.trim()
try {
       if (/buang/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'uang':
                            let syt = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let bcd = `${syt} Membuang Rp${count * 1}`.trim()
                            global.db.data.users[m.sender].uang -= count * 1
                            conn.reply(m.chat, bcd, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${syt} Membuang Rp${count * 1}`, 'status@broadcast')
break

                case 'koin':
                            let tot = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let ahh = `${tot} Membuang ${count * 1} Koin`.trim()
                            global.db.data.users[m.sender].koin -= count * 1
                            conn.reply(m.chat, ahh, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${tot} Membuang ${count * 1} Koin`, 'status@broadcast')
break
                case 'diamond':
                            let asw = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let uhh = `${asw} Membuang ${count * 1} Diamond`.trim()
                            global.db.data.users[m.sender].diamond -= count * 1
                            conn.reply(m.chat, uhh, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${asw} Membuang ${count * 1} Diamond`, 'status@broadcast')
                       
break
                case 'peti':
                            let tok = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let ahoy = `${tok} Membuang ${count * 1} Peti`.trim()
                            global.db.data.users[m.sender].peti -= count * 1
                            conn.reply(m.chat, ahoy, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${tok} Membuang ${count * 1} Peti`, 'status@broadcast')
                       
break
                case 'legendary':
                            let bro = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let aqua = `${bro} Membuang ${count * 1} Legendary Crate`.trim()
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, aqua, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${bro} Membuang ${count * 1} Legendary Crate`, 'status@broadcast')
                       
break
                case 'mythic':
                            let cuy = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let wibu = `${cuy} Membuang ${count * 1} Mythic Crate`.trim()
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, wibu, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${cuy} Membuang ${count * 1} Mythic Crate`, 'status@broadcast')
                       
break
                case 'healt':
                            let gas = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let baka = `${gas} Membuang ${count * 1} Healt`.trim()
                            global.db.data.users[m.sender].healt -= count * 1
                            conn.reply(m.chat, baka, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${gas} Membuang ${count * 1} Healt`, 'status@broadcast')
                       
break
                case 'stamina':
                            let dog = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let tekk = `${dog} Membuang ${count * 1} Stamina`.trim()
                            global.db.data.users[m.sender].stamina -= count * 1
                            conn.reply(m.chat, tekk, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${dog} Membuang ${count * 1} Stamina`, 'status@broadcast')
                       
break
                case 'durability':
                            let faq = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let jck = `${faq} Membuang ${count * 1} Durability`.trim()
                            global.db.data.users[m.sender].durability -= count * 1
                            conn.reply(m.chat, jck, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${faq} Membuang ${count * 1} Durability`, 'status@broadcast')
                       
break
                case 'magazine':
                            let tes = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let kon = `${tes} Membuang ${count * 1} Magazine`.trim()
                            global.db.data.users[m.sender].magazine -= count * 1
                            conn.reply(m.chat, kon, m)
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${tes} Membuang ${count * 1} Magazine`, 'status@broadcast')
                       
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
