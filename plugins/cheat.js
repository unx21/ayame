let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, isOwner, DevMode }) => {
    if (!isOwner) throw false
	let type = (args[0] || '').toLowerCase()
    let cht = (args[0] || '').toLowerCase()
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    let cok = `
*[ LIST ]*

• Uang\n• Koin\n• Diamond\n• Peti\n• Legendary\n• Mythic\n• Healt\n• Stamina\n• Durability\n• Magazine
`.trim()
try {
       if (/cheat|cit/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'uang':
                            let dod = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let bcd = `Cheat Uang ${dod}`.trim()
                            global.db.data.users[who].uang += count * 1
                            conn.reply(m.chat, bcd, m)
                            conn.fakeReply(m.chat, `Menambahkan Rp${count * 1} Kedalam Database`, '0@s.whatsapp.net', `Cheat Uang ${dod}`, 'status@broadcast')
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan Rp${count * 1} Kedalam Database`, 'status@broadcast')
break

                case 'koin':
                            let did = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let ahh = `Cheat Koin ${did}`.trim()
                            global.db.data.users[who].koin += count * 1
                            conn.reply(m.chat, ahh, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Koin Kedalam Database`, '0@s.whatsapp.net', `Cheat Koin ${did}`, 'status@broadcast')
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Koin Kedalam Database`, 'status@broadcast')
break
                case 'diamond':
                            let dud = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let uhh = `Cheat Diamond ${dud}`.trim()
                            global.db.data.users[who].diamond += count * 1
                            conn.reply(m.chat, uhh, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Diamond Kedalam Database`, '0@s.whatsapp.net', `Cheat Diamond ${dud}`, 'status@broadcast')
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Diamond Kedalam Database`, 'status@broadcast')
                       
break
                case 'peti':
                            let ded = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let ahoy = `Cheat Peti ${ded}`.trim()
                            global.db.data.users[who].peti += count * 1
                            conn.reply(m.chat, ahoy, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Peti Kedalam Database`, '0@s.whatsapp.net', `Cheat Peti ${ded}`, 'status@broadcast')
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Peti Kedalam Database`, 'status@broadcast')
                       
break
                case 'legendary':
                            let pup = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let aqua = `Cheat Legendary Crate ${pup}`.trim()
                            global.db.data.users[who].legendary += count * 1
                            conn.reply(m.chat, aqua, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Legendary Crate Kedalam Database`, '0@s.whatsapp.net', `Cheat Legendary Crate ${pup}`, 'status@broadcast')
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Legendary Crate Kedalam Database`, 'status@broadcast')
                       
break
                case 'mythic':
                            let bub = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let wibu = `Cheat Mythic Crate ${bub}`.trim()
                            global.db.data.users[who].mythic += count * 1
                            conn.reply(m.chat, wibu, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Mythic Crate Kedalam Database`, '0@s.whatsapp.net', `Cheat Mythic Crate ${bub}`, 'status@broadcast')
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Mythic Crate Kedalam Database`, 'status@broadcast')
                       
break
                case 'healt':
                            let bob = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let baka = `Cheat Nyawa ${bob}`.trim()
                            global.db.data.users[who].healt += count * 1
                            conn.reply(m.chat, baka, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Healt Kedalam Database`, '0@s.whatsapp.net', `Cheat Nyawa ${bob}`, 'status@broadcast')
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Healt Kedalam Database`, 'status@broadcast')
                       
break
                case 'stamina':
                            let bib = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let tekk = `Cheat Stamina ${bib}`.trim()
                            global.db.data.users[who].stamina += count * 1
                            conn.reply(m.chat, tekk, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Stamina Kedalam Database`, '0@s.whatsapp.net', `Cheat Stamina ${bib}`, 'status@broadcast')
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Stamina Kedalam Database`, 'status@broadcast')
                       
break
                case 'durability':
                            let beb = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let jck = `Cheat Durability ${beb}`.trim()
                            global.db.data.users[who].durability += count * 1
                            conn.reply(m.chat, jck, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Durability Kedalam Database`, '0@s.whatsapp.net', `Cheat Durability ${beb}`, 'status@broadcast')
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Durability Kedalam Database`, 'status@broadcast')
                       
break
                case 'magazine':
                            let asu = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let vavi = `Cheat Magazine ${beb}`.trim()
                            global.db.data.users[who].magazine += count * 1
                            conn.reply(m.chat, vavi, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Magazine Kedalam Database`, '0@s.whatsapp.net', `Cheat Magazine ${beb}`, 'status@broadcast')
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `Menambahkan ${count * 1} Magazine Kedalam Database`, 'status@broadcast')
                       
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

handler.register = false
handler.command = /^(cheat|cit)$/i
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
