const express = require("express")
const router = express.Router();

const postsRoute = require('./post')

router.use('/posts', postsRoute)

module.exports = router