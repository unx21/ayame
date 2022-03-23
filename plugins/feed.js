let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let rubah = global.db.data.users[m.sender].rubah
    let kuda = global.db.data.users[m.sender].kuda
    let kucing = global.db.data.users[m.sender].kucing
    let anjing = global.db.data.users[m.sender].anjing
    switch (type) {
        case 'rubah':
            if (rubah == 0) return m.reply('*Kamu belum memiliki Pet Rubah*')
            if (rubah == 5) return m.reply('*Pet kamu dah level max*')
            let __waktur = (new Date - global.db.data.users[m.sender].rubahlastclaim)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.db.data.users[m.sender].rubahlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakrubah += 20
                    global.db.data.users[m.sender].rubahlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                            global.db.data.users[m.sender].rubah += 1
                            global.db.data.users[m.sender].anakrubah -= (rubah * 100)
                            conn.reply(m.chat, `*Selamat Pet Rubah kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktur}* lagi`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*Kamu belum memiliki Pet Kuda*')
            if (kuda == 5) return m.reply('*Pet kamu dah level max*')
            let __waktuk = (new Date - global.db.data.users[m.sender].kudalastclaim)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.db.data.users[m.sender].kudalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkuda += 20
                    global.db.data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                            global.db.data.users[m.sender].kuda += 1
                            global.db.data.users[m.sender].anakkuda -= (kuda * 100)
                            conn.reply(m.chat, `*Selamat Pet Kuda kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
            break
        case 'kucing':
            if (kucing == 0) return m.reply('*Kamu belum memiliki Pet Kucing*')
            if (kucing == 5) return m.reply('*Pet kamu dah level max*')
            let __waktu = (new Date - global.db.data.users[m.sender].kucinglastclaim)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - global.db.data.users[m.sender].kucinglastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkucing += 20
                    global.db.data.users[m.sender].kucinglastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 100) - 1)
                        if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].anakkucing -= (kucing * 100)
                            conn.reply(m.chat, `*Selamat Pet Kucing kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktu}* lagi`)
            break
        case 'anjing':
            if (anjing == 0) return m.reply('*Kamu belum memiliki Pet Anjing*')
            if (anjing == 5) return m.reply('*Pet kamu dah level max*')
            let __waktua = (new Date - global.db.data.users[m.sender].anjinglastclaim)
            let _waktua = (600000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - global.db.data.users[m.sender].anjinglastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakanjing += 20
                    global.db.data.users[m.sender].anjinglastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (global.db.data.users[m.sender].anakanjing > naiklvl) {
                            global.db.data.users[m.sender].anjing += 1
                            global.db.data.users[m.sender].anakanjing -= (anjing * 100)
                            conn.reply(m.chat, `*Selamat Pet Anjing kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktua}* lagi`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}feed [ anjing | kucing | rubah | kuda ]\nContoh penggunaan: *${usedPrefix}feed kucing*`, m)
    }
}
handler.command = /^(feed(ing)?)$/i
handler.register = false

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
