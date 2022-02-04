let handler  = async (m, { conn }) => {
let teks = `
${pickRandom([`_Terimakasih kembali @${m.sender.split`@`[0]}_`, `_Sama-sama_`, `_Sans ae @${m.sender.split`@`[0]}_\n\n_Itu bukan apa-apa_`, `_Ekhheemmm, sama sama_`, `_Wokeehh_`, `😎`, `Okzzz`, `Lah`, `_Iyaaaa @${m.sender.split`@`[0]}_\n\n_Gitu doang juga_`, `Meh`, `_Udah??_`, `Hooh`])}
`.trim()
conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /(M|m)akasih/
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
