let handler = async (m, { conn }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (!(id in conn.tebaktebakan)) throw false
    let json = conn.tebaktebakan[id][1]
    let nya = json.result.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^tthint$/i
handler.limit = 1
module.exports = handler
