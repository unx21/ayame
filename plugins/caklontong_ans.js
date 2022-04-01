//by BochilGaming
//https://github.com/BochilGaming/

let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Cak Lontong 」/i.test(m.quoted.text)) return
  conn.caklontong = conn.caklontong ? conn.caklontong : {}
  if (!(id in conn.caklontong)) throw 'Soal itu telah berakhir!'
  if (m.quoted.id == conn.caklontong[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.db.data.users[m.sender].uang += conn.caklontong[id][2]
      m.reply(`*Benar!*\n+Rp${conn.caklontong[id][2]}`)
      clearTimeout(conn.caklontong[id][3])
      delete conn.caklontong[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler
