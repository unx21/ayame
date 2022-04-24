let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let stk = './src/sticker/saus.webp'
conn.sendFile(m.chat, stk, 'saus.webp', null, m, {
type: 'stickerMessage', sticker: true })
}
handler.customPrefix = /(S|s)au(s|ce)|(S|s)ource/
handler.command = new RegExp
module.exports = handler
