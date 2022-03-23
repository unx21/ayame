let handler  = async (m, { conn, usedPrefix: _p  }) => {
  conn.reply(m.chat, `
Syarat dan Ketentuan Bot *KAMI*

1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data pengguna akan di hapus ketika bot/owner memutuskan untuk berhenti
3. Kami tidak akan menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Mohon untuk tidak melakukan spam atau memberikan perintah berlebihan
7. Apapun yang anda perintah pada bot ini, *KAMI TIDAK AKAN BERTANGGUNG JAWAB!*

*Thanks !*
`.trim(), m)
}
//handler.help = ['rules']
//handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
