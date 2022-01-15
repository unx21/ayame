const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply(global.wait)
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        let img = await res.buffer()
        await conn.sendButtonImg(m.chat, await(await fetch(img)).buffer(), 'Random Wallpaper', '© シエル', 'Next', m.text, m)
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
//handler.help = ['wallpaper','wp']
//handler.tags = ['weebs']
handler.command = /^(wallpaper|wp)$/i
handler.premium = true
handler.register = true

module.exports = handler
