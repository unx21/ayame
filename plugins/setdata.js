let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, isOwner, DevMode }) => {
    if (!isOwner) throw false
	let type = (args[0] || '').toLowerCase()
    let cht = (args[0] || '').toLowerCase()
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    let cok = `
*[ LIST ]*

• Uang\n• Level\n• Limit\n• Koin\n• Diamond\n• Peti\n• Legendary\n• Mythic\n• Healt\n• Stamina\n• Durability\n• Magazine
`.trim()
try {
       if (/set|setdata/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'uang':
                            let dod = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let bcd = `${dod} Menetapkan Data Uang Menjadi Rp${count * 1}`.trim()
                            global.db.data.users[who].uang = count * 1
                            conn.reply(m.chat, bcd, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${dod} Menetapkan Data Uang Menjadi Rp${count * 1}`, 'status@broadcast')
break
                case 'level':
                            let eek = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let uek = `${eek} Menetapkan Data Level Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].level = count * 1
                            conn.reply(m.chat, uek, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${eek} Menetapkan Data Level Menjadi ${count * 1}`, 'status@broadcast')
break
                case 'limit':
                            let eci = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let cui = `${eci} Menetapkan Data Limit Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].limit = count * 1
                            conn.reply(m.chat, cui, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${eci} Menetapkan Data Limit Menjadi ${count * 1}`, 'status@broadcast')
break
                case 'koin':
                            let did = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let ahh = `${did} Menetapkan Data Koin Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].koin = count * 1
                            conn.reply(m.chat, ahh, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat, `Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${did} Menetapkan Data Koin Menjadi ${count * 1}`, 'status@broadcast')
break
                case 'diamond':
                            let dud = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let uhh = `${dud} Menetapkan Data Diamond Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].diamond = count * 1
                            conn.reply(m.chat, uhh, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${dud} Menetapkan Data Diamond Menjadi ${count * 1}`, 'status@broadcast')
                       
break
                case 'peti':
                            let ded = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let ahoy = `${ded} Menetapkan Data Peti Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].peti = count * 1
                            conn.reply(m.chat, ahoy, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${ded} Menetapkan Data Peti Menjadi ${count * 1}`, 'status@broadcast')
                       
break
                case 'legendary':
                            let pup = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let aqua = `${pup} Menetapkan Data Legendary Cate Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].legendary = count * 1
                            conn.reply(m.chat, aqua, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${pup} Menetapkan Data Legendary Cate Menjadi ${count * 1}`, 'status@broadcast')
                       
break
                case 'mythic':
                            let bub = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let wibu = `${bub} Menetapkan Data Mythic Crate Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].mythic = count * 1
                            conn.reply(m.chat, wibu, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${bub} Menetapkan Data Mythic Crate Menjadi ${count * 1}`, 'status@broadcast')
                       
break
                case 'healt':
                            let bob = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let baka = `${bob} Menetapkan Data Healt Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].healt = count * 1
                            conn.reply(m.chat, baka, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${bob} Menetapkan Data Healt Menjadi ${count * 1}`, 'status@broadcast')
                       
break
                case 'stamina':
                            let bib = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let tekk = `${bib} Menetapkan Data Stamina Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].stamina = count * 1
                            conn.reply(m.chat, tekk, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${bib} Menetapkan Data Stamina Menjadi ${count * 1}`, 'status@broadcast')
                       
break
                case 'durability':
                            let beb = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let jck = `${beb} Menetapkan Data Durability Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].durability = count * 1
                            conn.reply(m.chat, jck, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${beb} Menetapkan Data Durability Menjadi ${count * 1}`, 'status@broadcast')
                       
break
                case 'magazine':
                            let asu = `${pickRandom(['Berhasil', 'Sukses'])}`.trim()
                            let vavi = `${beb} Menetapkan Data Magazine Menjadi ${count * 1}`.trim()
                            global.db.data.users[who].magazine = count * 1
                            conn.reply(m.chat, vavi, m, false, { contextInfo: { mentionedJid }})
                            conn.fakeReply(m.chat,`Database ${pickRandom(['Berhasil', 'Sukses'])} Diperbarui`, '0@s.whatsapp.net', `${asu} Menetapkan Data Magazine Menjadi ${count * 1}`, 'status@broadcast')
                       
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
                conn.sendMessage(jid, 'setdata.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.register = true
handler.command = /^(set|setdata)$/i
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
