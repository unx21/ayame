let handler = async (m, { text, args, participants }) => {
    if (args[0] < 0, args.length < 2) throw 'Example: #pick 15 gay'
    let users = participants.map(u => u.jid)
    m.reply(`*Berikut adalah orang-orang yang terpilih sebagai ${text}*
    
${new Array(Math.min(users.length, args[0])).fill().map(() => {
    let index = Math.floor(Math.random() * users.length)
    return `• @${users.splice(index, 1)}`
}).join`\n•`}`)
}
//handler.help = ['pick <jumlah> <teks>']
handler.command = /^pick/i
handler.register = false

module.exports = handler
