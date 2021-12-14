let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, text, usedPrefix, DevMode }) => {
  try {
    let bruh = `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`
    let _lmao = args[0]
    let Lmao = `Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${usedPrefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'mythic', 'legendary'])} 10*`
    let type = (args[0] || '').toLowerCase()
    let jumlah = (args[1] || '').toLowerCase()
    switch (type) {
        case 'common':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _ck = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _csp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let ck = (_ck * 1)
                    let cc = (_cc * 1)
                    let csp = (_csp * 1)
                    let ce = (_ce * 1)
                    let cu = (_cu * 1)
                    let Hcom = `
Anda telah membuka 🎁 *Common crate* dan mendapatkan:${ck > 0 ? `\n🪙 Koin: ${ck}` : ''}${ce > 0 ? `\n🔗 Exp: ${ce} *Exp*` : ''}${csp > 0 ? `\n🧃 Small Potion: ${csp} *Potion*` : ''}${cc > 0 ? `\n🎁 Common crate: ${cc} *Crate*` : ''}${cu > 0 ? `\n🎁 Uncommon crate: ${cu} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 1) {
                        global.db.data.users[m.sender].common -= 1
                        global.db.data.users[m.sender].koin += ck * 1
                        global.db.data.users[m.sender].exp += ce * 1
                        global.db.data.users[m.sender].spotion += csp * 1
                        global.db.data.users[m.sender].uncommon += cu * 1
                        global.db.data.users[m.sender].common += cc * 1
                        conn.reply(m.chat, Hcom, m)
                    } else conn.reply(m.chat, '🎁 Common crate anda tidak cukup', m)
                    break
                case '10':
                    let _ck1 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let _csp1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let _ce1 = `${Math.floor(Math.random() * 700)}`.trim()
                    let _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
                    let ck1 = (_ck1 * 1)
                    let cc1 = (_cc1 * 1)
                    let csp1 = (_csp1 * 1)
                    let ce1 = (_ce1 * 1)
                    let cu1 = (_cu1 * 1)
                    let Hcom1 = `
Anda telah membuka 🎁 *Common crate* dan mendapatkan:${ck1 > 0 ? `\n🪙 Koin: ${ck1}` : ''}${ce1 > 0 ? `\n🔗 Exp: ${ce1} *Exp*` : ''}${csp1 > 0 ? `\n🧃 Small Potion: ${csp1} *Potion*` : ''}${cc1 > 0 ? `\n🎁 Common crate: ${cc1} *Crate*` : ''}${cu1 > 0 ? `\n🎁 Uncommon crate: ${cu1} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 10) {
                        global.db.data.users[m.sender].common -= 10
                        global.db.data.users[m.sender].koin += ck1 * 1
                        global.db.data.users[m.sender].exp += ce1 * 1
                        global.db.data.users[m.sender].spotion += csp1 * 1
                        global.db.data.users[m.sender].uncommon += cu1 * 1
                        global.db.data.users[m.sender].common += cc1 * 1
                        conn.reply(m.chat, Hcom1, m)
                    } else conn.reply(m.chat, '🎁 Common crate anda tidak cukup', m)
                    break
                case '100':
                    let _ck2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _cc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _csp2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _ce2 = `${Math.floor(Math.random() * 7500)}`.trim()
                    let _cu2 = `${Math.floor(Math.random() * 30)}`.trim()
                    let ck2 = (_ck2 * 1)
                    let cc2 = (_cc2 * 1)
                    let csp2 = (_csp2 * 1)
                    let ce2 = (_ce2 * 1)
                    let cu2 = (_cu2 * 1)
                    let Hcom2 = `
Anda telah membuka 🎁 *Common crate* dan mendapatkan:${ck2 > 0 ? `\n🪙 Koin: ${ck2}` : ''}${ce2 > 0 ? `\n🔗 Exp: ${ce2} *Exp*` : ''}${csp2 > 0 ? `\n🧃 Small Potion: ${csp2} *Potion*` : ''}${cc2 > 0 ? `\n🎁 Common crate: ${cc2} *Crate*` : ''}${cu2 > 0 ? `\n🎁 Uncommon crate: ${cu2} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 100) {
                        global.db.data.users[m.sender].common -= 100
                        global.db.data.users[m.sender].koin += ck2 * 1
                        global.db.data.users[m.sender].exp += ce2 * 1
                        global.db.data.users[m.sender].spotion += csp2 * 1
                        global.db.data.users[m.sender].uncommon += cu2 * 1
                        global.db.data.users[m.sender].common += cc2 * 1
                        conn.reply(m.chat, Hcom2, m)
                    } else conn.reply(m.chat, '🎁 Common crate anda tidak cukup', m)
                    break
                case '1000':
                    let _ck3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
                    let _csp3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
                    let _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let ck3 = (_ck3 * 1)
                    let cc3 = (_cc3 * 1)
                    let csp3 = (_csp3 * 1)
                    let ce3 = (_ce3 * 1)
                    let cu3 = (_cu3 * 1)
                    let Hcom3 = `
Anda telah membuka 🎁 *Common crate* dan mendapatkan:${ck3 > 0 ? `\n🪙 Koin: ${ck3}` : ''}${ce3 > 0 ? `\n🔗 Exp: ${ce3} *Exp*` : ''}${csp3 > 0 ? `\n🧃 Small Potion: ${csp3} *Potion*` : ''}${cc3 > 0 ? `\n🎁 Common crate: ${cc3} *Crate*` : ''}${cu3 > 0 ? `\n🎁 Uncommon crate: ${cu3} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].common >= 1000) {
                        global.db.data.users[m.sender].common -= 1000
                        global.db.data.users[m.sender].koin += ck3 * 1
                        global.db.data.users[m.sender].exp += ce3 * 1
                        global.db.data.users[m.sender].spotion += csp3 * 1
                        global.db.data.users[m.sender].uncommon += cu3 * 1
                        global.db.data.users[m.sender].common += cc3 * 1
                        conn.reply(m.chat, Hcom3, m)
                    } else conn.reply(m.chat, '🎁 Common crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'uncommon':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _ue = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uk = `${Math.floor(Math.random() * 150)}`.trim()
                    let _usp = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uu = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uc = `${Math.floor(Math.random() * 3)}`.trim()
                    let ue = (_ue * 1)
                    let uk = (_uk * 1)
                    let usp = (_usp * 1)
                    let uu = (_uu * 1)
                    let uc = (_uc * 1)
                    let Hun = `
Anda telah membuka 🎁 *Uncommon crate* dan mendapatkan:${uk > 0 ? `\n🪙 Koin: ${uk}` : ''}${ue > 0 ? `\n🔗 Exp: ${ue} *Exp*` : ''}${up > 0 ? `\n🧃 Small Potion: ${up} *Potion*` : ''}${uc > 0 ? `\n🎁 Common crate: ${uc} *Crate*` : ''}${uu > 0 ? `\n🎁 Uncommon crate: ${uu} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 1) {
                        global.db.data.users[m.sender].uncommon -= 1
                        global.db.data.users[m.sender].koin += uk * 1
                        global.db.data.users[m.sender].exp += ue * 1
                        global.db.data.users[m.sender].spotion += usp * 1
                        global.db.data.users[m.sender].common += uc * 1
                        global.db.data.users[m.sender].uncommon += uu * 1
                        conn.reply(m.chat, Hun, m)
                    } else conn.reply(m.chat, '🎁 Uncommon crate anda tidak cukup', m)
                    break
                case '10':
                    let _ue1 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _uk1 = `${Math.floor(Math.random() * 400)}`.trim()
                    let _usp1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let _uu1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _uc1 = `${Math.floor(Math.random() * 7)}`.trim()
                    let ue1 = (_ue1 * 1)
                    let uk1 = (_uk1 * 1)
                    let usp1 = (_usp1 * 1)
                    let uu1 = (_uu1 * 1)
                    let uc1 = (_uc1 * 1)
                    let Hun1 = `
Anda telah membuka 🎁 *Uncommon crate* dan mendapatkan:${uk1 > 0 ? `\n🪙 Koin: ${uk1}` : ''}${ue1 > 0 ? `\n🔗 Exp: ${ue1} *Exp*` : ''}${up1 > 0 ? `\n🧃 Small Potion: ${up1} *Potion*` : ''}${uc1 > 0 ? `\n🎁 Common crate: ${uc1} *Crate*` : ''}${uu1 > 0 ? `\n🎁 Uncommon crate: ${uu1} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 10) {
                        global.db.data.users[m.sender].uncommon -= 10
                        global.db.data.users[m.sender].koin += uk1 * 1
                        global.db.data.users[m.sender].exp += ue1 * 1
                        global.db.data.users[m.sender].spotion += usp1 * 1
                        global.db.data.users[m.sender].common += uc1 * 1
                        global.db.data.users[m.sender].uncommon += uu1 * 1
                        conn.reply(m.chat, Hun1, m)
                    } else conn.reply(m.chat, '🎁 Uncommon crate anda tidak cukup', m)
                    break
                case '100':
                    let _ue2 = `${Math.floor(Math.random() * 8000)}`.trim()
                    let _uk2 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _usp2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
                    let _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let ue2 = (_ue2 * 1)
                    let uk2 = (_uk2 * 1)
                    let usp2 = (_up2 * 1)
                    let uu2 = (_uu2 * 1)
                    let uc2 = (_uc2 * 1)
                    let Hun2 = `
Anda telah membuka 🎁 *Uncommon crate* dan mendapatkan:${uk2 > 0 ? `\n🪙 Koin: ${uk2}` : ''}${ue2 > 0 ? `\n🔗 Exp: ${ue2} *Exp*` : ''}${up2 > 0 ? `\n🧃 Small Potion: ${up2} *Potion*` : ''}${uc2 > 0 ? `\n🎁 Common crate: ${uc2} *Crate*` : ''}${uu2 > 0 ? `\n🎁 Uncommon crate: ${uu2} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 100) {
                        global.db.data.users[m.sender].uncommon -= 100
                        global.db.data.users[m.sender].koin += uk2 * 1
                        global.db.data.users[m.sender].exp += ue2 * 1
                        global.db.data.users[m.sender].spotion += usp2 * 1
                        global.db.data.users[m.sender].common += uc2 * 1
                        global.db.data.users[m.sender].uncommon += uu2 * 1
                        conn.reply(m.chat, Hun2, m)
                    } else conn.reply(m.chat, '🎁 Uncommon crate anda tidak cukup', m)
                    break
                case '1000':
                    let _ue3 = `${Math.floor(Math.random() * 100000)}`.trim()
                    let _uk3 = `${Math.floor(Math.random() * 50000)}`.trim()
                    let _usp3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uu3 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
                    let ue3 = (_ue3 * 1)
                    let uk3 = (_uk3 * 1)
                    let usp3 = (_usp3 * 1)
                    let uu3 = (_uu3 * 1)
                    let uc3 = (_uc3 * 1)
                    let Hun3 = `
Anda telah membuka 🎁 *Uncommon crate* dan mendapatkan:${uk3 > 0 ? `\n🪙 Koin: ${uk3}` : ''}${ue3 > 0 ? `\n🔗 Exp: ${ue3} *Exp*` : ''}${up3 > 0 ? `\n🧃 Small Potion: ${up3} *Potion*` : ''}${uc3 > 0 ? `\n🎁 Common crate: ${uc3} *Crate*` : ''}${uu3 > 0 ? `\n🎁 Uncommon crate: ${uu3} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].uncommon >= 1000) {
                        global.db.data.users[m.sender].uncommon -= 1000
                        global.db.data.users[m.sender].koin += uk3 * 1
                        global.db.data.users[m.sender].exp += ue3 * 1
                        global.db.data.users[m.sender].spotion += usp3 * 1
                        global.db.data.users[m.sender].common += uc3 * 1
                        global.db.data.users[m.sender].uncommon += uu3 * 1
                        conn.reply(m.chat, Hun3, m)
                    } else conn.reply(m.chat, '🎁 Uncommon crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao ,m)
            }
            break
        case 'mythic':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _mk = `${Math.floor(Math.random() * 200)}`.trim()
                    let _ms = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _mmm = `${pickRandom(['0', '0', '1', '0', '0', '0'])}`.trim()
                    let _me = `${Math.floor(Math.random() * 1000)}`.trim()
                    let _msp = `${Math.floor(Math.random() * 7)}`.trim()
                    let _mmp = `${Math.floor(Math.random() * 5)}`.trim()
                    let _mu = `${Math.floor(Math.random() * 5)}`.trim()
                    let _mc = `${Math.floor(Math.random() * 7)}`.trim()
                    let _ml = `${pickRandom(['0', '0', '0', '1', '0', '0', '0'])}`.trim()
                    let _md = `${Math.floor(Math.random() * 3)}`.trim()
                    let mk = (_mk * 1)
                    let ms = (_ms * 1)
                    let mmm = (_mmm * 1)
                    let me = (_me * 1)
                    let msp = (_msp * 1)
                    let mmp = (_mmp * 1)
                    let mu = (_mu * 1)
                    let mc = (_mc * 1)
                    let ml = (_ml * 1)
                    let md = (_md * 1)
                    let Mychat = `
Anda telah membuka 🎁 *Mythic crate* dan mendapatkan:${mk > 0 ? `\n🪙 Koin: ${mk}` : ''}${ms > 0 ? `\n💵 Saldo: ${ms}` : ''}${me > 0 ? `\n🔗 Exp: ${me} *Exp*` : ''}${md > 0 ? `\n💎 Diamond: ${md} *Diamond*` : ''}${msp > 0 ? `\n🧃 Small Potion: ${msp} *Potion*` : ''}${mmp > 0 ? `\n🧃 Medium Potion: ${mmp} *Potion*` : ''}${mc > 0 ? `\n🎁 Common crate: ${mc} *Crate*` : ''}${mu > 0 ? `\n🎁 Uncommon crate: ${mu} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 1) {
                        global.db.data.users[m.sender].mythic -= 1
                        global.db.data.users[m.sender].koin += mk * 1
                        global.db.data.users[m.sender].uang += ms * 1
                        global.db.data.users[m.sender].diamond += md * 1
                        global.db.data.users[m.sender].exp += me * 1
                        global.db.data.users[m.sender].spotion += msp * 1
                        global.db.data.users[m.sender].mpotion += mmp * 1
                        global.db.data.users[m.sender].common += mc * 1
                        global.db.data.users[m.sender].uncommon += mu * 1
                        conn.reply(m.chat, Mychat, m)
                        if (mmm > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n🎁 ${mmm} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += mmm * 1
                        }
                        if (ml > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${ml} Legendary Crate`)
                            global.db.data.users[m.sender].legendary += ml * 1
                        }
                    } else conn.reply(m.chat, '🎁 Mythic crate anda tidak cukup', m)
                    break
                case '10':
                    let _mk1 = `${Math.floor(Math.random() * 2000)}`.trim()
                    let _ms1 = `${Math.floor(Math.random() * 20000)}`.trim()
                    let _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
                    let _msp1 = `${Math.floor(Math.random() * 17)}`.trim()
                    let _mmp1 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _mu1 = `${Math.floor(Math.random() * 8)}`.trim()
                    let _mc1 = `${Math.floor(Math.random() * 11)}`.trim()
                    let _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
                    let _md1 = `${Math.floor(Math.random() * 5)}`.trim()
                    let mk1 = (_mk1 * 1)
                    let ms1 = (_ms1 * 1)
                    let mmm1 = (_mmm1 * 1)
                    let me1 = (_me1 * 1)
                    let msp1 = (_msp1 * 1)
                    let mmp1 = (_mmp1 * 1)
                    let mu1 = (_mu1 * 1)
                    let mc1 = (_mc1 * 1)
                    let ml1 = (_ml1 * 1)
                    let md1 = (_md1 * 1)
                    let Mychat1 = `
Anda telah membuka 🎁 *Mythic crate* dan mendapatkan:${mk1 > 0 ? `\n🪙 Koin: ${mk1}` : ''}${ms1 > 0 ? `\n💵 Saldo: ${ms1}` : ''}${me1 > 0 ? `\n🔗 Exp: ${me1} *Exp*` : ''}${md1 > 0 ? `\n💎 Diamond: ${md1} *Diamond*` : ''}${msp1 > 0 ? `\n🧃 Small Potion: ${msp1} *Potion*` : ''}${mmp1 > 0 ? `\n🧃 Medium Potion: ${mmp1} *Potion*` : ''}${mc1 > 0 ? `\n🎁 Common crate: ${mc1} *Crate*` : ''}${mu1 > 0 ? `\n🎁 Uncommon crate: ${mu1} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 10) {
                        global.db.data.users[m.sender].mythic -= 10
                        global.db.data.users[m.sender].koin += mk1 * 1
                        global.db.data.users[m.sender].uang += ms1 * 1
                        global.db.data.users[m.sender].diamond += md1 * 1
                        global.db.data.users[m.sender].exp += me1 * 1
                        global.db.data.users[m.sender].spotion += msp1 * 1
                        global.db.data.users[m.sender].mpotion += mmp1 * 1
                        global.db.data.users[m.sender].common += mc1 * 1
                        global.db.data.users[m.sender].uncommon += mu1 * 1
                        conn.reply(m.chat, Mychat1, m)
                        if (mmm1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n🎁 ${mmm1} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += mmm1 * 1
                        }
                        if (ml1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${ml1} Legendary Crate`)
                            global.db.data.users[m.sender].legendary += ml1 * 1
                        }
                    } else conn.reply(m.chat, '🎁 Mythic crate anda tidak cukup', m)
                    break
                case '100':
                    let _mk2 = `${Math.floor(Math.random() * 25000)}`.trim()
                    let _ms2 = `${Math.floor(Math.random() * 79000)}`.trim()
                    let _mmm2 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _me2 = `${Math.floor(Math.random() * 30000)}`.trim()
                    let _msp2 = `${Math.floor(Math.random() * 59)}`.trim()
                    let _mmp2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _mu2 = `${Math.floor(Math.random() * 80)}`.trim()
                    let _mc2 = `${Math.floor(Math.random() * 150)}`.trim()
                    let _ml2 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _md2 = `${Math.floor(Math.random() * 20)}`.trim()
                    let mk2 = (_mk2 * 1)
                    let ms2 = (_ms2 * 1)
                    let mmm2 = (_mmm2 * 1)
                    let me2 = (_me2 * 1)
                    let msp2 = (_msp2 * 1)
                    let mmp2 = (_mmp2 * 1)
                    let mu2 = (_mu2 * 1)
                    let mc2 = (_mc2 * 1)
                    let ml2 = (_ml2 * 1)
                    let md2 = (_md2 * 1)
                    let Mychat2 = `
Anda telah membuka 🎁 *Mythic crate* dan mendapatkan:${mk2 > 0 ? `\n🪙 Koin: ${mk2}` : ''}${ms2 > 0 ? `\n💵 Saldo: ${ms2}` : ''}${me2 > 0 ? `\n🔗 Exp: ${me2} *Exp*` : ''}${md2 > 0 ? `\n💎 Diamond: ${md2} *Diamond*` : ''}${msp2 > 0 ? `\n🧃 Small Potion: ${msp2} *Potion*` : ''}${mmp2 > 0 ? `\n🧃 Medium Potion: ${mmp2} *Potion*` : ''}${mc2 > 0 ? `\n🎁 Common crate: ${mc2} *Crate*` : ''}${mu2 > 0 ? `\n🎁 Uncommon crate: ${mu2} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 100) {
                        global.db.data.users[m.sender].mythic -= 100
                        global.db.data.users[m.sender].koin += mk2 * 1
                        global.db.data.users[m.sender].uang += ms2 * 1
                        global.db.data.users[m.sender].diamond += md2 * 1
                        global.db.data.users[m.sender].exp += me2 * 1
                        global.db.data.users[m.sender].spotion += msp2 * 1
                        global.db.data.users[m.sender].mpotion += mmp2 * 1
                        global.db.data.users[m.sender].common += mc2 * 1
                        global.db.data.users[m.sender].uncommon += mu2 * 1
                        conn.reply(m.chat, Mychat2, m)
                        if (mmm2 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n🎁 ${mmm2} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += mmm2 * 1
                        }
                        if (ml2 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${ml2} Legendary Crate`)
                            global.db.data.users[m.sender].legendary += ml2 * 1
                        }
                    } else conn.reply(m.chat, '🎁 Mythic crate anda tidak cukup', m)
                    break
                case '1000':
                    let _mk3 = `${Math.floor(Math.random() * 95000)}`.trim()
                    let _ms3 = `${Math.floor(Math.random() * 157000)}`.trim()
                    let _mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _me3 = `${Math.floor(Math.random() * 75000)}`.trim()
                    let _msp3 = `${Math.floor(Math.random() * 85)}`.trim()
                    let _mmp3 = `${Math.floor(Math.random() * 70)}`.trim()
                    let _mu3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mc3 = `${Math.floor(Math.random() * 750)}`.trim()
                    let _ml3 = `${Math.floor(Math.random() * 10)}`.trim()
                    let _md3 = `${Math.floor(Math.random() * 50)}`.trim()
                    let mk3 = (_mk3 * 1)
                    let ms3 = (_ms3 * 1)
                    let mmm3 = (_mmm3 * 1)
                    let me3 = (_me3 * 1)
                    let msp3 = (_msp3 * 1)
                    let mmp3 = (_mmp3 * 1)
                    let mu3 = (_mu3 * 1)
                    let mc3 = (_mc3 * 1)
                    let ml3 = (_ml3 * 1)
                    let md3 = (_md3 * 1)
                    let Mychat3 = `
Anda telah membuka 🎁 *Mythic crate* dan mendapatkan:${mk3 > 0 ? `\n🪙 Koin: ${mk3}` : ''}${ms3 > 0 ? `\n💵 Saldo: ${ms3}` : ''}${me3 > 0 ? `\n🔗 Exp: ${me3} *Exp*` : ''}${md3 > 0 ? `\n💎 Diamond: ${md3} *Diamond*` : ''}${msp3 > 0 ? `\n🧃 Small Potion: ${msp3} *Potion*` : ''}${mmp3 > 0 ? `\n🧃 Medium Potion: ${mmp3} *Potion*` : ''}${mc3 > 0 ? `\n🎁 Common crate: ${mc3} *Crate*` : ''}${mu3 > 0 ? `\n🎁 Uncommon crate: ${mu3} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 1000) {
                        global.db.data.users[m.sender].mythic -= 1000
                        global.db.data.users[m.sender].koin += mk3 * 1
                        global.db.data.users[m.sender].uang += ms3 * 1
                        global.db.data.users[m.sender].diamond += md3 * 1
                        global.db.data.users[m.sender].exp += me3 * 1
                        global.db.data.users[m.sender].spotion += msp3 * 1
                        global.db.data.users[m.sender].mpotion += mmp3 * 1
                        global.db.data.users[m.sender].common += mc3 * 1
                        global.db.data.users[m.sender].uncommon += mu3 * 1
                        conn.reply(m.chat, Mychat3, m)
                        if (mmm3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n🎁 ${mmm3} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += mmm3 * 1
                        }
                        if (ml3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${ml3} Legendary Crate`)
                            global.db.data.users[m.sender].legendary += ml3 * 1
                        }
                    } else conn.reply(m.chat, '🎁 Mythic crate anda tidak cukup', m)
                    break
                case '10000':
                    let _mk4 = `${Math.floor(Math.random() * 950000)}`.trim()
                    let _ms4 = `${Math.floor(Math.random() * 150000)}`.trim()
                    let _mmm4 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _me4 = `${Math.floor(Math.random() * 750000)}`.trim()
                    let _msp4 = `${Math.floor(Math.random() * 850)}`.trim()
                    let _mmp4 = `${Math.floor(Math.random() * 700)}`.trim()
                    let _mu4 = `${Math.floor(Math.random() * 2500)}`.trim()
                    let _mc4 = `${Math.floor(Math.random() * 7500)}`.trim()
                    let _ml4 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _md4 = `${Math.floor(Math.random() * 500)}`.trim()
                    let mk4 = (_mk4 * 1)
                    let ms4 = (_ms4 * 1)
                    let mmm4 = (_mmm4 * 1)
                    let me4 = (_me4 * 1)
                    let msp4 = (_msp4 * 1)
                    let mmp4 = (_mmp4 * 1)
                    let mu4 = (_mu4 * 1)
                    let mc4 = (_mc4 * 1)
                    let ml4 = (_ml4 * 1)
                    let md4 = (_md4 * 1)
                    let Mychat4 = `
Anda telah membuka 🎁 *Mythic crate* dan mendapatkan:${mk4 > 0 ? `\n🪙 Koin: ${mk4}` : ''}${ms4 > 0 ? `\n💵 Saldo: ${ms4}` : ''}${me4 > 0 ? `\n🔗 Exp: ${me4} *Exp*` : ''}${md4 > 0 ? `\n💎 Diamond: ${md4} *Diamond*` : ''}${msp4 > 0 ? `\n🧃 Small Potion: ${msp4} *Potion*` : ''}${mmp4 > 0 ? `\n🧃 Medium Potion: ${mmp4} *Potion*` : ''}${mc4 > 0 ? `\n🎁 Common crate: ${mc4} *Crate*` : ''}${mu4 > 0 ? `\n🎁 Uncommon crate: ${mu4} *Crate*` : ''}
`.trim()
                    if (global.db.data.users[m.sender].mythic >= 10000) {
                        global.db.data.users[m.sender].mythic -= 10000
                        global.db.data.users[m.sender].koin += mk4 * 1
                        global.db.data.users[m.sender].uang += ms4 * 1
                        global.db.data.users[m.sender].diamond += md4 * 1
                        global.db.data.users[m.sender].exp += me4 * 1
                        global.db.data.users[m.sender].spotion += msp4 * 1
                        global.db.data.users[m.sender].mpotion += mmp4 * 1
                        global.db.data.users[m.sender].common += mc4 * 1
                        global.db.data.users[m.sender].uncommon += mu4 * 1
                        conn.reply(m.chat, Mychat4, m)
                        if (mmm4 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Rare yaitu*\n🎁 ${mmm4} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += mmm4 * 1
                        }
                        if (ml4 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${ml4} Legendary Crate`)
                            global.db.data.users[m.sender].legendary += ml4 * 1
                        }
                    } else conn.reply(m.chat, '🎁 Mythic crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'legendary':
            switch (jumlah) {
                case '1':
                case 'crate':
                    let _lk = `${Math.floor(Math.random() * 450)}`.trim()
                    let _ls = `${Math.floor(Math.random() * 7000)}`.trim()
                    let _le = `${Math.floor(Math.random() * 550)}`.trim()
                    let _lmp = `${Math.floor(Math.random() * 3)}`.trim()
                    let _lhp = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lpp = `${pickRandom(['0', '1', '0'])}`.trim()
                    let _ld = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
                    let lk = (_lk * 1)
                    let ls = (_ls * 1)
                    let le = (_le * 1)
                    let lmp = (_lmp * 1) 
                    let lhp = (_lhp * 1) 
                    let lpp = (_lpp * 1)       
                    let ld = (_ld * 1) 
                    let lmm = (_lmm * 1)
                    let Lechat = `
Anda telah membuka 🎁 *Legendary crate* dan mendapatkan:${lk > 0 ? `\n🪙 Koin: ${lk}` : ''}${ls > 0 ? `\n💵 Saldo: ${ls}` : ''}${le > 0 ? `\n🔗 Exp: ${le} *Exp*` : ''}${ld > 0 ? `\n💎 Diamond: ${ld} *Diamond*` : ''}${lmp > 0 ? `\n🧃 Medium Potion: ${lmp} *Potion*` : ''}${lhp > 0 ? `\n🧃 High Potion: ${lhp} *Potion*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 1) {
                        global.db.data.users[m.sender].legendary -= 1
                        global.db.data.users[m.sender].koin += lk * 1
                        global.db.data.users[m.sender].uang += ls * 1
                        global.db.data.users[m.sender].diamond += ld * 1
                        global.db.data.users[m.sender].exp += le * 1
                        global.db.data.users[m.sender].mpotion += lmp * 1
                        global.db.data.users[m.sender].hpotion += lhp * 1
                        conn.reply(m.chat, Lechat, m)
                        if (lmm > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${lmm} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm * 1
                        }
                        if (lpp > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n📦 ${lpp} Pet Crate`)
                            global.db.data.users[m.sender].pet += lpp * 1
                        }
                    } else conn.reply(m.chat, '🎁 Legendary crate anda tidak cukup', m)
                    break
                case '10':
                    let _lk1 = `${Math.floor(Math.random() * 9999)}`.trim()
                    let _ls1 = `${Math.floor(Math.random() * 28000)}`.trim()
                    let _le1 = `${Math.floor(Math.random() * 15000)}`.trim()
                    let _lmp1 = `${Math.floor(Math.random() * 39)}`.trim()
                    let _lhp1 = `${Math.floor(Math.random() * 30)}`.trim()
                    let _lpp1 = `${Math.floor(Math.random() * 6)}`.trim()
                    let _ld1 = `${Math.floor(Math.random() * 16)}`.trim()
                    let _lmm1 = `${Math.floor(Math.random() * 4)}`.trim()
                    let lk1 = (_lk1 * 1)
                    let ls1 = (_ls1 * 1)
                    let le1 = (_le1 * 1)
                    let lmp1 = (_lmp1 * 1) 
                    let lhp1 = (_lhp1 * 1) 
                    let lpp1 = (_lpp1 * 1)       
                    let ld1 = (_ld1 * 1) 
                    let lmm1 = (_lmm1 * 1)
                    let Lechat1 = `
Anda telah membuka 🎁 *Legendary crate* dan mendapatkan:${lk1 > 0 ? `\n🪙 Koin: ${lk1}` : ''}${ls1 > 0 ? `\n💵 Saldo: ${ls1}` : ''}${le1 > 0 ? `\n🔗 Exp: ${le1} *Exp*` : ''}${ld1 > 0 ? `\n💎 Diamond: ${ld1} *Diamond*` : ''}${lmp1 > 0 ? `\n🧃 Medium Potion: ${lmp1} *Potion*` : ''}${lhp1 > 0 ? `\n🧃 High Potion: ${lhp1} *Potion*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 10) {
                        global.db.data.users[m.sender].legendary -= 10
                        global.db.data.users[m.sender].koin += lk1 * 1
                        global.db.data.users[m.sender].uang += ls1 * 1
                        global.db.data.users[m.sender].diamond += ld1 * 1
                        global.db.data.users[m.sender].exp += le1 * 1
                        global.db.data.users[m.sender].mpotion += lmp1 * 1
                        global.db.data.users[m.sender].hpotion += lhp1 * 1
                        conn.reply(m.chat, Lechat1, m)
                        if (lmm1 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${lmm1} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm1 * 1
                        }
                        if (lpp1 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n📦 ${lpp1} Pet Crate`)
                            global.db.data.users[m.sender].pet += lpp1 * 1
                        }
                    } else conn.reply(m.chat, '🎁 Legendary crate anda tidak cukup', m)
                    break
                case '100':
                    let _lk2 = `${Math.floor(Math.random() * 155000)}`.trim()
                    let _ls2 = `${Math.floor(Math.random() * 77000)}`.trim()
                    let _le2 = `${Math.floor(Math.random() * 200000)}`.trim()
                    let _lmp2 = `${Math.floor(Math.random() * 115)}`.trim()
                    let _lhp2 = `${Math.floor(Math.random() * 100)}`.trim()
                    let _lpp2 = `${Math.floor(Math.random() * 51)}`.trim()
                    let _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
                    let _lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
                    let lk2 = (_lk2 * 1)
                    let ls2 = (_ls2 * 1)
                    let le2 = (_le2 * 1)
                    let lmp2 = (_lmp2 * 1) 
                    let lhp2 = (_lhp2 * 1) 
                    let lpp2 = (_lpp2 * 1)       
                    let ld2 = (_ld2 * 1) 
                    let lmm2 = (_lmm2 * 1)
                    let Lechat2 = `
Anda telah membuka 🎁 *Legendary crate* dan mendapatkan:${lk2 > 0 ? `\n🪙 Koin: ${lk2}` : ''}${ls2 > 0 ? `\n💵 Saldo: ${ls2}` : ''}${le2 > 0 ? `\n🔗 Exp: ${le2} *Exp*` : ''}${ld2 > 0 ? `\n💎 Diamond: ${ld2} *Diamond*` : ''}${lmp2 > 0 ? `\n🧃 Medium Potion: ${lmp2} *Potion*` : ''}${lhp2 > 0 ? `\n🧃 High Potion: ${lhp2} *Potion*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 100) {
                        global.db.data.users[m.sender].legendary -= 100
                        global.db.data.users[m.sender].koin += lk2 * 1
                        global.db.data.users[m.sender].uang += ls2 * 1
                        global.db.data.users[m.sender].diamond += ld2 * 1
                        global.db.data.users[m.sender].exp += le2 * 1
                        global.db.data.users[m.sender].mpotion += lmp2 * 1
                        global.db.data.users[m.sender].hpotion += lhp2 * 1
                        conn.reply(m.chat, Lechat2, m)
                        if (lmm2 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${lmm2} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm2 * 1
                        }
                        if (lpp2 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n📦 ${lpp2} Pet Crate`)
                            global.db.data.users[m.sender].pet += lpp2 * 1
                        }
                    } else conn.reply(m.chat, '🎁 Legendary crate anda tidak cukup', m)
                    break
                case '1000':
                    let _lk3 = `${Math.floor(Math.random() * 500000)}`.trim()
                    let _ls3 = `${Math.floor(Math.random() * 180000)}`.trim()
                    let _le3 = `${Math.floor(Math.random() * 5000000)}`.trim()
                    let _lmp3 = `${Math.floor(Math.random() * 550)}`.trim()
                    let _lhp3 = `${Math.floor(Math.random() * 500)}`.trim()
                    let _lpp3 = `${Math.floor(Math.random() * 222)}`.trim()
                    let _ld3 = `${Math.floor(Math.random() * 250)}`.trim()
                    let _lmm3 = `${Math.floor(Math.random() * 111)}`.trim()
                    let lk3 = (_lk3 * 1)
                    let ls3 = (_ls3 * 1)
                    let le3 = (_le3 * 1)
                    let lmp3 = (_lmp3 * 1) 
                    let lhp3 = (_lhp3 * 1) 
                    let lpp3 = (_lpp3 * 1)       
                    let ld3 = (_ld3 * 1) 
                    let lmm3 = (_lmm3 * 1)
                    let Lechat3 = `
Anda telah membuka 🎁 *Legendary crate* dan mendapatkan:${lk3 > 0 ? `\n🪙 Koin: ${lk3}` : ''}${ls3 > 0 ? `\n💵 Saldo: ${ls3}` : ''}${le3 > 0 ? `\n🔗 Exp: ${le3} *Exp*` : ''}${ld3 > 0 ? `\n💎 Diamond: ${ld3} *Diamond*` : ''}${lmp3 > 0 ? `\n🧃 Medium Potion: ${lmp3} *Potion*` : ''}${lhp3 > 0 ? `\n🧃 High Potion: ${lhp3} *Potion*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 1000) {
                        global.db.data.users[m.sender].legendary -= 1000
                        global.db.data.users[m.sender].koin += lk3 * 1
                        global.db.data.users[m.sender].uang += ls3 * 1
                        global.db.data.users[m.sender].diamond += ld3 * 1
                        global.db.data.users[m.sender].exp += le3 * 1
                        global.db.data.users[m.sender].mpotion += lmp3 * 1
                        global.db.data.users[m.sender].hpotion += lhp3 * 1
                        conn.reply(m.chat, Lechat3, m)
                        if (lmm3 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${lmm3} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm3 * 1
                        }
                        if (lpp3 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n📦 ${lpp3} Pet Crate`)
                            global.db.data.users[m.sender].pet += lpp3 * 1
                        }
                    } else conn.reply(m.chat, '🎁 Legendary crate anda tidak cukup', m)
                    break
                case '10000':
                    let _lk4 = `${Math.floor(Math.random() * 5000000)}`.trim()
                    let _ls4 = `${Math.floor(Math.random() * 1800000)}`.trim()
                    let _le4 = `${Math.floor(Math.random() * 500000)}`.trim()
                    let _lmp4 = `${Math.floor(Math.random() * 5250)}`.trim()
                    let _lhp4 = `${Math.floor(Math.random() * 5000)}`.trim()
                    let _lpp4 = `${Math.floor(Math.random() * 2222)}`.trim()
                    let _ld4 = `${Math.floor(Math.random() * 2500)}`.trim()
                    let _lmm4 = `${Math.floor(Math.random() * 1111)}`.trim()
                    let lk4 = (_lk4 * 1)
                    let ls4 = (_ls4 * 1)
                    let le4 = (_le4 * 1)
                    let lmp4 = (_lmp4 * 1) 
                    let lhp4 = (_lhp4 * 1) 
                    let lpp4 = (_lpp4 * 1)       
                    let ld4 = (_ld4 * 1) 
                    let lmm4 = (_lmm4 * 1)
                    let Lechat4 = `
Anda telah membuka 🎁 *Legendary crate* dan mendapatkan:${lk4 > 0 ? `\n🪙 Koin: ${lk4}` : ''}${ls4 > 0 ? `\n💵 Saldo: ${ls4}` : ''}${le4 > 0 ? `\n🔗 Exp: ${le4} *Exp*` : ''}${ld4 > 0 ? `\n💎 Diamond: ${ld4} *Diamond*` : ''}${lmp4 > 0 ? `\n🧃 Medium Potion: ${lmp4} *Potion*` : ''}${lhp4 > 0 ? `\n🧃 High Potion: ${lhp4} *Potion*` : ''}
`.trim()  
                    if (global.db.data.users[m.sender].legendary >= 10000) {
                        global.db.data.users[m.sender].legendary -= 10000
                        global.db.data.users[m.sender].koin += lk4 * 1
                        global.db.data.users[m.sender].uang += ls4 * 1
                        global.db.data.users[m.sender].diamond += ld4 * 1
                        global.db.data.users[m.sender].exp += le4 * 1
                        global.db.data.users[m.sender].mpotion += lmp4 * 1
                        global.db.data.users[m.sender].hpotion += lhp4 * 1
                        conn.reply(m.chat, Lechat4, m)
                        if (lmm4 > 0) {
                            m.reply(`*Selamat anda mendapatkan item Epic yaitu*\n🎁 ${lmm4} Mythic Crate`)
                            global.db.data.users[m.sender].mythic += lmm4 * 1
                        }
                        if (lpp4 > 0) {
                             m.reply(`*Selamat anda mendapatkan item Pet yaitu*\n📦 ${lpp4} Pet Crate`)
                            global.db.data.users[m.sender].pet += lpp4 * 1
                        }
                    } else conn.reply(m.chat, '🎁 Legendary crate anda tidak cukup', m)
                    break
                default:
                    return conn.reply(m.chat, Lmao, m)
            }
            break
        case 'peti':
            let _pk = `${Math.floor(Math.random() * 900000000)}`.trim()
            let _ps = `${Math.floor(Math.random() * 1250000000)}`.trim()
            let _pd = `${Math.floor(Math.random() * 150000)}`.trim()
            let _pi = `${Math.floor(Math.random() * 50000)}`.trim()
            let _pg = `${Math.floor(Math.random() * 25000)}`.trim()
            let _pt = `${Math.floor(Math.random() * 10000)}`.trim()
            let pk = (_pk * 1)
            let ps = (_ps * 1)
            let pd = (_pd * 1)
            let pi = (_pi * 1)
            let pg = (_pg * 1)
            let pt = (_pt * 1)
            let uhoy = `
Anda berhasil membuka *Peti* dan mendapatkan: ${pk > 0 ? `\n\nKoin: ${pk}` : ''}${ps > 0 ? `\nUang: ${ps}` : ''}${pd > 0 ? `\nDiamond: ${pd}` : ''}${pi > 0 ? `\nIron: ${pi}` : ''}${pg > 0 ? `\nGold: ${pg}` : ''}${pt > 0 ? `\nMagic Stone: ${pt}` : ''}
`.trim()
            if (global.db.data.users[m.sender].peti > 0) {
                global.db.data.users[m.sender].peti -= 1
                global.db.data.users[m.sender].koin += pk * 1
                global.db.data.users[m.sender].uang += ps * 1
                global.db.data.users[m.sender].diamond += pd * 1
                global.db.data.users[m.sender].iron += pi * 1
                global.db.data.users[m.sender].gold += pg * 1
                global.db.data.users[m.sender].mgstone += pt * 1
                conn.reply(m.chat, uhoy, m)
               } else conn.reply(m.chat, 'Anda tidak mempunyai peti', m)
          break
        case 'pet':
            let _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
            let mknp = (_mknp * 1)
            let kucing = global.db.data.users[m.sender].kucing
            let anjing = global.db.data.users[m.sender].anjing
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let _pet = `${pickRandom(['kucing', 'anjing', 'rubah', 'kuda'])}`.trim()
            if (global.db.data.users[m.sender].pet > 0) { 
                global.db.data.users[m.sender].pet -= 1
                if (_pet == 'kucing' && kucing > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet} 🐱, Hadiahmu diganti dengan 2 potion 🧃 ${mknp > 0 ? ` Dan ${mknp} Makanan Pet 🍫` : ''}`, m)
                } else if (_pet == 'kucing' && kucing == 0) {
                    global.db.data.users[m.sender].kucing += 1
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet} 🐱 ${mknp > 0 ? ` Dan ${mknp} Makanan Pet* 🍫` : '*'}`, m)
                } else if (_pet == 'anjing' && anjing > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet} 🐶, Hadiahmu diganti dengan 2 potion 🧃 ${mknp > 0 ? ` Dan ${mknp} Makanan Pet 🍫` : ''}`, m)
                } else if (_pet == 'anjing' && anjing == 0) {
                    global.db.data.users[m.sender].anjing += 1
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet} 🐶 ${mknp > 0 ? ` Dan ${mknp} Makanan Pet* 🍫` : '*'}`, m)
                } else if (_pet == 'rubah' && rubah > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet} 🦊, Hadiahmu diganti dengan 2 potion 🧃 ${mknp > 0 ? `Dan ${mknp} Makanan Pet 🍫` : ''}`, m)
                } else if (_pet == 'rubah' && rubah == 0) {
                    global.db.data.users[m.sender].rubah += 1
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet} 🦊 ${mknp > 0 ? ` Dan ${mknp} Makanan Pet* 🍫` : '*'}`, m)
                } else if (_pet == 'kuda' && kuda  > 0) {
                    global.db.data.users[m.sender].potion += 2
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Anda sudah memiliki pet ${_pet}.🐴, Hadiahmu diganti dengan 2 potion 🧃 ${mknp > 0 ? ` Dan ${mknp} Makanan Pet 🍫` : ''}`, m)
                } else if (_pet == 'kuda' && kuda == 0) {
                    global.db.data.users[m.sender].kuda += 1
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `*Selamat Anda mendapatkan pet ${_pet} 🐴 ${mknp > 0 ? ` Dan ${mknp} Makanan Pet* 🍫` : '*'}`, m)
                } else {
                    global.db.data.users[m.sender].makananpet += mknp * 1
                    m.reply(pickRandom(['Anda kurang beruntung', 'Coba buka lagi lain kali, karena gk dapet pet', 'kasian gk dapet pet', 'Mungkin lagi gk hoki dan gk dapet pet', 'wkwkkwkwke']) + '. Anda hanya mendapatkan 🍫 *' + mknp + '* makanan pet')
                }
            } else m.reply('📦 Pet Crate kamu tidak cukup')
            break
        default:
            return conn.reply(m.chat, bruh, m)
    }
  } catch (e) {
      console.log(e)
      conn.reply(m.chat, `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`, m)
      if (DevMode) {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.sendMessage(jid, 'Open.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
        }
    }
  }
}
handler.command = /^(open|buka)$/i
handler.register = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
