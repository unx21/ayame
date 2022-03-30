let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command}) => {
	await m.reply(global.wait)
  try {
  let res = await fetch('https://some-random-api.ml/animu/'+command)
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
handler.help = ['facepalm', 'hug', 'pat', 'wink']
handler.tags = ['eks']
handler.command = /^(pat|hug|wink|facepalm)/i
handler.register = false
handler.limit = 1

module.exports = handler
