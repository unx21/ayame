let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command}) => {
	await m.reply(global.wait)
  try {
  let res = await fetch('https://neko-love.xyz/api/v1/'+command)
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, command.charAt(0).toUpperCase() + command.slice(1), global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}

handler.command = /^(slap|smug|punch|kitsune)/i
handler.register = true
handler.limit = true

module.exports = handler
