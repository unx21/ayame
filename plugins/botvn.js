let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/sound/baka.mp3'
conn.sendFile(m.chat, vn, 'baka.mp3', null, m, {
type: 'audioMessage', ptt: true })
}
handler.customPrefix = /(B|b)aka/
handler.command = new RegExp
module.exports = handler
