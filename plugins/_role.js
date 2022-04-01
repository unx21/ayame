const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Beginner': 0,
  'Bronze III': 10,
  'Bronze II': 20,
  'Bronze I': 30,
  'Silver III': 40,
  'Silver II': 50,
  'Silver I': 60,
  'Gold III': 70,
  'Gold II': 80,
  'Gold I': 90,
  'Crystal III': 100,
  'Crystal II': 110,
  'Crystal I': 120,
  'Champion III': 130,
  'Champion II': 140,
  'Champion I': 150,
  'Crown III': 160,
  'Crown II': 170,
  'Crown I': 180,
  'Titan III': 190,
  'Titan II': 200,
  'Titan I': 210,
  'LEGEND III': 220,
  'LEGEND II': 230,
  'LEGEND I': 240,
  'M Y T H': 250,
  'O R I G I N': 5000,
  'C H E A T E R': 5252
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
