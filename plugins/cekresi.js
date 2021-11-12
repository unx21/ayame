let fetch = require("node-fetch")

let handler = async (m, { conn, text}) => {
  let [text1,text2] = text.split('|')
  if (!text1) throw 'Masukkan nama jasa pengiriman!'
  if (!text2) throw 'Masukkan resi pengiriman!'
  await m.reply(global.wait)
  let res = await fetch(`https://docs-jojo.herokuapp.com/api/cek-resi?kurir=${text1}&resi=${text2}`)
  let Res = await res.json()
let {
  code,
  status,
  date_shipment,
  date_received,
  receiver,
  current_position,
  history,
  kurir
} = Res.data.detail
let Resi = JSON.stringify(Res)
    let json = JSON.parse(Resi)
    let sejarah = json.data.detail.history.map((v, i) => `Time: ${v.time}\nPosition: ${v.position}\nDescription: ${v.desc}`).join('\n\n')

let isi = `
*Resi ${kurir} ${code}*

Status: *${status}*
Tanggal Pengiriman: ${date_shipment}
Tanggal Diterima: ${date_received}
Diterima Oleh: ${receiver}
Posisi Saat Ini: ${current_position} 

*History:*
${sejarah}
`.trim()

await conn.reply(m.chat, isi, m)
}

handler.command = /^cekresi$/i
handler.register = true
handler.limit = true
module.exports = handler