let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
await m.reply(global.wait)
let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/hololive2.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
await conn.sendButtonImg(m.chat, await(await fetch(cita)).buffer(), `Random Images of Hololive Girls`, '© 赤井はあと', 'N e x t', m.text, m)
}

//handler.help = ['holo', 'vtuber', 'wvtuber']
//handler.tags = ['FREE']
handler.command = /^holo|vtuber|wvtuber$/i
handler.limit = 30
handler.owner = false
handler.register = true

module.exports = handler

//Made with 💙 by unx//

module.exports = handler
