const Mock = require('mockjs')
let Random = Mock.Random

let backData = []

backData[1] = Mock.mock({
  'data|32': [{
    'id': Random.cword(4),
    'pic': Random.image('220x220'),
    'title': '2018夏季新款女装短袖T恤 外贸韩版女士打底衫1688阿里巴巴批发网',
    'thumbnail': [Random.image('220x220'), Random.image('220x220'),],
    'big_pic': [Random.image('220x220'), Random.image('220x220'),],
    'number': '2-4,5-49,≥50',
    'price': '40.00,39.00,38.00',
    'address': Random.cword(8),
    'year': '1',
    'color': '粉红色,黑色,白色,橙色,蓝色,紫色,黑色,粉红色',
    'impress': '质量好(9),穿着漂亮(8),料子不错(9),很舒适(9),版型好看(9),衣服很合适(8),颜色很美(6)',
    'star': '4.7',
    'catalog': '1'
  }]
})
 backData[2] = Mock.mock({
  'data|8': [{
    'pic': Random.image('220x220'),
    'big_pic': Random.image('2200x2200'),
    'title': '2018夏季新款女装短袖T恤 外贸韩版女士打底衫1688阿里巴巴批发网'
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
