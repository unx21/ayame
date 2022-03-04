let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) conn.sendButton(m.chat,  `Tidak ada voting yang berlangsung digrup ini!`, '© 百鬼あやめ', 'Mulai', `${usedPrefix}mulaivote`, m)

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    let caption = `
*「 VOTE 」*

*Alasan:* ${reason}

*UPVOTE*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*DEVOTE*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}
`.trim()
conn.send3Button(m.chat, caption, '© 百鬼あやめ', 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, 'Hapus', `${usedPrefix}hapusvote`, m, { contextInfo: { mentionedJid } })
}
//handler.help = ['cekvote']
//handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.register = false

handler.group = true
module.exports = handler
