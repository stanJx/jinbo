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

module.exports = function (param) {
  return {
    code: 0,
    data: backData[param.type],
    msg: 'ok'
  }
}
