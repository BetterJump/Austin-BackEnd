module.exports = {
  apps: [{
    name: 'Austin-BackEnd',
    script: './app/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-224-21-237.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/jumpstartBackEnd.pem',
      ref: 'origin/master',
      repo: 'https://github.com/BetterJump/Austin-BackEnd.git',
      path: '/home/ubuntu/Austin-BackEnd',
      'post-deploy': 'npm run start && pm2 startOrRestart ecosystem.config.js'
    }
  }
}