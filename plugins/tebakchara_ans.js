let handler = m => m

handler.before = async function (m) {

  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Tebak Chara Anime 」/i.test(m.quoted.text)) return
  conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
  if (!(id in conn.tebakanime)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.tebakanime[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tebakanime[id][1]))
    if (m.text.toLowerCase() == json.name.toLowerCase()) {
      global.db.data.users[m.sender].uang += conn.tebakanime[id][2]
      m.reply(`*Benar!*\n+${conn.tebakanime[id][2]}`)
      clearTimeout(conn.tebakanime[id][3])
      delete conn.tebakanime[id]
    } else if (m.text.toLowerCase().endsWith(json.name.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler
