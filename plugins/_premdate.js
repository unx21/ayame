let handler = m => m
let fs = require('fs')
let json = JSON.parse(fs.readFileSync('./src/premium.json'))
handler.before = async function (m) {
    let user = global.db.data.users[m.sender]
    
    if (json.map(v => v.replace(/[^0-9]/g, '')).includes(m.sender.split`@`[0]) && user.premdate && !user.premdate == 0) {
        if (user.premdate < new Date() * 1) {
            delete require.cache[require.resolve('../config')]
            require('../config')
            let index = json.indexOf(m.sender.split`@`[0])
            await json.splice(index, 1)
            fs.writeFileSync('./src/premium.json', JSON.stringify(json))
            db.data.users[m.sender].premdate = 0
            delete require.cache[require.resolve('../config')]
            require('../config')
            this.send2Button(m.sender, `_Dear ${await conn.getName(m.sender)}, Masa aktif premium kamu telah habis_`, 'Silahkan perpanjang ke Owner', 'Perpanjang', '.premium', 'Owner', '.owner')
        }
    }

}
module.exports = handler