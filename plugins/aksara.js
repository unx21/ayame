let fetch = require('node-fetch')

let handler = async (m, { args, usedPrefix, command }) => {
    let er = `Opsi tersedia:
• latinkejawa
• latinkesunda
• jawakelatin
• sundakelatin

Contoh penggunaan:
${usedPrefix + command} latinkejawa selamat pagi
    `.trim()
    if (!args[0]) throw er
    await m.reply(global.wait)
    switch (args[0].toLowerCase()) {
        case 'latinkejawa':
        case 'latinkesunda':
        case 'jawakelatin':
        case 'sundakelatin':
            let text = args.slice(1).join(' ')
            let res = await fetch(global.API('xteam', '/aksara/' + args[0].toLowerCase(), { text }, 'APIKEY'))
            if (!res.ok) throw await res.text()
            let json = await res.json()
            if (!json.status) throw json
            m.reply(json.message)
            break
        default:
            throw er
    }
}
//handler.help = ['aksara'].map(v => v + ' <opsi> <teks>')
//handler.tags = ['tools']
handler.command = /^aksara$/i
handler.register = false

handler.limit = true

module.exports = handler
