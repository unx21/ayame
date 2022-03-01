let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let stk = './src/sticker/teme.webp'
let stik = './src/sticker/deme.webp'
conn.sendFile(m.chat, stk, 'teme.webp', null, m, {
type: 'stickerMessage', sticker: true })
conn.sendFile(m.chat, stik, 'deme.webp', null, m, {
type: 'stickerMessage', sticker: true })
}
handler.customPrefix = /(T|t)emee/
handler.command = new RegExp
module.exports = handler
