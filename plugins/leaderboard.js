let handler = async (m, { conn, args }) => {
  let sortedUang = Object.entries(global.db.data.users).sort((a, b) => b[1].uang - a[1].uang)
  let sortedKoin = Object.entries(global.db.data.users).sort((a, b) => b[1].koin - a[1].koin)
  let sortedExp = Object.entries(global.db.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.db.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedLev = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
  let sortedRole = Object.entries(global.db.data.users).sort((a, b) => b[1].role - a[1].role)
  let usersUang = sortedUang.map(v => v[0])
  let usersKoin = sortedKoin.map(v => v[0])
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersLev = sortedLev.map(v => v[0])
  let usersRole = sortedRole.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(3, sortedExp.length)
  let text = `
• *Saldo Leaderboard Top ${len}* •
Kamu: *${usersUang.indexOf(m.sender) + 1}* dari *${usersUang.length}*

${sortedUang.slice(0, len).map(([user, data], i) => (i + 1) + '. ' + conn.getName(user) + ': *Rp' + data.uang + '*').join`\n`}

• *Koin Leaderboard Top ${len}* •
Kamu: *${usersKoin.indexOf(m.sender) + 1}* dari *${usersKoin.length}*

${sortedKoin.slice(0, len).map(([user, data], i) => (i + 1) + '. ' + conn.getName(user) + ': *' + data.koin + '*').join`\n`}

• *XP Leaderboard Top ${len}* •
Kamu: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*

${sortedExp.slice(0, len).map(([user, data], i) => (i + 1) + '. ' + conn.getName(user) + ': *' + data.exp + ' Exp*').join`\n`}

• *Limit Leaderboard Top ${len}* •
Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*

${sortedLim.slice(0, len).map(([user, data], i) => (i + 1) + '. ' + conn.getName(user) + ': *' + data.limit + ' Limit*').join`\n`}

• *Level Leaderboard Top ${len}* •
Kamu: *${usersLev.indexOf(m.sender) + 1}* dari *${usersLev.length}*

${sortedLev.slice(0, len).map(([user, data], i) => (i + 1) + '. ' + conn.getName(user) + ': *' + data.level + ' Level*').join`\n`}

• *Rank Leaderboard Top ${len}* •
Kamu: *${usersRole.indexOf(m.sender) + 1}* dari *${usersRole.length}*

${sortedRole.slice(0, len).map(([user, data], i) => (i + 1) + '. ' + conn.getName(user) + ': *' + data.role + ' Role*').join`\n`}
`.trim()
  conn.reply(m.chat, text, m) /*, {
    contextInfo: {
      mentionedJid: [...usersUang.slice(0, len), ...usersKoin.slice(0, len), ...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLev.slice(0, len)]
    }
  })*/
}
handler.command = /^(leaderboard|lb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
