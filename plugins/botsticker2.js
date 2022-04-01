let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/geh.webp'
conn.sendFile(m.chat, sticker, 'geh.webp', null, m, {
type: 'stickerMessage', sticker: true })
}
handler.customPrefix = /G(a|e)y/
handler.command = new RegExp
module.exports = handler
