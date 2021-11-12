let handler = async (m, { conn }) => {
    conn.tebakjudulanim = conn.tebakjudulanim ? conn.tebakjudulanim : {}
    let id = m.chat
    if (!(id in conn.tebakjudulanim)) throw false
    let json = conn.tebakjudulanim[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^tahint$/i
handler.limit = true
module.exports = handler
