// Made With 💙 by unx and Jauhari //

let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Tes Otak 」/i.test(m.quoted.text)) return
  conn.tesotak = conn.tesotak ? conn.tesotak : {}
  if (!(id in conn.tesotak)) throw 'Soal itu telah berakhir!'
  if (m.quoted.id == conn.tesotak[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tesotak[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.db.data.users[m.sender].uang += conn.tesotak[id][2]
      m.reply(`*Benar!*\n+Rp${conn.tesotak[id][2]}`)
      clearTimeout(conn.tesotak[id][3])
      delete conn.tesotak[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler