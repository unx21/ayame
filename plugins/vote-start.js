let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        conn.send2Button(m.chat, `Masih ada vote yang berlangsung di chat ini!`, '© 百鬼あやめ', 'Cek', `${usedPrefix}cekvote`, 'Hapus', `${usedPrefix}hapusvote`, m)
    }
    conn.send2Button(m.chat, `Vote dimulai!\n\n*${usedPrefix}upvote* - untuk ya\n*${usedPrefix}devote* - untuk tidak`, '© 百鬼あやめ', 'Upvote', `${usedPrefix}upvote`, 'Devote', `${usedPrefix}devote`, m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
//handler.help = ['mulaivote [alasan]']
//handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.register = false
handler.group = true
handler.admin = true

module.exports = handler
