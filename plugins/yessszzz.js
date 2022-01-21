let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
await m.reply(global.wait)
let res = await fetch('https://raw.githubusercontent.com/unx21/ayame/zx/src/wallpaper.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
await conn.sendButtonImg(m.chat, await(await fetch(cita)).buffer(), `Enjoy These High Quality Wallpapers`, '© 赤井はあと', 'NEXT', m.text, m)
}

handler.help = ['random', 'wpo', 'wpp', 'wphd']
handler.tags = ['OWNER ONLY']
handler.command = /^random|wpo|wpp|wphd$/i
handler.limit = false
handler.owner = true
handler.register = true

module.exports = handler

//Made with 💙 by unx//

module.exports = handler
