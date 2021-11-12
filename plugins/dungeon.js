let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastdungeon)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        
        
        if (global.db.data.users[m.sender].durability > 19) {
        if (global.db.data.users[m.sender].healt > 89) {
            if (new Date - global.db.data.users[m.sender].lastdungeon > 300000) {
            let healt = (pickRandom(['100', '99', '100', '97', '100', '98', '100', '96', '100', '95', '100', '94', '100', '93', '100', '92', '100', '91', '100', '90', '100']))
            let durability = (pickRandom(['15', '14', '13', '12', '11', '10', '9', '8', '7']))
            let koin = `${Math.floor(Math.random() * 350)}`.trim() 
            let lantai = `${Math.floor(Math.random() * 99)}`.trim()
            let slime = `${Math.floor(Math.random() * 10)}`.trim() 
            let sprtgrass = `${Math.floor(Math.random() * 5)}`.trim() 
            let mdgrleaf = `${Math.floor(Math.random() * 5)}`.trim() 
            let hpktplant = `${Math.floor(Math.random() * 5)}`.trim() 
            let kayu = `${Math.floor(Math.random() * 20)}`.trim() 
            let _skeleton = `${pickRandom(['1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])}`
            let skeleton = (_skeleton * 1)
            let goblin = `${Math.floor(Math.random() * 7)}`.trim() 
            let _wolf = `${pickRandom(['1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])}`
            let wolf = (_wolf * 1)
            let sampah = `${Math.floor(Math.random() * 100)}`.trim()
            let str = `
Kamu memasuki dungeon hingga lantai ${lantai}\nNyawamu berkurang -${healt * 1} dan Durability berkurang -${durability * 1} setelah masuk dungeon dan mendapatkan

*「 REWARD 」*

🪙 *Koin: ${koin}*
👾 *Slime: ${slime}*
🌿 *Spirit Grass: ${sprtgrass}*
🍂 *Mandragora Leaf: ${mdgrleaf}*
🌱 *Hipokute Plant: ${hpktplant}*
🪵 *Kayu: ${kayu}*
♻️ *Sampah: ${sampah}*
`.trim()
            conn.reply(m.chat, str, m)
            if (goblin > 0) {
                global.db.data.users[m.sender].goblin += goblin * 1
                conn.reply(m.chat, 'Anda Berhasil Membunuh *_' + goblin + ' Goblin_*', m)
            }
            if (skeleton > 0) {
                   global.db.data.users[m.sender].skeleton += skeleton * 1
                   conn.reply(m.chat, 'Anda Berhasil Membunuh *_' + skeleton + ' Skeleton_* 💀', m)
            }
            if (wolf > 0) {
                global.db.data.users[m.sender].wolf += wolf * 1
                conn.reply(m.chat, 'Anda Berhasil Membunuh *_' + wolf + ' Wolf_* 🐺', m)
            }
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].durability -= durability * 1
            global.db.data.users[m.sender].koin += koin * 1
            global.db.data.users[m.sender].kayu += kayu * 1
            global.db.data.users[m.sender].slime += slime * 1
            global.db.data.users[m.sender].sprtgrass += sprtgrass * 1
            global.db.data.users[m.sender].mdgrleaf += mdgrleaf * 1
            global.db.data.users[m.sender].hpktplant += hpktplant * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].lastdungeon = new Date * 1
            } else conn.reply(m.chat, `Memasuki dungeon membuat anda lelah, silahkan coba *${timers}* lagi`, m)
        } else conn.reply(m.chat, 'Minimal 90 health untuk bisa masuk Dungeon lagi, Silahkan racik potion terlebih dahulu', m)
      } else conn.reply(m.chat, 'Kamu perlu 20 durability untuk dapat masuk dungeon', m)
      if (global.db.data.users[m.sender].healt < 0) {   // Jika healt user kurang dari 0, maka level dan exp akan di kurangi sebagaimana mestinya  :v
        	let exp = `${Math.floor(Math.random() * 1000)}`.trim()
            let _level = `${pickRandom(['1', '1', '1', '1', '1'])}`
            let level = (_level * 1)
            let uhu = `Kamu mati dibunuh oleh ${pickRandom(['slime', 'goblin', 'skeleton', 'wolf'])}\nlevel turun ${level * 1} dan exp berkurang ${exp} XP`.trim()
            conn.reply(m.chat, uhu, m)
            global.db.data.users[m.sender].exp -= exp * 1
            global.db.data.users[m.sender].level -= level * 1
            }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.command = /^dungeon$/i
handler.register = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}