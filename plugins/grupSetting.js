let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
  let pac =  `
*Format salah! Contoh :*

  *○ ${usedPrefix + command} setting admin*
  *○ ${usedPrefix + command} chat open*
`.trim()
	let isGc = { // Switch Case Like :v
		'setting': GroupSettingChange.settingsChange,
		'chat': GroupSettingChange.messageSend,
	}[(args[0] || '')]
	let isClose = { // Switch Case Like :v
		'open': false,
		'member': false,
		'close': true,
		'admin': true,
	}[(args[1] || '')]
	await conn.updatePresence(m.chat, Presence.composing)
	if (isGc === undefined)
		throw pac
	if (isClose === undefined)
		throw pac
	await conn.groupSettingChange(m.chat, isGc, isClose)
}
//handler.help = ['group *open / close*']
//handler.tags = ['group']
handler.command = /^(gro?up)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
