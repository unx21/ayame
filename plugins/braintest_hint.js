let handler = async (m, { conn }) => {
    conn.braintest = conn.braintest ? conn.braintest : {}
    let id = m.chat
    if (!(id in conn.braintest)) throw false
    let json = conn.braintest[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^bthint$/i
handler.limit = true
module.exports = handler
