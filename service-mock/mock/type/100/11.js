const Mock = require('mockjs')
let Random = Mock.Random
let backData = Mock.mock({
  'data|8': [{
    'pic': Random.image('220x220'),
    'bigPic': Random.image('2200x2200'),
    'title': '2018夏季新款女装短袖T恤 外贸韩版女士打底衫1688阿里巴巴批发网',
    'size': [{'size': 'M', 'active': false}, {'size': 'L', active: false}, {'size': 'XL', active: true}, {'size': 'XXL', active: false}],
    'isActive': false
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
