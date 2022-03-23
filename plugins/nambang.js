let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timer = (new Date - global.db.data.users[m.sender].lastnambang)
        let _timer = (300000 - __timer)
        let timer = clockString(_timer)
        
        
        if (global.db.data.users[m.sender].healt > 99) {
            if (new Date - global.db.data.users[m.sender].lastnambang > 300000) {
            let healt = (pickRandom(['100', '99', '98', '97', '96', '95']))
            let exp = `${Math.floor(Math.random() * 750)}`.trim()
            let iron = `${Math.floor(Math.random() * 20)}`.trim()
            let _gold = `${pickRandom(['1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1'])}`
            let gold = (_gold * 1)
            let _peti = `${pickRandom(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'])}`
            let peti = (_peti * 1)
            let str = `
Nyawamu berkurang *-${healt * 1}* karena pergi ${pickRandom(['nambang','menambang','bertambang'])}

Resource yang berhasil di bawa pulang

*Iron: ${iron}*
*Gold: ${gold}*

*Bonus:  🔗 ${exp} Exp*
`.trim()
            conn.reply(m.chat, str, m)
            if (peti > 0) {
                global.db.data.users[m.sender].peti += peti * 1
                conn.reply(m.chat, 'Anda berhasil mendapatkan Resource Langka yaitu\n *' + peti + ' Peti*', m)
            }
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].iron += iron * 1
            global.db.data.users[m.sender].gold += gold * 1
            global.db.data.users[m.sender].lastnambang = new Date * 1
            } else conn.reply(m.chat, `Anda kelelahan karena pergi ${pickRandom(['nambang','menambang','bertambang'])}, silahkan tunggu *${timer}* lagi`, m)
        } else conn.reply(m.chat, 'Dibutuhkan 100 nyawa untuk pergi, isi nyawamu terlebih dahulu dengan meminum potion', m)
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
handler.command = /^(nambang|bertambamg|tambang|menambang)$/i
handler.register = false

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
