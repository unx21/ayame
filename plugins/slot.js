let { MessageType } = require('@adiwajshing/baileys')
let num = /([0-9])$/i
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Uang Yang Akan Anda Slot'
    if (!num.test(text)) throw 'Hanya Angka'
    let uang = `${text}`
    let jackpot = Math.ceil(uang * 5)
    let win = Math.ceil(uang * 1)
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
}
//handler.help = ['slot']
//handler.tags = ['game']
handler.command = /^(slot)$/i
handler.group = false
handler.register = true

handler.exp = 10
handler.limit = true

module.exports = handler