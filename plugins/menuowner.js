let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 OWNER MENU 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}addprems_  [ @user ]
┃ ❖ _${usedPrefix}addowner_  [ @user ]
┃ ❖ _${usedPrefix}delowner_  [ @user ]
┃ ❖ _${usedPrefix}banchat_
┃ ❖ _${usedPrefix}unbanchat_
┃ ❖ _${usedPrefix}ban_  [ @user ]
┃ ❖ _${usedPrefix}unban_  [ @user ]
┃ ❖ _${usedPrefix}banlist_
┃ ❖ _${usedPrefix}blocklist_
┃ ❖ _${usedPrefix}broadcast_  [ teks ]
┃ ❖ _${usedPrefix}broadcastgroup_  [ teks ]
┃ ❖ _${usedPrefix}broadcastjadibot_  [ teks ]
┃ ❖ _${usedPrefix}creategroup_
┃ ❖ _${usedPrefix}deletechat_
┃ ❖ _${usedPrefix}deletechat group_
┃ ❖ _${usedPrefix}mutechat_
┃ ❖ _${usedPrefix}mutechat group_
┃ ❖ _${usedPrefix}deleteallchat_
┃ ❖ _${usedPrefix}deleteallchat group_
┃ ❖ _${usedPrefix}muteallchat_
┃ ❖ _${usedPrefix}muteallchat group_
┃ ❖ _${usedPrefix}daftarulang_  [ @user ]
┃ ❖ _${usedPrefix}delprem_  [ @user ]
┃ ❖ _${usedPrefix}debounce_
┃ ❖ _${usedPrefix}enable_  [ options ]
┃ ❖ _${usedPrefix}update_
┃ ❖ _${usedPrefix}update2_
┃ ❖ _${usedPrefix}jadibot_
┃ ❖ _${usedPrefix}getcode_
┃ ❖ _${usedPrefix}stop_
┃ ❖     _>_
┃ ❖    _=>_
┃ ❖ _${usedPrefix}oadd_
┃ ❖ _${usedPrefix}okick_
┃ ❖ _${usedPrefix}opromote_
┃ ❖ _${usedPrefix}odemote_
┃ ❖ _${usedPrefix}pengumuman_
┃ ❖ _${usedPrefix}expired_  [ jumlah hari ]
┃ ❖ _${usedPrefix}leavegc_
┃ ❖ _${usedPrefix}leavegroup_
┃ ❖ _${usedPrefix}leavegroupall_
┃ ❖ _${usedPrefix}setbotbio_
┃ ❖ _${usedPrefix}setbotname_
┃ ❖ _${usedPrefix}setbotpp_
┃ ❖ _${usedPrefix}setbye_
┃ ❖ _${usedPrefix}setwelcome_
┃ ❖ _${usedPrefix}setexif_
┃ ❖ _${usedPrefix}setmenubefore_
┃ ❖ _${usedPrefix}setmenuafter_
┃ ❖ _${usedPrefix}setmenuheader_
┃ ❖ _${usedPrefix}setmenufooter_
┃ ❖ _${usedPrefix}setmenubody_
┃ ❖ _${usedPrefix}sudo_
┃ ❖ _${usedPrefix}upsw_
┃ ❖ _${usedPrefix}whitelist_
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
    conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu nya Yang Punya Bot', 'status@broadcast')
  }
handler.help = ['ownermenu']
handler.tags = ['main']
handler.command = /^ownermenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
