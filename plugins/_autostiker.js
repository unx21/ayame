const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = m => m

handler.before = async function (m) {
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    if (chat.stiker && !user.banned && !chat.isBanned && !m.fromMe && !m.isBaileys) {
        // try {
        if (/^.*s(tic?ker)?(gif)?(wm)?$/i.test(m.text)) return
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (/webp|image/g.test(mime)) {
            let img = await q.download()
            if (!img) return
            stiker = await sticker(false, out, global.packname, global.author)
        } else if (/video/.test(mime)) {
            if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
            let img = await q.download()
            if (!img) return
            stiker = await sticker(false, out, global.packname, global.author)
        } else if (m.text.split` `[0]) {
            if (isUrl(m.text.split` `[0])) stiker = await sticker(false, m.text.split` `[0], global.packname, global.author)
            else return
        }
        if (stiker) await this.sendMessage(m.chat, stiker, 'stickerMessage', {
            quoted: m
        })
        // } finally {
        //     if (stiker) {
        //     }
        // }
    }
    return true
}
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
