const express = require('express')
const router = express.Router()

const knight_controller = require('../controllers/knightController')

router.get('/test', knight_controller.test)
module.exports = router

