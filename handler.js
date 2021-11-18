let util = require('util')
let simple = require('./lib/simple')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
        case MessageType.sticker:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
          if (!isNumber(user.healt)) user.healt = 100
          if (!isNumber(user.stamina)) user.stamina = 100
          if (!isNumber(user.durability)) user.durability = 20
          if (!isNumber(user.magazine)) user.magazine = 12
          
          if (!isNumber(user.lastadventure)) user.lastadventure = 0
          if (!isNumber(user.lastmulung)) user.lastmulung = 0
          if (!isNumber(user.lastnambang)) user.lastnambang = 0
          if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
          if (!isNumber(user.lastberburu)) user.lastberburu = 0
          if (!isNumber(user.lasthunt)) user.lasthunt = 0
          
          if (!isNumber(user.common)) user.common = 0
          if (!isNumber(user.uncommon)) user.uncommon = 0
          if (!isNumber(user.mythic)) user.mythic = 0
          if (!isNumber(user.legendary)) user.legendary = 0
          
          if (!isNumber(user.diamond)) user.diamond = 0
          if (!isNumber(user.potion)) user.potion = 0
          if (!isNumber(user.sampah)) user.sampah = 0

          if (!isNumber(user.ironarmor)) user.ironarmor = 0
          if (!isNumber(user.goldarmor)) user.goldarmor = 0
          if (!isNumber(user.magicarmor)) user.magicarmor = 0
          if (!isNumber(user.peluru)) user.peluru = 0
          if (!isNumber(user.iron)) user.iron = 0
          if (!isNumber(user.gold)) user.gold = 0
          if (!isNumber(user.mgstone)) user.mgstone = 0
          if (!isNumber(user.peti)) user.peti = 0
          
          if (!isNumber(user.slime)) user.slime = 0
          if (!isNumber(user.skeleton)) user.skeleton = 0
          if (!isNumber(user.goblin)) user.goblin = 0
          if (!isNumber(user.wolf)) user.wolf = 0
          if (!isNumber(user.sprtgrass)) user.sprtgrass = 0
          if (!isNumber(user.mdgrleaf)) user.mdgrleaf = 0
          if (!isNumber(user.hpktplant)) user.hpktplant = 0
          if (!isNumber(user.spotion)) user.spotion = 0
          
          if (!isNumber(user.kayu)) user.kayu = 0
          if (!isNumber(user.rusa)) user.rusa = 0
          if (!isNumber(user.rusabakar)) user.rusabakar = 0
          if (!isNumber(user.bison)) user.bison = 0
          if (!isNumber(user.bisonbakar)) user.bisonbakar = 0
          if (!isNumber(user.babi)) user.babi = 0
          if (!isNumber(user.babibakar)) user.babibakar = 0
          if (!isNumber(user.kalkun)) user.kalkun = 0
          if (!isNumber(user.kalkunbakar)) user.kalkunbakar = 0
          if (!isNumber(user.kelinci)) user.kelinci = 0
          if (!isNumber(user.kelincibakar)) user.kelincibakar = 0
          
          if (!isNumber(user.pet)) user.pet = 0
          if (!isNumber(user.kucing)) user.kucing = 0         
          if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
          if (!isNumber(user.kuda)) user.kuda = 0
          if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
          if (!isNumber(user.rubah)) user.rubah = 0
          if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
          if (!isNumber(user.anjing)) user.anjing = 0
          if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
          
          if (!isNumber(user.anakkucing)) user.anakkucing = 0
          if (!isNumber(user.anakkuda)) user.anakkuda = 0
          if (!isNumber(user.anakrubah)) user.anakrubah = 0
          if (!isNumber(user.anakanjing)) user.anakanjing = 0
          if (!isNumber(user.makananpet)) user.makananpet = 0
          
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.uang)) user.uang = 0
          if (!isNumber(user.koin)) user.koin = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!isNumber(user.warn)) user.warn = 0
          if (!isNumber(user.lastmining)) user.lastmining = 0
          if (!isNumber(user.lastgift)) user.lastgift = 0
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!isNumber(user.lastdaily)) user.lastdaily = 0
          if (!isNumber(user.premdate)) user.premdate = 0
          if (!('registered' in user)) user.registered = false
          if (!user.registered) {
            if (!('name' in user)) user.name = this.getName(m.sender)
            if (!isNumber(user.age)) user.age = -1
            if (!isNumber(user.regTime)) user.regTime = -1
          }
          if (!isNumber(user.afk)) user.afk = -1
          if (!('afkReason' in user)) user.afkReason = ''
          if (!('banned' in user)) user.banned = false
          if (!isNumber(user.level)) user.level = 0
          if (!user.role) user.role = 'Warrior V'
          if (!('autolevelup' in user)) user.autolevelup = true
        } else global.db.data.users[m.sender] = {
          healt: 100,
          stamina: 100,
          durability: 20,
          magazine: 12,
          diamond: 0,
          iron: 0,
          common: 0,
          uncommon: 0,
          mythic: 0,
          legendary: 0,
          pet: 0,
          potion: 0,
          sampah: 0,
          iron: 0,
          gold: 0,
          mgstone: 0,
          peti: 0,
          ironarmor: 0,
          goldarmor: 0,
          magicarmor: 0,
          peluru: 0,
          slime: 0,
          goblin: 0,
          skeleton: 0,
          wolf: 0,
          sprtgrass: 0,
          mdgrleaf: 0,
          hpktplant: 0,
          spotion: 0,
          kayu: 0,
          rusa: 0,
          rusabakar: 0,
          babi: 0,
          babibakar: 0,
          kalkun: 0,
          kalkunbakar: 0,
          kelinci: 0,
          kelincibakar: 0,
          bison: 0,
          bisonbakar: 0,
          kucing: 0,
          kucinglastclaim: 0,
          kuda: 0,
          kudalastclaim: 0,
          rubah: 0,
          rubahlastclaim: 0,
          anakkucing: 0,
          anakkuda: 0,
          anakrubah: 0,
          makananpet: 0,
          uang: 0,
          koin: 0,
          exp: 0,
          limit: 10,
          warn: 0,
          lastmining: 0,
          lastgift: 0,
          lastclaim: 0,
          lastdaily: 0,
          lastberburu: 0,
          lasthunt: 0,
          lastadventure: 0,
          lastmulung: 0,
          lastdungeon: 0,
          lastnambang: 0,
          premdate: 0,
          registered: false,
          name: this.getName(m.sender),
          age: -1,
          regTime: -1,
          afk: -1,
          afkReason: '',
          banned: false,
          level: 0,
          role: 'Warrior V',
          autolevelup: true,
        }

        let chat = global.db.data.chats[m.chat]
        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('delete' in chat)) chat.delete = false
          if (!('antiLink' in chat)) chat.antiLink = true
          if (!('viewonce' in chat)) chat.viewonce = true
          if (!isNumber(chat.expired)) chat.expired = 0
        } else global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          delete: false,
          antiLink: true,
          viewonce: true,
          expired: 0,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!(global.owner.includes(m.sender.split("@")[0]) || m.fromMe) && opts['self']) return
      if (opts['pconly'] && m.chat.endsWith('g.us')) return
      if (opts['gconly'] && !m.chat.endsWith('g.us')) return
      if (opts['swonly'] && m.chat !== 'status@broadcast') return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
            let chat = global.db.data.chats[m.chat]
            let user = global.db.data.users[m.sender]
            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
            if (name != 'unbanuser.js' && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
          if (xp > 200) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
            continue // Limit habis
          }
          if (plugin.level > _user.level) {
            this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
            continue // If the level has not been reached
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e.message ? e.message : e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
          }
          break
        }
      }
    } finally {
      //console.log(global.db.data.users[m.sender])
      let user, stats = global.db.data.stats
      if (m) {
        if (m.sender && (user = global.db.data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
      if (opts['autoread']) await this.chatRead(m.chat).catch(() => { })
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.db.data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            let pp = './src/avatar_contact.png'
            try {
              pp = await this.getProfilePicture(user)
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc) :
                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
              this.sendFile(jid, pp, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.db.data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.reply(m.key.remoteJid, `
Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan

Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    let { from } = json[2][0][1]
    let users = global.db.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
          return
        break
    }
    await this.sendMessage(from, 'Maaf, karena anda menelfon bot. anda diblokir otomatis', MessageType.extendedText)
    await this.blockUser(from, 'add')
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: '_Perintah ini hanya dapat digunakan oleh Master_',
    owner: '_Perintah ini hanya dapat digunakan oleh Owner Bot_',
    mods: '_Perintah ini hanya dapat digunakan oleh Moderator_',
    premium: '_Perintah ini hanya untuk member Premium_',
    group: '_Perintah ini hanya dapat digunakan di grup_',
    private: '_Perintah ini hanya dapat digunakan di Chat Pribadi_',
    admin: '_Perintah ini hanya untuk *Admin* grup_',
    botAdmin: '_Jadikan bot sebagai *Admin* untuk menggunakan perintah ini_',
    unreg: `Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama|umur*\n\nContoh: *#daftar 百鬼あやめ.19*`
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
