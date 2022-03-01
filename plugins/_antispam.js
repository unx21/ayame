module.exports = {
    async all(m) {
        if (!m.message) return
        this.spam = this.spam ? this.spam : {}
        if (m.isBaileys && m.fromMe) return true
        if (isOwner) return
        if (m.sender in this.spam) {
            this.spam[m.sender].count++
            if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
                if (this.spam[m.sender].count > 10) {
                    global.db.data.users[m.sender].banned = true
                    m.reply('*Terdeteksi Spam, Kamu Telah Di Ban Karena Melanggar Rules No.6*\nTerimaKasih')
                }
                this.spam[m.sender].count = 0
                this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            }
        }
        else this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
    }
}
