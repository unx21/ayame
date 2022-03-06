let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^hint$/i
handler.limit = 1
module.exports = handler
