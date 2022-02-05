// Rankcard udah gabisa karena api-hardianto-chan udah off :) //

const { createHash } = require('crypto')
let PhoneNumber = require('awesome-phonenumber')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = 'https://telegra.ph/file/debfea980ae47bed361fb.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, uang, koin, lastclaim, registered, regTime, age } = global.db.data.users[who]
    let username = conn.getName(who)
    let prem = global.prems.includes(who.split`@`[0])
    let sn = createHash('md5').update(who).digest('hex')
    let str = `
*Name:* ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n*About:* ' + about : ''}
*Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*Link:* https://wa.me/${who.split`@`[0]}${registered ? '\n*Age:* ' + age : ''}
*Saldo:* Rp${uang}
*Koin:* ${koin}
*Limit:* ${limit}
*Registered:* ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}
*Premium:* ${prem ? 'Yes' : 'No'}
*SN:* ${sn}
`
    let foot = '© シエル'
    let mentionedJid = [who]
    conn.send3ButtonImg(m.chat, await(await fetch(pp)).buffer(), str, foot, 'C l a i m', '.claim', 'D a i l y', '.daily', 'M i n i n g', '.mining', m, { contextInfo: { mentionedJid }})
  }
}
//handler.help = ['profile [@user]']
//handler.tags = ['tools']
handler.command = /^profile?$/i
handler.register = true

module.exports = handler

