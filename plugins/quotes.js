let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`"${pickRandom(global.quotes)}"`, m)
}
handler.command = /^quote(s)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.quotes = [
"Merelakan bukan berarti menyerah, hanya saja lebih seperti menyadari bahwa ada hal-hal yang tak bisa di paksakan.",
"Waktu adalah pemberian terbaik. Ketika seseorang memberikan waktunya, dia memberikan bagian dari hidupnya yang tak bisa diambil kembali.",
"Jangan habiskan waktumu untuk menunggu seseorang yang bahkan tidak mau tau dan peduli terhadap perasaanmu.",
"Aku hanyalah penikmat senyummu, bukan pemilik apalagi penyebab.",
"Bahkan denganmu aku lupa bahwa aku pernah terluka, kau mampu tawarkan rasa nyaman dan tenang walau hanya sebatas teman.",
"Orang yang tertawa dan selalu mengukir tawa tidak selalu sedang bahagia,  kadang dia pandai dalam hal menyembunyikan luka.",
"Aku rindu, tapi bukan kepadamu. Aku rindu diriku yang dulu, yang bisa baik-baik saja tanpamu.",
"Ia telah pergi, meninggalkanmu sendiri, dan tak akan kembali lagi. Kau terluka, dan memaksa dirimu untuk lupa.",
"Hanya duduk diam di lantai, menyandarkan kepala di dinding, sambil mendengarkan suara kematian yang mengerikan secara perlahan.",
"Sedang mencari warna yang lebih gelap, warna yang lebih berkabung untuk dipakai berduka bagi diri sendiri.",
"Dalam imajinasiku kau hidup namun dalam nyataku kau redup, dalam mimpiku kau begitu nyata. Tapi dalam nyataku, kau seperti mimpi.",
"Hanya karena kita berbeda bukan berarti mereka sempurna.",
"Di kelilingi oleh rasa iba.",
"Kita cuma menunggu, nanti juga tahu.",
"Hanya bisa merasa hingga akhirnya mati rasa.",
"Sibuk berlayar, lupa bersandar.",
"Kita saling sembunyi hingga malam kembali sunyi.",
"The best way to remove your lies is to make them come true.",
"False tears brings pain to those around you , a false smile brings pain to your self.",
"Saya pernah berekspektasi tinggi tapi kecewa, kecewa itu tadi mengajarkan saya tentang mencintai tak perlu penuh.",
"Sebab kau adalah Luka sekaligus Penyembuh yang aku suka.",
"Bukan karena kau tidak sanggup, tetapi karena kau sendiri tidak mau.",
"Sebuah bagian yang tak terhindarkan dari kehidupan yang di sebut jujur pada diri sendiri.",
"Menjadi orang biasa yang menyedihkan hanya untuk menikmati hidup.",
"Yang di genggam jangan di lepaskan, karena yang memilih pergi tak selalu kembali meski kesempatan datang berkali-kali.",
"Here after a lot of struggle.",
"How if you've got a warm heart?, but it's disintegrating?.",
"Pick it all up and start again, if you've got a second chance. You should go home, escape from it all.",
"Untuk berubah atau tetap menjadi orang yang sama?.",
"Mungkin alasan kalau aku masih ada disini karena memang aku tidak ingin pergi.",
"Meski terlihat memudar, tetapi itu tidak akan pernah hilang.",
"Bukankah ada kebenaran yang sebaiknya dilupakan?.",
"Am i in love?, or in love with of idea of being needed by another?.",
"Smile, because it confuses people. Smile, because it's easier than explaining what killing you inside.",
"Loving someone who doesn't love you back is like hugging a cactus. the tighter you hold on the more it hurt.",
"When you wanna cry, but there's no more tears.",
"Smile doesn't always mean you're happy, sometimes it simple mean that you're strong person.",
"Love being alone just hate the feeling of being lonely.",
"Jangan menyesal menunggu seseorang, meski yang kau dapatkan ia tak pernah datang, setidaknya kau telah belajar berjuang.",
"Ada yang mematahkan beberapa hati demi memperjuangkan satu hati yang ternyata hati yang dia perjuangkan, mematahkan hatinya sendiri.",
"Kau itu hanya manusia biasa, sesekali cobalah menggerutu, apa tak lelah terlihat lucu?.",
"Mungkin belum waktunya atau memang bukan takdirnya, cobalah berdamai dengan hati, luka tak selamanya hanya jeda sebelum bahagia menyapa.",
"In the end, we only regret the chance we didn't take.",
"Tegur sapa yang menjadi asing tanpa tahu sebab.",
"Apakah semua kebahagiaan hingga kemarin lebih baik menjadi bagian dari mimpi juga?.",
"Gelap nan dingin, entah nyaman atau kelam, masing-masing memiliki peran untuk menggambarkan waktu tengah malam.",
"Respect your pillow, they are the only one who catch your tears when no one else will.",
"Bagaimana kau bisa mengharapkan kebahagiaan orang lain bahkan dengan mengorbankan dirimu sendiri?.",
"Merenunglah hingga kau mencapai titik bahwa itu adalah kisah yang menyedihkan.",
"Apakah dia tersenyum karena lega?\natau karena hanya ingin terlihat baik-baik saja?.",
"Apa kau ragu ?\nMenyimpan semua pengalaman yang memilukan untuk dirimu sendiri?\n\nAtau ingin berbagi kesedihan?\nMungkin dengan berbagi, kesedihan itu mungkin tidak begitu menyakitkan.",
"Bagian terburuk tentang menjadi kuat adalah, tidak ada yang bertanya apakah kau baik-baik saja.",
"Membantu orang lain bukan alasan untuk menyakiti dirimu sendiri.\nItu tetap berlaku meski kau sudah terbiasa dengan rasa sakit.\nKau harus sadar, bahwa ada orang lain yang tersakiti jika melihatmu disakiti.",
"Bukan hal yang dimengerti dengan hanya dipikirkan saja.\n\nJika tak bisa dimengerti.\n\nPikirkan lagi lebih dalam.\n\nJika hanya bisa memperhitungkannya, maka teruslah begitu.\n\nPerhitungkan semua solusi yang ada, lalu singkirkan satu per satu.\n\nDan yang terakhir akan menjadi jawaban mu.\n\nMeski kau tetap tak mengerti.\n\nMungkin hanya salah perhitungan, atau ada hal yang gagal kau pahami.\n\nMulai lagi dengan perhitungan yang berbeda.\n\nJawaban terakhir yang tak bisa di perhitungkan.\n\nItulah yang di sebut perasaan manusia. ",
"Sebagian dibiarkan sendirian.\n\nKesulitan mencari tempat bernaung tanpa suatu dukungan.\n\nBersembunyi mengikuti arus, mencari jejak dalam keramaian.\n\nSampai terhenti oleh dinding yang tak terlihat. ",
"Telah berusaha keras untuk menerima nya.\n\nMemutar balikkan bentuk dan kata-kata.\n\nLalu memalingkan diri.\n\nMembuat alasan dan bersikap logis.\n\nItulah cara menipu diri dan menghindari kenyataan, kan ?. ",
"Mungkin kesedihanmu kali ini, itu dibuat untuk cerita yang lebih indah.",
"Tinggal dibuang ke pinggir, dan yang tersisa hanya membusuk oleh hujan dan angin yang menerpa nya.",
"Dan tanpa sadar, Kau akhirnya berhenti mengejar mimpimu. Dan kemudian kamu, yang dulunya adalah seorang pemimpi, sekarang menjadi orang yang hanya menertawakan mimpi orang lain. Kau hanya ingin tertawa dan membohongi diri sendiri.",
"In solitude where we are least alone.",
"The best time to confess,\nIs not when you've just meet,\nNot in anger, not in waiting,\nNo through secret, no through pain,\nThe best time is not in doubt, nor life and death\nNot when bound by duty, and not in parting\nThe best time is ...when you're finally free\nAnd even without words, you can tell them \nOver and over and over again.",
"Hatinya remuk, tak lagi terbentuk.\nPerasaannya telah habis terkuras\nIa depresi berat, berkepanjangan.",
"Tak semua yang ditinggalkan akan kecewa\nTak semua yang meninggalkan akan baik-baik saja\nPada akhirnya Tuhan sama adilnya.",
"Titik terlemah mencintai adalah ketika\nSeseorang memohon kepada Tuhan\nBukan tentang ingin memiliki melainkan\nAgar Tuhan melapangkan hatinya untuk mengikhlaskan.",
"Wins and loses that make you more mature, cry and get up"
"Tidak semua cerita harus dipercaya\nTidak semua kata-kata harus diikuti\nKadang, kita hanya perlu merenung\Meminta keyakinan dari Tuhan\nLalu, hadapi saja tanpa perlu banyak bicara."
]
