let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  await m.reply(global.wait)
  try {
  let res = await fetch('https://neko-love.xyz/api/v1/neko')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Nyaa~', global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.command = /^nyan/i
handler.register = false
handler.limit = 1

module.exports = handler
