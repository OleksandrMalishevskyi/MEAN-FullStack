const express = require('express')
/* const passport = require('passport') */
const controller = require('../controllers/order')
const router = express.Router()


router.get('/', controller.getAll)
router.post('/', controller.create)


module.exports = router