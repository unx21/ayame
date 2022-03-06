let handler = async (m, { conn }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (!(id in conn.siapakahaku)) throw false
    let json = conn.siapakahaku[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^sahint$/i
handler.limit = 1
module.exports = handler
