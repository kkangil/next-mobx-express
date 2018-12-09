const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  server.get('/', (req, res) => {
    app.render(req, res, "/", {
      test: 'test'
    })
  })

  server.get('/post', (req, res) => {
    app.render(req, res, "/post", {
      test: 'post1'
    })
  })

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(3000)
});
