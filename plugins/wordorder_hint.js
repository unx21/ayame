let handler = async (m, { conn }) => {
    conn.wordorder = conn.wordorder ? conn.wordorder : {}
    let id = m.chat
    if (!(id in conn.wordorder)) throw false
    let json = conn.wordorder[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^wohint$/i
handler.limit = true
module.exports = handler
