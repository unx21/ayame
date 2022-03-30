let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/sound/daisuki.mp3'
conn.sendFile(m.chat, vn, 'daisuki.mp3', null, m, {
type: 'audioMessage', ptt: true })
}
handler.customPrefix = /(D|d)aisuki/
handler.command = new RegExp
module.exports = handler
