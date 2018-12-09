const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const config = require("./config")
const models = require("./models");
const render = require('./render')
const api = require("./api")

app.prepare().then(async () => {
  await models.sequelize.sync({
    force: config.db.forceSync,
    alter: config.db.alter
  });
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  /**
   * render view
   */
  server.get('/', render.getMainPage(app))
  server.get('/posts', render.getPostsPage(app))

  /**
   * api
   */
  server.use('/api', api)

  server.get("*", (req, res) => {
    handle(req, res);
  });

  // error handler
  server.use(function (err, req, res, next) {
    const error = {
      project: config.project,
      version: config.version,
      host: req.headers.host,
      'user-agent': req.headers['user-agent'],
      url: req.url,
      status: err.status || 500,
      method: req.method,
      message: err.message || err.text || 'There was an error on API server',
      userId: req.validUser ? req.validUser.id : null,
      env: process.env.NODE_ENV
    }

    res.status(err.status || 500).json(error)
  });

  server.listen(config.port)
});
