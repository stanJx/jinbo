const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()
const Mock = require('mockjs')
let Random = Mock.Random

router.use('/zjsbs/upload', upload.any(), (req, res) => {
  let files = req.files[0]
  let backData
  console.log(files)
  console.log(req.body)
  // 图片上传的返回
  if (req.body.type === '237') {
    backData = Mock.mock({
      'file_id': Random.id(),
      'file_ser_id': Random.id()
    })
  }
  if (req.body.type === '12') {
    if (JSON.parse(req.body.data).flag === 2) {
      backData = Mock.mock({
        'pic_url': Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
      })
    }
  }
  if (req.body.type === '1614') {
    backData = Mock.mock({
      'rec_pic_url': Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
    })
  }
  if (req.body.type === '123') {
    if (JSON.parse(req.body.data).flag === 2) {
      backData = Mock.mock({
        'pic_url': Random.url(),
        'pos_one_lat': 20.02,
        'pos_one_lng': 20.01,
        'pos_two_lat': 20.03,
        'pos_two_lng': 20.04,
        'pic_direct': 1
      })
    }
  }
  backData = {
    code: 0,
    msg: 'ok',
    data: backData
  }
  res.json(backData)
})

module.exports = router
