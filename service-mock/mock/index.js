const express = require('express')
const router = express.Router()
router.use('/jin', (req, res) => {
  console.log(req.body)
  let foldName = Math.ceil(req.body.type / 100) * 100
  let resData
  try {
    resData = require('./type/' + foldName + '/' + req.body.type + '.js')
  } catch (e) {
    resData = function (param) {
      return {code: 0, msg: 'ok', data: {}}
    }
  }
  res.json(resData(req.body))
})

module.exports = router
