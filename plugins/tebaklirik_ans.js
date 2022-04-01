//Thanks To BochilGaming//

let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Tebak Lirik 」/i.test(m.quoted.text)) return
  conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
  if (!(id in conn.tebaklirik)) throw 'Soal itu telah berakhir!'
  if (m.quoted.id == conn.tebaklirik[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.db.data.users[m.sender].uang += conn.tebaklirik[id][2]
      m.reply(`*Benar!*\n+Rp${conn.tebaklirik[id][2]}`)
      clearTimeout(conn.tebaklirik[id][3])
      delete conn.tebaklirik[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler
