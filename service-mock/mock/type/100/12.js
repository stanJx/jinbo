const Mock = require('mockjs')
let Random = Mock.Random
let backData = Mock.mock({
  'data|12': [{
    'title': Random.cword(4),
    'introduce': Random.cword(8)
  }]
})
let backDatas = {
  code: 0,
  data: backData,
  msg: 'ok'
}
module.exports = reponse
function reponse (param) {
  return backDatas
}
