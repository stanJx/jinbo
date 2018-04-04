const Mock = require('mockjs')
let Random = Mock.Random

let backData = []

backData[1] = Mock.mock({
  'data|32': [{
    'pic': Random.image('220x220'),
    'title': '2018夏季新款女装短袖T恤 外贸韩版女士打底衫1688阿里巴巴批发网',
    'show': true
  }]
})
 backData[2] = Mock.mock({
  'data|8': [{
    'pic': Random.image('220x220'),
    'bigPic': Random.image('2200x2200'),
    'title': '2018夏季新款女装短袖T恤 外贸韩版女士打底衫1688阿里巴巴批发网',
    'size': [{'size': 'M', 'active': false}, {'size': 'L', active: false}, {'size': 'XL', active: true}, {'size': 'XXL', active: false}],
    'isActive': false
  }]
})

backData[3] = Mock.mock({
  'data|12': [{
    'title': Random.cword(4),
    'introduce': Random.cword(8)
  }]
})
module.exports = function (param) {
  return {
    code: 0,
    data: backData[param.type],
    msg: 'ok'
  }
}
