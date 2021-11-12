const axios = require('axios')

let handler = async(m, { conn, text }) => {

    if (!text) throw '_Masukkan daerahmu!_'
    await m.reply(global.wait)
    new Promise((resolve, reject) => {
        axios.get('https://recoders-area.caliph.repl.co/api/cuaca?kota=' + encodeURIComponent(text))
            .then((res) => {

                let caption = `*「 Info Cuaca 」*\n\n*Lokasi:* ${res.data.respon.tempat}\n*Angin:* ${res.data.respon.angin}\n*Cuaca:* ${res.data.respon.cuaca}\n*Keterangan:* ${res.data.respon.deks}\n*Kelembapan:* ${res.data.respon.kelembapan}\n*Suhu:* ${res.data.respon.suhu}\n*Udara:* ${res.data.respon.udara}`
                conn.reply(m.chat, caption, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
//handler.help = ['infocuaca <nama kota>']
//handler.tags = ['internet']
handler.command = /^((info)?cuaca)$/i
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