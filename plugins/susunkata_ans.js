let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Susun Kata 」/i.test(m.quoted.text)) return !0
  conn.susunkata = conn.susunkata ? conn.susunkata : {}
  if (!(id in conn.susunkata)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.susunkata[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].uang += conn.susunkata[id][2]
      m.reply(`*Benar!*\n+Rp${conn.susunkata[id][2]}`)
      clearTimeout(conn.susunkata[id][3])
      delete conn.susunkata[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
