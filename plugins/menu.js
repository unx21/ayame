let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'main': 'Simple Menu'
}
const defaultMenu = {
  before: `
┏ ┅ ━━ *〘 %me 〙*
┇ _Source : https://github.com/Kokoronationz/mirai_
┣ ┅ ━━━━━━━━
┃
┃ ⌬ Hai %name!
┃
┃ ⌬ *Hari:* %week %weton
┃ ⌬ *Tanggal:* %date
┃ ⌬ *Tanggal Islam:* %dateIslamic
┃ ⌬ *Waktu:* %time WITA
┃
┃ ⌬ *Uptime:* _%uptime_ (%muptime)
┃ ⌬ *Database:* %rtotalreg of %totalreg
┃ ⌬ *Contact:*
┃     _https://bit.ly/unxzx_
┗ ┅ ━━━━━━━━━━━━━━
%readmore
┏ ┅ ━━ *〘 Big Thanks To 〙*
┇
┣ ┅ ━━━━━━━━
┇
┃ ⍚ Nurutomo
┃ ⍚ BochilGaming
┃ ⍚ Ariffb
┃ ⍚ Kokoronationz
┃ ⍚ Unx
┃ ⍚ Dan Kawan-kawan
┗ ┅ ━━━━━━━━━━━━━━
`.trimStart(),
  header: '┏ ┅ ━━ *〘 %category 〙*\n┇',
  body: '┃ ⍚  %cmd %islimit %isPremium',
  footer: '┗ ┅ ━━━━━━━━━━━━━━\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let ayame = './src/photo/Yo Dayoo.mp4'
    let unx = 'https://bit.ly/unxzx'
    //let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    let tnbot = (await conn.getFile(await conn.getProfilePicture(m.fromMe))).data.toString('base64')
    let { name } = global.db.data.users[m.sender]
    //let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //conn.reply(m.chat, text.trim(), m)
    conn.fakeReply(m.chat, `Tunggu Sebentar, Jangan Spam !!!\n\nBaca Rules Dan Info Agar Mengerti Penggunaan Bot`, '0@s.whatsapp.net', `${conn.user.name} Verified WhatsApp Bot`, 'status@broadcast')
    conn.fakeReply(m.chat, text.trim(), '0@s.whatsapp.net', `${conn.user.name} Verified WhatsApp Bot`, 'status@broadcast')
    /* await conn.sendFile(m.chat, ayame, 'Yo Dayoo.mp4', text.trim(), { 
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '0@s.whatsapp.net', 
        fromMe: false 
      }, 
      message: { 
        "imageMessage": { 
          "mimetype": "image/jpeg", 
          "caption": `${conn.user.name} Verified WhatsApp Bot`, 
          "jpegThumbnail": tnbot
        } 
      }
    }, m, { 
      //thumbnail: tnbot, 
      contextInfo: { 
        mentionedJid: [m.sender]} } ) */
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
//handler.help = ['menu', 'help']
//handler.tags = ['main']
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
