const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const config = require("./config")
const models = require("./models");
const render = require('./render')

app.prepare().then(async () => {
  await models.sequelize.sync({
    force: config.db.forceSync,
    alter: config.db.alter
  });
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  // server.use(handler)

  server.get('/', render.getMainPage(app))

  server.get('/post', (req, res) => {
    app.render(req, res, "/post", {
      test: 'post1'
    })
  })

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(config.port)
});
