const oak = require('oak')
console.log(process.env)
console.log("REMOTE_URL", process.env.REMOTE_URL)
oak.on('ready', () => {
  oak.load({
    url: process.env.REMOTE_URL || 'https://www.zivelo.com'
  })
})
