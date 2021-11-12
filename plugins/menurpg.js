let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
╭── *〘 EPIC RPG 〙*
│
│
│ ⌬ _${usedPrefix}adventure_
│ ⌬ _${usedPrefix}berpetualang_
│ ⌬ _${usedPrefix}mulung_
│ ⌬ _${usedPrefix}work_
│ ⌬ _${usedPrefix}feed_  [ pet ]
│ ⌬ _${usedPrefix}inv_
│ ⌬ _${usedPrefix}inventory_
│ ⌬ _${usedPrefix}perlengkapan_
│ ⌬ _${usedPrefix}open_  [ crate  jumlah ]
│ ⌬ _${usedPrefix}open_  [ pet ]
│ ⌬ _${usedPrefix}shop_  [ buy/sell  item ]
│ ⌬ _${usedPrefix}toko_  [ buy/sell  item ]
│ ⌬ _${usedPrefix}use_  [ potion  jumlah ]
│ ⌬ _${usedPrefix}heal_
│ ⌬ _${usedPrefix}dungeon_
│ ⌬ _${usedPrefix}meracik_  [ herbal  jumlah ]
│ ⌬ _${usedPrefix}racik_  [ herbal  jumlah ]
│ ⌬ _${usedPrefix}barter_  [ jumlah ]
│ ⌬ _${usedPrefix}barterall_
│ ⌬ _${usedPrefix}bedah_  [ monster  jumlah ]
│ ⌬ _${usedPrefix}berburu_
│ ⌬ _${usedPrefix}hunt_
│ ⌬ _${usedPrefix}cook_  [ buruan  jumlah ]
│ ⌬ _${usedPrefix}masak_  [ buruan  jumlah ]
│ ⌬ _${usedPrefix}eat_  [ masakan  jumlah ]
│ ⌬ _${usedPrefix}makan_  [ masakan  jumlah ]
│ ⌬ _${usedPrefix}isi_  [ peluru  jumlah ]
│ ⌬ _${usedPrefix}reload_
│ ⌬ _${usedPrefix}nambang_
│ ⌬ _${usedPrefix}menambang_
│ ⌬ _${usedPrefix}bertambang_
│ ⌬ _${usedPrefix}menempa_  [ item  jumlah ]
│ ⌬ _${usedPrefix}tempa_  [ item  jumlah ]
│ ⌬ _${usedPrefix}gunakan_  [ armor  jumlah ]
│ ⌬ _${usedPrefix}pakai_  [ armor  jumlah ]
│ ⌬ _${usedPrefix}tutorial_
╰─────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Untuk Bermain RPG', 'status@broadcast')
  }
handler.help = ['rpgmenu']
handler.tags = ['main']
handler.command = /^rpgmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler