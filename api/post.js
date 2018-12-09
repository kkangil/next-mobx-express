const express = require('express')
const models = require('../models')

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  const id = req.params.id
  try {
    const post = models.Post.findById(id)

    if (post) {
      res.json(post)
    } else {
      throw new Error('존재하지 않는 포스트')
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router