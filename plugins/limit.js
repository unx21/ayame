let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`${global.db.data.users[who].limit} Limit Left ಥ_ಥ`)
}
handler.help = ['limit']
handler.tags = ['exp']
handler.command = /^(limit)$/i
handler.register = false

module.exports = handler
