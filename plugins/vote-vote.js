let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) conn.sendButton(m.chat, `Tidak ada voting yang berlangsung di grup ini`, '© 百鬼あやめ', 'Mulai', `${usedPrefix}mulaivote`, m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    conn.sendButton(m.chat, `Done!`, '© 百鬼あやめ', 'Cek Vote', `${usedPrefix}cekvote`, m)
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
`.trim(), 
await conn.send3Button(m.chat, caption, '© 百鬼あやめ', 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, 'Hapus', `${usedPrefix}hapusvote`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
//handler.help = ['upvote', 'devote']
//handler.tags = ['vote']
handler.command = /^(up|de)vote$/i
handler.register = false

handler.group = true
module.exports = handler
