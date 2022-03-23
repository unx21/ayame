let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
await m.reply(global.wait)
let res = await fetch('https://raw.githubusercontent.com/unx21/ayame/zx/src/wallpaper.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
await conn.sendButtonImg(m.chat, await(await fetch(cita)).buffer(), `Enjoy These High Quality Wallpapers`, '© 赤井はあと', 'N e x t', m.text, m)
}

handler.help = ['wpp', 'wphd']
handler.tags = ['OWNER ONLY']
handler.command = /^wp(p|hd)$/i
handler.limit = false
handler.rowner = true
handler.register = false

module.exports = handler

//Made with 💙 by unx//

module.exports = handler
