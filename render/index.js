const models = require("../models")

function getMainPage(app) {
  return async (req, res) => {
    const posts = await models.Post.findAll()
    app.render(req, res, "/", {
      posts
    })
  }
}

function getPostsPage(app) {
  return async (req, res, next) => {
    try {
      const { id } = req.query
      if (id) {
        const post = await models.Post.findById(id)
        app.render(req, res, "/posts", {
          post
        })
      } else {
        throw new Error('no result')
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = {
  getMainPage,
  getPostsPage
}