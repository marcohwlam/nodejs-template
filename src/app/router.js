var express = require('express')
  , router = express.Router()

router.use('/', require('./home/home'))
router.use('/user', require('./user/user'))

module.exports = router
