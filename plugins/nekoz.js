let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
	awaut m.reply(global.wait)
  try {
  let res = await fetch('https://api.waifu.pics/sfw/awoo')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Neko', global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}

handler.command = /^nekoz/i
handler.register = true
handler.limit = true

module.exports = handler
