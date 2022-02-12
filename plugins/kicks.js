let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/kick')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Kicks', global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.command = /^kicks/i
handler.register = false
handler.limit = true

module.exports = handler
