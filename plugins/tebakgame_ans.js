let handler = m => m

handler.before = async function (m) {

  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Tebak Game 」/i.test(m.quoted.text)) return
  conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
  if (!(id in conn.tebakgame)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.tebakgame[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tebakgame[id][1]))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.db.data.users[m.sender].uang += conn.tebakgame[id][2]
      m.reply(`*Benar!*\n+Rp${conn.tebakgame[id][2]}`)
      clearTimeout(conn.tebakgame[id][3])
      delete conn.tebakgame[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler
