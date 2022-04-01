let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let stk = './src/sticker/shegs.webp'
let sticker = './src/sticker/segs.webp'
conn.sendFile(m.chat, stk, 'shegs.webp', null, m, {
type: 'stickerMessage', sticker: true })
conn.sendFile(m.chat, sticker, 'segs.webp', null, m, {
type: 'stickerMessage', sticker: true })
}
handler.customPrefix = /(Seeeggggsss)/
handler.command = new RegExp
module.exports = handler
