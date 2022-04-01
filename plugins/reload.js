let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
    try {
        let msgkurang = (pickRandom(['Peluru tidak cukup', 'ciaa gk cukup peluru nya :v', 'wtf gk cukup :v', 'tempa Magic Stone dulu biar dapet peluru, peluru gk cukup', 'Duaarr peluru gk cukup', 'eyyyy peluru mu kurang', 'lah, masak mau ngereload tapi gk ada peluru nya :v']))
        let msgpenuh = (pickRandom(['Magazine sudah penuh', 'coba deh liat inv mu, Magazine kan dah penuh ngapain ngereload lagi?', 'Magazine mu dah penuh woyy', 'yee si ajg', 'Magazine dah penuh :v', 'udh weh, udh penuh']))
        let magazine = global.db.data.users[m.sender].magazine
        if (/isi/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((12 - global.db.data.users[m.sender].magazine))), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((12 - global.db.data.users[m.sender].magazine))), 1)
                 let msgsucces = (pickRandom(['Berhasil mengisi']) + ' *' + (count * 1) + '* Peluru')
                 if (args[0] === 'peluru') {
                    if (global.db.data.users[m.sender].magazine < 12) {
                        if (global.db.data.users[m.sender].peluru >= count * 1) {
                            global.db.data.users[m.sender].peluru -= count * 1
                            global.db.data.users[m.sender].magazine += magazine * count
                            conn.reply(m.chat, msgsucces, m)
                        } else conn.reply(m.chat, msgkurang, m)
                    } else conn.reply(m.chat, msgpenuh, m)
                } else if (args.length > 2 && args[0] === !'peluru') m.reply(pickRandom(['Hanya bisa menggunakan peluru', 'Mau ngunain apa? Cuma bisa gunain peluru :v', 'Wih mau gunain apa kamu, kan hanya bisa peluru', 'Waduheck, hanya bisa peluru', 'lah, mau gunain apa?, kan hanya bisa peluru']) + '\nContoh penggunaan: *' + usedPrefix + 'peluru 1*')
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        } else if (/reload/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((12 - global.db.data.users[m.sender].magazine))), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((12 - global.db.data.users[m.sender].magazine))), 1)
                let msgsucces = (pickRandom(['success mereload', 'Nice succes mereload', 'berhasil mereload ', 'mereload', 'anda mereload', 'Anda mereload']) + ' *' + (count * 1) + '* Peluru')
                if (global.db.data.users[m.sender].magazine < 12) {
                    if (global.db.data.users[m.sender].peluru >= count * 1) {
                        global.db.data.users[m.sender].peluru -= count * 1
                        global.db.data.users[m.sender].magazine += magazine * count
                        conn.reply(m.chat, msgsucces, m)
                    } else conn.reply(m.chat, msgkurang, m)
                } else conn.reply(m.chat, msgpenuh, m)
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, msgerror, m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['reload', 'isi <peluru> <jumlah>']
handler.tags = ['rpg']
handler.command = /^(isi|reload)$/i
handler.register = false

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
