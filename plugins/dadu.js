const dir = [
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/yhdyhnap',
  'https://tinyurl.com/yfwjbou7',
  'https://tinyurl.com/yh3e3ogt',
  'https://tinyurl.com/yfmhpvxs',
  'https://tinyurl.com/ygpxka9q'
];
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['fun']
handler.command = /^dadu$/i
handler.register = false

module.exports = handler
