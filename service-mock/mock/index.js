const express = require('express')
const router = express.Router()
router.use('/commercial-goods/public/', (req, res) => {
  console.log(req.body, '******')
  let resData = require('./reqData')
  console.log(resData(req.body))
  res.json(resData(req.body))
})

module.exports = router
