let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let rck = (args[0] || '').toLowerCase()
  let spiritgrass = global.db.data.users[m.sender].spiritgrass
  let mandragoraleaf = global.db.data.users[m.sender].mandragoraleaf
  let hipokuteplant = global.db.data.users[m.sender].hipokuteplant
  let bruh = `
Tanaman Herbal yang bisa di racik

🌿 *spiritgrass*
🍂 *mandragoraleaf*
🌱 *hipokuteplant*


*[ Stok Tanaman Herbal Kamu ]*

🌿 spiritgrass  ${spiritgrass} tanaman
🍂 mandragoraleaf  ${mandragoraleaf} tanaman
🌱 hipokuteplant  ${hipokuteplant} tanaman


contoh:
*${usedPrefix + command } spiritgrass 1*
`.trim()
try {
       if (/racik/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'spiritgrass':
            if (global.db.data.users[m.sender].spiritgrass >= count * 1) {
                           global.db.data.users[m.sender].spiritgrass >= count * 1
                            global.db.data.users[m.sender].spiritgrass -= count * 1
                            global.db.data.users[m.sender].spotion += count * 1
                            conn.reply(m.chat, `${count} Spirit Grass diracik menjadi ${count} Small Potion`, m)
                       } else conn.reply(m.chat, `Tanaman herbal kamu tidak cukup`, m)
break
                  case 'mandragoraleaf':
            if (global.db.data.users[m.sender].mandragoraleaf >= count * 1) {
                            global.db.data.users[m.sender].mandragoraleaf >= count * 1
                            global.db.data.users[m.sender].mandragoraleaf -= count * 1
                            global.db.data.users[m.sender].mpotion += count * 1
                            conn.reply(m.chat, `${count} Mandragora Leaf diracik menjadi ${count} Medium Potion`, m)
                       } else conn.reply(m.chat, `Tanaman herbal kamu tidak cukup`, m)
break
                   case 'hipokuteplant':
            if (global.db.data.users[m.sender].hipokuteplant >= count * 1) {
                           global.db.data.users[m.sender].hipokuteplant >= count * 1
                            global.db.data.users[m.sender].hipokuteplant -= count * 1
                            global.db.data.users[m.sender].hpotion += count * 1
                            conn.reply(m.chat, `${count} Hipokute Plant diracik menjadi ${count} High Potion`, m)
                       } else m.reply('Tanaman herbal kamu tidak cukup')
            break
        default:
            return conn.reply(m.chat, bruh, m)
    }
  }} catch (e) {
      console.log(e)
      conn.reply(m.chat, `*${usedPrefix + command }spiritgrass 1*`, m)
      if (DevMode) {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.sendMessage(jid, 'racik.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
        }
    }
  }
}


handler.register = true
handler.command = /^(racik|meracik)$/i
module.exports = handler
