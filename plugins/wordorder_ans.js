// Made With 💙 by unx //

let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Word Order 」/i.test(m.quoted.text)) return
  conn.wordorder = conn.wordorder ? conn.wordorder : {}
  if (!(id in conn.wordorder)) throw 'The question is over!'
  if (m.quoted.id == conn.wordorder[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.wordorder[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.db.data.users[m.sender].uang += conn.wordorder[id][2]
      m.reply(`*Correct!*\n+Rp${conn.wordorder[id][2]}`)
      clearTimeout(conn.wordorder[id][3])
      delete conn.wordorder[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Little more!*`)
    else m.reply(`*Wrong!*`)
  }
}
handler.exp = 0

module.exports = handler