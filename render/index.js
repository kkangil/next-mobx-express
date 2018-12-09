const models = require("../models")

function getMainPage(app) {
  return async (req, res) => {
    const posts = await models.Post.findAll()
    app.render(req, res, "/", {
      posts
    })
  }
}

module.exports = {
  getMainPage
}