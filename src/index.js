const oak = require('oak')
console.log(process.env)
oak.on('ready', () => {
  oak.load({
    url: process.env.REMOTE_URL || 'https://www.zivelo.com'
  })
})
