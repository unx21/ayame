let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    await m.reply(global.wait)
    let res = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
  let json = await res.json()
  let { 
    Tanggal,
    Jam,
    DateTime,
    Coordinates,
    Lintang,
    Bujur,
    Magnitude,
    Kedalaman,
    Wilayah,
    Potensi,
    Dirasakan,
    Shakemap
  } = json.Infogempa.gempa
     let hasil = `
*「 INFO GEMPA 」*

*Waktu:* ${Tanggal}, ${Jam}
*Magnitudo:* ${Magnitude}
*Kedalaman:* ${Kedalaman}
*Koordinat:* ${Coordinates}
*Lintang:* ${Lintang}
*Bujur:* ${Bujur}
*Lokasi:* ${Wilayah}
*Dirasakan:* ${Dirasakan}
*Potensi:* ${Potensi}
     `.trim()
     let map = 'https://data.bmkg.go.id/DataMKG/TEWS/'+Shakemap
     if (map) conn.sendFile(m.chat, map, 'map.jpg', hasil, m)
     else m.reply(hasil)
}
//handler.help = ['infogempa']
//handler.tags = ['internet']
handler.command = /^(infogempa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler