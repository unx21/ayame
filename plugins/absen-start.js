let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.send2Button(m.chat, `Masih ada absen di chat ini!`, '© 百鬼あやめ', 'Hapus', `${usedPrefix}hapusabsen`, 'Cek', `${usedPrefix}cekabsen`, m)
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Absen dimulai`, '© 百鬼あやめ', 'Absen', `${usedPrefix}absen`, m),
        [],
        text
    ]
}
//handler.help = ['mulaiabsen [teks]']
//handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.admin = true
handler.register = false

module.exports = handler
