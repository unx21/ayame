let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, '© 百鬼あやめ', 'Mulai', `${usedPrefix}mulaiabsen`, m)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'Kamu sudah absen!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}.  @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}
┌〔 daftar absen 〕
├ Total: ${absen.length}
${list}
└────`.trim()
    await conn.send3Button(m.chat, caption, '© 百鬼あやめ', 'Absen', `${usedPrefix}absen`, 'Cek', `${usedPrefix}cekabsen`, 'Hapus', `${usedPrefix}hapusabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
//handler.help = ['absen']
//handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i
handler.register = false

module.exports = handler
