let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/bonk')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Bonks', global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['bonks <teks>']
handler.tags = ['eks']
handler.command = /^bonks/i
handler.register = false
handler.limit = 1

module.exports = handler
