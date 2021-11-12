let fs = require('fs')
let handler = async (m, { conn, args, usedPrefix, command }) => {

    const json = JSON.parse(fs.readFileSync('./src/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    if (!args[0] || isNaN(args[0])) throw `Masukan angka mewakili jumlah hari!\n\ncontoh:\n${usedPrefix + command} 30`
    if (now < global.db.data.users[who].premdate) global.db.data.users[who].premdate += jumlahHari
    else global.db.data.users[who].premdate = now + jumlahHari
    if (json.includes(who.split`@`[0])) throw `${conn.getName(who)} sudah premium!`
    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./src/premium.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} sekarang premium selama ${args[0]} hari.\n\nHitung Mundur : ${msToDate(global.db.data.users[who].premdate - now)}`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
//handler.help = ['addprem [@user]']
//handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i

handler.owner = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}