let { MessageType } = require('@adiwajshing/baileys')
const spotion = 250
const Sspotion = 65
const Blimit = 999
const Smpotion = 100
const Shpotion = 175
const Bdiamond = 900
const Sdiamond = 750
const Smgstone = 500
const Spet = 700
const Bmakanan = 550
const Smakanan = 225
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 4500
const Smythic = 1500
const Blegendary = 7500 
const Slegendary = 3000
const Srsbkr = 1500
const Sbbbkr = 1500
const Sklkbkr = 750
const Sklncbkr = 500
const Sbsnbkr = 3500
const Sironarmor = 1500
const Sgoldarmor = 3500
const Skayu = 50
const Ssampah = 2
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy diamond 1*\n\n
List Barang:\n
*「 Barang 」*  |  *「 Harga Beli 」*\n
*Limit*:     ${Blimit}\n
*_Crate_*
Common:     ${Bcommon}
Uncommon:     ${Buncommon}
Mythic:     ${Bmythic}
Legendary:   ${Blegendary}\n
*_Lainnya_*
Spotion:   ${spotion}
Diamond:     ${Bdiamond}
Makanan:   ${Bmakanan}

*Makanan untuk feed pet*\n\n
*「 Barang 」*  |  *「 Harga Jual 」*\n
*_Armor_*
Ironarmor:   ${Sironarmor}
Goldarmor:   ${Sgoldarmor}\n
*_Crate_*
Common:     ${Scommon}
Uncommon:  ${Suncommon}
Mythic:     ${Smythic}
Legendary: ${Slegendary}\n
*_Masakan_*
Rusabakar:  ${Srsbkr}
Babibakar:  ${Sbbbkr}
Kalkunbakar:  ${Sklkbkr}
Kelincibakar:  ${Sklncbkr}
Bisonbakar:  ${Sbsnbkr}
Makanan:   ${Smakanan}\n
*_Lainnya_*
Spotion:       ${Sspotion}
Mpotion:     ${Smpotion}
Hpotion:   ${Shpotion}
Diamond:     ${Sdiamond}
Mgstone:   ${Smgstone}
Kayu:     ${Skayu}
Pet:    ${Spet}
Sampah:     ${Ssampah}

*Makanan untuk feed pet*
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                	case 'limit':
                            if (global.db.data.users[m.sender].uang >= Blimit * count) {
                            	global.db.data.users[m.sender].uang -= Blimit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.reply(m.chat, `-Rp${Blimit * count}\n+ ${count * 1} Limit`, m)
                             } else conn.reply(m.chat, `Uang tidak mencukupi untuk membeli ${count * 1} limit`, m)
                             break
                	case 'spotion':
                            if (global.db.data.users[m.sender].koin >= spotion * count) {
                                global.db.data.users[m.sender].koin -= spotion * count
                                global.db.data.users[m.sender].spotion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Small Potion dengan harga ${spotion * count} koin\n\nGunakan potion dengan ketik: *${usedPrefix}use spotion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Small Potion dengan harga ${spotion * count} koin`, m)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].koin >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].koin -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Diamond dengan harga ${Bdiamond * count} koin`, m)
                        break
                    case 'makanan':
                            if (global.db.data.users[m.sender].koin >= Bmakanan * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].koin -= Bmakanan * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakanan * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Makanan Pet dengan harga ${Bmakanan * count} koin`, m)                   
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].koin >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].koin -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)                       
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].koin >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].koin -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)                       
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].koin >= Bmythic * count) {
                                global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].koin -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].koin >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].koin -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} koin`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'spotion':
                        if (global.db.data.users[m.sender].spotion >= count * 1) {
                            global.db.data.users[m.sender].koin += Sspotion * count
                            global.db.data.users[m.sender].spotion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Small Potion dengan harga ${Sspotion * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Small Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'mpotion':
                        if (global.db.data.users[m.sender].mpotion >= count * 1) {
                            global.db.data.users[m.sender].koin += Smpotion * count
                            global.db.data.users[m.sender].mpotion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Medium Potion dengan harga ${Smpotion * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Medium Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'hpotion':
                        if (global.db.data.users[m.sender].hpotion >= count * 1) {
                            global.db.data.users[m.sender].koin += Shpotion * count
                            global.db.data.users[m.sender].hpotion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} High Potion dengan harga ${Shpotion * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `High Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].koin += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].koin += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].koin += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].koin += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'rusabakar':
                        if (global.db.data.users[m.sender].rusabakar >= count * 1) {
                            global.db.data.users[m.sender].koin += Srsbkr * count
                            global.db.data.users[m.sender].rusabakar -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Rusa bakar dengan harga ${Srsbkr * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Rusa bakar kamu tidak cukup`.trim(), m)
                        break
                    case 'babibakar':
                        if (global.db.data.users[m.sender].babibakar >= count * 1) {
                            global.db.data.users[m.sender].koin += Sbbbkr * count
                            global.db.data.users[m.sender].babibakar -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Babi bakar dengan harga ${Sbbbkr * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Babi bakar kamu tidak cukup`.trim(), m)
                        break
                    case 'kalkunbakar':
                        if (global.db.data.users[m.sender].kalkunbakar >= count * 1) {
                            global.db.data.users[m.sender].koin += Sklkbkr * count
                            global.db.data.users[m.sender].kalkunbakar -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Kalkun bakar dengan harga ${Sklkbkr * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Skeleton kamu tidak cukup`.trim(), m)
                        break
                    case 'kelincibakar':
                        if (global.db.data.users[m.sender].kelincibakar >= count * 1) {
                            global.db.data.users[m.sender].koin += Sklncbkr * count
                            global.db.data.users[m.sender].kelincibakar -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Kelinci bakar dengan harga ${Sklncbkr * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Wolf kamu tidak cukup`.trim(), m)
                        break
                    case 'bisonbakar':
                        if (global.db.data.users[m.sender].bisonbakar >= count * 1) {
                            global.db.data.users[m.sender].koin += Sklncbkr * count
                            global.db.data.users[m.sender].bisonbakar -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Bison bakar dengan harga ${Sbsnbkr * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Wolf kamu tidak cukup`.trim(), m)
                        break
                    case 'makanan':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].koin += Smakanan * count
                            global.db.data.users[m.sender].makananpet -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Makanan pet dengan harga ${Smakanan * count} koin`.trim(), m)
                        } else conn.reply(m.chat, `Wolf kamu tidak cukup`.trim(), m)
                        break
                    case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].koin += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} Pet Crate, dan anda mendapatkan ${Spet * count} koin`, m)
                        } else conn.reply(m.chat, `Pet Crate anda tidak cukup`, m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].koin += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} koin`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'ironarmor':
                        if (global.db.data.users[m.sender].ironarmor >= count * 1) {
                            global.db.data.users[m.sender].ironarmor -= count * 1
                            global.db.data.users[m.sender].uang += Sironarmor * count
                            conn.reply(m.chat, `${count} Iron Armor dijual seharga Rp${Sironarmor * count}`, m)
                        } else conn.reply(m.chat, `Iron Armor anda tidak cukup`, m)
                        break
                    case 'goldarmor':
                        if (global.db.data.users[m.sender].goldarmor >= count * 1) {
                            global.db.data.users[m.sender].goldarmor -= count * 1
                            global.db.data.users[m.sender].uang += Sgoldarmor * count
                            conn.reply(m.chat, `${count} Gold Armor dijual seharga Rp${Sgoldarmor * count}`, m)
                        } else conn.reply(m.chat, `Gold Armor anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].koin += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} koin`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].koin += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} koin`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    case 'mgstone':
                        if (global.db.data.users[m.sender].mgstone >= count * 1) {
                            global.db.data.users[m.sender].mgstone -= count * 1
                            global.db.data.users[m.sender].uang += Smgstone * count
                            conn.reply(m.chat, `${count} Magic Stone dijual seharga Rp${Smgstone * count}`, m)
                        } else conn.reply(m.chat, `Magic Stone anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'limit': 
                            if (global.db.data.users[m.sender].uang >= Blimit * count) {
                            	global.db.data.users[m.sender].uang -= Blimit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.reply(m.chat, `-Rp${Blimit * count}\n+ ${count * 1} Limit`, m)
                             } else conn.reply(m.chat, `Uang tidak mencukupi untuk membeli ${count * 1} limit`, m)
                                break
            	case 'spotion':
                            if (global.db.data.users[m.sender].koin >= spotion * count) {
                                global.db.data.users[m.sender].koin -= spotion * count
                                global.db.data.users[m.sender].spotion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Small Potion dengan harga ${spotion * count} koin\n\nGunakan potion dengan ketik: *${usedPrefix}use spotion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Small Potion dengan harga ${spotion * count} koin`, m)
                        break
                case 'diamond':
                        if (global.db.data.users[m.sender].koin >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].koin -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Diamond dengan harga ${Bdiamond * count} koin`, m)
                    break
                case 'makanan':
                        if (global.db.data.users[m.sender].koin >= Bmakanan * count) {
                            global.db.data.users[m.sender].makananpet += count * 1
                            global.db.data.users[m.sender].koin -= Bmakanan * count
                            conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakanan * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Makanan Pet dengan harga ${Bmakanan * count} koin`, m)                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].koin >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].koin -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)                
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].koin >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].koin -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)                 
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].koin >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].koin -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)                  
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].koin >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].koin -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} koin`, m)
                        } else conn.reply(m.chat, `Koin anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} koin\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)              
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'spotion':
                    if (global.db.data.users[m.sender].spotion >= count * 1) {
                        global.db.data.users[m.sender].koin += Sspotion * count
                        global.db.data.users[m.sender].spotion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Small Potion dengan harga ${Sspotion * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Small Potion kamu tidak cukup`.trim(), m)
                    break
                case 'mpotion':
                    if (global.db.data.users[m.sender].mpotion >= count * 1) {
                        global.db.data.users[m.sender].koin += Smpotion * count
                        global.db.data.users[m.sender].mpotion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Medium Potion dengan harga ${Smpotion * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Medium Potion kamu tidak cukup`.trim(), m)
                    break
                case 'hpotion':
                    if (global.db.data.users[m.sender].hpotion >= count * 1) {
                        global.db.data.users[m.sender].koin += Shpotion * count
                        global.db.data.users[m.sender].hpotion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} High Potion dengan harga ${Shpotion * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `High Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].koin += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].koin += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].koin += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].koin += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'rusabakar':
                    if (global.db.data.users[m.sender].rusabakar >= count * 1) {
                        global.db.data.users[m.sender].koin += Srsbkr * count
                        global.db.data.users[m.sender].rusabakar -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Rusa bakar dengan harga ${Srsbkr * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Rusa bakar kamu tidak cukup`.trim(), m)
                    break
                case 'babibakar':
                     if (global.db.data.users[m.sender].babibakar >= count * 1) {
                         global.db.data.users[m.sender].koin += Sbbbkr * count
                         global.db.data.users[m.sender].babibakar -= count * 1
                         conn.reply(m.chat, `Succes menjual ${count} Babi bakar dengan harga ${Sbbbkr * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Babi bakar kamu tidak cukup`.trim(), m)
                    break
                case 'kalkunbakar':
                     if (global.db.data.users[m.sender].kalkunbakar >= count * 1) {
                         global.db.data.users[m.sender].koin += Sklkbkr * count
                         global.db.data.users[m.sender].kalkunbakar -= count * 1
                         conn.reply(m.chat, `Succes menjual ${count} Kalkun bakar dengan harga ${Sklkbkr * count} koin`.trim(), m)
                     } else conn.reply(m.chat, `Skeleton kamu tidak cukup`.trim(), m)
                     break
                case 'kelincibakar':
                     if (global.db.data.users[m.sender].kelincibakar >= count * 1) {
                        global.db.data.users[m.sender].koin += Sklncbkr * count
                        global.db.data.users[m.sender].kelincibakar -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Kelinci bakar dengan harga ${Sklncbkr * count} koin`.trim(), m)
                     } else conn.reply(m.chat, `Wolf kamu tidak cukup`.trim(), m)
                     break
                case 'bisonbakar':
                     if (global.db.data.users[m.sender].bisonbakar >= count * 1) {
                         global.db.data.users[m.sender].koin += Sklncbkr * count
                         global.db.data.users[m.sender].bisonbakar -= count * 1
                         conn.reply(m.chat, `Succes menjual ${count} Bison bakar dengan harga ${Sbsnbkr * count} koin`.trim(), m)
                     } else conn.reply(m.chat, `Wolf kamu tidak cukup`.trim(), m)
                      break
                case 'makanan':
                     if (global.db.data.users[m.sender].makananpet >= count * 1) {
                         global.db.data.users[m.sender].koin += Smakanan * count
                         global.db.data.users[m.sender].makananpet -= count * 1
                         conn.reply(m.chat, `Succes menjual ${count} Makanan pet dengan harga ${Smakanan * count} koin`.trim(), m)
                     } else conn.reply(m.chat, `Wolf kamu tidak cukup`.trim(), m)
                     break
                case 'pet':
                    if (global.db.data.users[m.sender].pet >= count * 1) {
                        global.db.data.users[m.sender].pet -= count * 1
                        global.db.data.users[m.sender].koin += Spet * count
                        conn.reply(m.chat, `Succes menjual ${count} Pet Crate, dan anda mendapatkan ${Spet * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Pet Crate anda tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].koin += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                case 'ironarmor':
                        if (global.db.data.users[m.sender].ironarmor >= count * 1) {
                            global.db.data.users[m.sender].ironarmor -= count * 1
                            global.db.data.users[m.sender].uang += Sironarmor * count
                            conn.reply(m.chat, `${count} Iron Armor dijual seharga Rp${Sironarmor * count}`, m)
                        } else conn.reply(m.chat, `Iron Armor anda tidak cukup`, m)
                        break
                case 'goldarmor':
                        if (global.db.data.users[m.sender].goldarmor >= count * 1) {
                            global.db.data.users[m.sender].goldarmor -= count * 1
                            global.db.data.users[m.sender].uang += Sgoldarmor * count
                            conn.reply(m.chat, `${count} Gold Armor dijual seharga Rp${Sgoldarmor * count}`, m)
                        } else conn.reply(m.chat, `Gold Armor anda tidak cukup`, m)
                        break
                case 'kayu':
                    if (global.db.data.users[m.sender].kayu >= count * 1) {
                        global.db.data.users[m.sender].kayu -= count * 1
                        global.db.data.users[m.sender].koin += Skayu * count
                        conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} koin`.trim(), m)
                    } else conn.reply(m.chat, `Kayu anda tidak cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].koin += Sdiamond * count
                        conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} koin`, m)
                    } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                    break
                case 'mgstone':
                        if (global.db.data.users[m.sender].mgstone >= count * 1) {
                            global.db.data.users[m.sender].mgstone -= count * 1
                            global.db.data.users[m.sender].uang += Smgstone * count
                            conn.reply(m.chat, `${count} Magic Stone dijual seharga Rp${Smgstone * count}`, m)
                        } else conn.reply(m.chat, `Magic Stone anda tidak cukup`, m)
                        break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.register = false
handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
module.exports = handler
