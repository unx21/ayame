let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!/^https?:\/\//.test(text)) throw 'Awali *URL* dengan http:// atau https://'
  await m.reply(global.wait)
  let res = await fetch('http://docs-jojo.herokuapp.com/api/shorturl-at?url='+text)
  let json = await res.json()
  let { 
    result
  } = json
  await m.reply('Your url: \n\n'+result)
}
//handler.help = ['shorturl']
//handler.tags = ['converter']
handler.command = /^shorturl/i
handler.register = true
handler.limit = true

module.exports = handler
  