let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) conn.sendButton(m.chat, `Tidak ada voting yang berlangsung digrup ini!`, '© 百鬼あやめ', 'Mulai', `${usedPrefix}mulaivote`, m)
    delete conn.vote[id]
    m.reply(`Done!`)

}
//handler.help = ['hapusvote']
//handler.tags = ['vote']
handler.command = /^(delete|hapus)vote$/i
handler.register = false

handler.group = true
handler.admin = true
module.exports = handler
