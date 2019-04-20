const oak = require('oak')

oak.on('ready', () => {
  oak.load({
    url: process.env.REMOTE_URL || 'https://www.zivelo.com'
  })
})
