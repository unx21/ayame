let fs = require('fs')
let chalk = require('chalk')

global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.wait = "[❗] ```Wait a minute...```"
global.APIs = { // API Prefix
  // name: 'https://website'
  adiisus: 'https://adiixyzapi.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = JSON.parse(fs.readFileSync('./src/apikey.json'))

// Sticker WM

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '© 百鬼あやめ'
  var sticker_author = 'WhatsApp Bot'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author
global.lw = 'https://api.reysekha.xyz/api/textpro/greenhoror?apikey=apirey&text='



global.multiplier = 69 // The higher, The harder levelup


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
