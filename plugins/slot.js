/*   Jangan di hapus yak om :)
      Github.com/unx21
*/


let { MessageType } = require('@adiwajshing/baileys')
let num = /([0-9])$/i
let handler = async (m, { conn, args, usedPrefix }) => {
let type = (args[0] || '').toLowerCase()
let count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
            case 'uang':
    if (!args) throw 'Masukkan Jumlah Uang Yang Akan Anda Slot'
    let uang = `${count}`
    let jackpot = Math.ceil(uang * 10)
    let win = Math.ceil(uang * 2)
    if (uang < 1000) throw 'Minimal 1000'
    let users = global.db.data.users
    if (uang > users[m.sender].uang) throw 'Uang Anda Tidak Cukup'
    let emojis = ["🍏","🍎","🍊","🍋","🍑","🪙","🍅","🍐"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = "_*JACKPOT*_";
        hasil = `Win With 3 Thing Common +Rp${jackpot}`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.db.data.users[m.sender].uang += jackpot
        await conn.fakeReply(m.chat, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')

    } else if (a == b || a == c || b == c) {
        end = "_*YOU WIN*_";
        hasil = `Win With 2 Things Common +Rp${win}`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.db.data.users[m.sender].uang += win
        await conn.fakeReply(m.chat, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
    } else {
        end = "_*YOU LOSE*_";
        hasil = `Hopefully You Are lucky Next -Rp${uang}`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.db.data.users[m.sender].uang -= uang
        await conn.fakeReply(m.chat, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
    }
    break
    case 'koin':
    if (!args) throw 'Masukkan Jumlah Koin Yang Akan Anda Slot'
    let koin = `${count}`
    let jakpot = Math.ceil(koin * 5)
    let won = Math.ceil(koin * 1)
    if (koin < 1000) throw 'Minimal 1000'
    let user = global.db.data.users
    if (koin > user[m.sender].koin) throw 'Koin Anda Tidak Cukup'
    let emoji = ["🍏","🍎","🍊","🍋","🍑","🪙","🍅","🍐"];
    let d = Math.floor(Math.random() * emoji.length);
    let e = Math.floor(Math.random() * emoji.length);
    let f = Math.floor(Math.random() * emoji.length);
    let j = [],
        k = [],
        l = [];
    for (let i = 0; i < 3; i++) {
        j[i] = emoji[d];
        d++;
        if (d == emoji.length) d = 0;
    }
    for (let i = 0; i < 3; i++) {
        k[i] = emoji[e];
        e++;
        if (e == emoji.length) e = 0;
    }
    for (let i = 0; i < 3; i++) {
        l[i] = emoji[f];
        f++;
        if (f == emoji.length) f = 0;
    }
    let ends;
    if (d == e && e == f) {
        ends = "_*JACKPOT*_";
        hsil = `Win With 3 Thing Common +${jakpot} Coins`;
        gacha = `${j[0]} | ${k[0]} | ${l[0]}\n${j[1]} | ${k[1]} | ${l[1]} <=== ${ends}\n${j[2]} | ${k[2]} | ${l[2]}`;
        global.db.data.users[m.sender].koin += jakpot
        await conn.fakeReply(m.chat, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gacha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hsil}`, 'status@broadcast')

    } else if (d == e || d == f || e == f) {
        ends = "_*YOU WIN*_";
        hsil = `Win With 2 Things Common +${won} Coins`;
        gacha = `${j[0]} | ${k[0]} | ${l[0]}\n${j[1]} | ${k[1]} | ${l[1]} <=== ${ends}\n${j[2]} | ${k[2]} | ${l[2]}`;
        global.db.data.users[m.sender].koin += won
        await conn.fakeReply(m.chat, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gacha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hsil}`, 'status@broadcast')
    } else {
        ends = "_*YOU LOSE*_";
        hsil = `Hopefully You Are lucky Next -${koin} Coins`;
        gacha = `${j[0]} | ${k[0]} | ${l[0]}\n${j[1]} | ${k[1]} | ${l[1]} <=== ${ends}\n${j[2]} | ${k[2]} | ${l[2]}`;
        global.db.data.users[m.sender].koin -= koin
        await conn.fakeReply(m.chat, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gacha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hsil}`, 'status@broadcast')
    }
 break
 default:
       return conn.reply(m.chat, `Masukkan Pilihan Uang Atau Koin\nContoh Penggunaan:  ${usedPrefix}slot ${pickRandom(['uang', 'koin'])} 10000`, m)
  }
}
//handler.help = ['slot']
//handler.tags = ['game']
handler.command = /^(slot)$/i
handler.group = false
handler.register = false

handler.exp = 10
handler.limit = 1

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
