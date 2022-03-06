let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Asah Otak 」/i.test(m.quoted.text)) return !0
  conn.asahotak = conn.asahotak ? conn.asahotak : {}
  if (!(id in conn.asahotak)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.asahotak[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.asahotak[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].uang += conn.asahotak[id][2]
      await this.sendButton(m.chat, `*Benar!*\n+Rp${conn.asahotak[id][2]}`, '© 百鬼あやめ', 'A s a h   O t a k', '#asahotak', m)
      clearTimeout(conn.asahotak[id][3])
      delete conn.asahotak[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
