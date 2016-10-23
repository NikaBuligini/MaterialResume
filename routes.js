'use strict'

const express = require('express')
const router = express.Router()
require('express-session')

router.get('/', (req, res) => {
  res.render('./pages/cv', {
    title: 'Nikoloz Buligini'
  })
})

module.exports = router
