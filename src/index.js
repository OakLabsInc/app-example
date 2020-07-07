const oak = require('oak')
console.log(process.versions)
console.log('REMOTE_URL', process.env.REMOTE_URL)
oak.on('ready', () => {
  oak.load({
    url: process.env.REMOTE_URL || 'http://static.oak.host/signage/index.html',
    ontop: false,
    insecure: true,
    flags: ['enable-vp8-alpha-playback', '--no-sandbox']
  })
})
