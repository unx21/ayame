let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let healt = user.healt
    let stamina = user.stamina  //berburu
    let durability = user.durability
    let magazine = user.magazine  //berburu
    let warn = user.warn
    let pet = user.pet
    let makananpet = user.makananpet
    let kucing = user.kucing
    let _kucing = user.anakkucing
    let rubah = user.rubah
    let _rubah = user.anakrubah
    let kuda = user.kuda
    let _kuda = user.anakkuda
    let anjing = user.anjing
    let _anjing = user.anakanjing
    let diamond = user.diamond  //adventure
    let potion = user.potion  //adventure
    let common = user.common  //adventure
    let uncommon = user.uncommon  //adventure
    let mythic = user.mythic  //adventure
    let legendary = user.legendary  //adventure
    let slime = user.slime  //dungeon
    let goblin = user.goblin  //dungeon
    let skeleton = user.skeleton  //dungeon
    let wolf = user.wolf  //dungeon
    let sprtgrass = user.sprtgrass  //dungeon
    let mdgrleaf = user.mdgrleaf  //dungeon
    let hpktplant = user.hpktplant  //dungeon
    let spotion = user.spotion  //racik herbal
    let rusa = user.rusa  //berburu
    let babi = user.babi  //berburu
    let kalkun = user.kalkun  //berburu
    let kelinci = user.kelinci  //berburu
    let bison = user.bison  //berburu
    let rusabakar = user.rusabakar  //berburu
    let babibakar = user.babibakar  //berburu
    let kalkunbakar = user.kalkunbakar  //berburu
    let kelincibakar = user.kelincibakar  //berburu
    let bisonbakar = user.bisonbakar  //berburu
    let kayu = user.kayu
    let iron = user.iron  //nambang
    let gold = user.gold  //nambang
    let peti = user.peti  //nambang
    let mgstone = user.mgstone  //bedah monster
    let peluru = user.peluru  //tempa
    let ironarmor = user.ironarmor  //tempa
    let goldarmor = user.goldarmor  //tempa
    let magicarmor = user.magicarmor  //tempa
    let level = user.level
    let uang = user.uang  //buy limit
    let koin = user.koin  //shop
    let exp = user.exp
    let sampah = user.sampah
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sorteduang = Object.entries(global.db.data.users).sort((a, b) => b[1].uang - a[1].uang)
    let sortedkoin = Object.entries(global.db.data.users).sort((a, b) => b[1].koin - a[1].koin)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersuang = sorteduang.map(v => v[0])
    let userskoin = sortedkoin.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n

Koin: *${koin}*
Uang: *${uang}*
Health: *${healt}*
Stamina: *${stamina}*
Durability: *${durability}*


*「 Inventori 」*\n
Magazine: *${magazine}*
Peluru: *${peluru}*
Diamond: *${diamond}*
Potion: *${potion}*
Makanan Pet: *${makananpet}*
Kayu Bakar: *${kayu}*
Sampah: *${sampah}*


*「 Monster Buruan 」*\n
Slime: *${slime}*
Goblin: *${goblin}*
Skeleton: *${skeleton}*
Wolf: *${wolf}*


*「 Hewan Buruan 」*\n
Rusa: *${rusa}*
Babi: *${babi}*
Kalkun: *${kalkun}*
Kelinci: *${kelinci}*
Bison: *${bison}*


*「 Masakan 」*\n
Rusa Bakar: *${rusabakar}*
Babi Bakar: *${babibakar}*
Kalkun Bakar: *${kalkunbakar}*
Kelinci Bakar: *${kelincibakar}*
Bison Bakar: *${bisonbakar}*


*「 Tanaman Herbal 」*\n
Spirit Grass: *${sprtgrass}*
Mandragora Leaf: *${mdgrleaf}*
Hipokute Plant: *${hpktplant}*
Small Potion: *${spotion}*


*「 Resource 」*\n
Iron: *${iron}*
Gold: *${gold}*
Magic Stone: *${mgstone}*
Peti: *${peti}*
Ironarmor: *${ironarmor}*
Goldarmor: *${goldarmor}*
Magicarmor: *${magicarmor}*


*「 Crate 」*\n
Common: *${common}*
Uncommon: *${uncommon}*
Mythic: *${mythic}*
Legendary: *${legendary}*
Pet: *${pet}*
Makananpet: *${makananpet}*

Total crate: *${common + uncommon + mythic + legendary}* crate\n
*Pet*
Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
Anjing: *${anjing == 0 ? 'Tidak Punya' : '' || anjing == 1 ? 'Level 1' : '' || anjing == 2 ? 'Level 2' : '' || anjing == 3 ? 'Level 3' : '' || anjing == 4 ? 'Level 4' : '' || anjing == 5 ? 'Level MAX' : ''}*\n\n
*Pet Progress*\n
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n┃Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n┃Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃Anjing ${anjing == 0 ? 'Tidak Punya' : '' || anjing > 0 && anjing < 5 ? `Level *${anjing}* To level *${anjing + 1}*\n│Exp *${_anjing}* -> *${anjing *100}*` : '' || anjing == 9 ? '*Max Level*' : ''}
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n┃Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━\n\n
*Achievement*
1.Top Koin *${userskoin.indexOf(m.sender) + 1}* dari *${userskoin.length}*
2.Top Uang *${usersuang.indexOf(m.sender) + 1}* dari *${usersuang.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    conn.reply(m.chat, str, m)
}
// handler.help = ['inventory', 'inv']
// handler.tags = ['rpg']
handler.command = /^(inv(entory)?)$/i
handler.register = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
