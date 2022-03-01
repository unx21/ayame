let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/sound/bruh.mp3'
conn.sendFile(m.chat, vn, 'bruh.mp3', null, m, {
type: 'audioMessage', ptt: true })
}
handler.customPrefix = /(B|b)ruh|(B|b)ruhh/
handler.command = new RegExp
module.exports = handler
