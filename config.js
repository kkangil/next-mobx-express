const NODE_ENV = process.env.NODE_ENV || 'develop'

let config = {
  port: 8080,
  db: {
    host: 'db_host',
    database: 'dev',
    username: 'dev',
    password: 'qwerTY!@',
    dialect: 'mysql',
    timezone: '+09:00',
    forceSync: false,
    alter: false
  },
  sentry: {
    DSN: ''
  },
  privateKey: 'next-mobx-express-boilerplate',
  header: {
    token: 'x-access-token'
  },
  pagination: {
    defaultPage: 1,
    defaultPageSize: 10
  }
}

if (NODE_ENV == 'public-develop') {
  config.port = 8041
}

if (NODE_ENV == 'production') {
  config.port = 10080
}

module.exports = config