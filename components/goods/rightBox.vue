<template>
  <div>
    <table class="tableBox">
      <tbody>
      <tr class="price">
        <td>价格</td>
        <td class="priceTag">
          <span>¥</span>
          <span>123.00</span>
        </td>
        <td class="priceTag">
          <span>¥</span>
          <span>123.00</span>
        </td>
        <td class="priceTag">
          <span>¥</span>
          <span>123.00</span>
        </td>
      </tr>
      <tr class="amount">
        <td>起批量</td>
        <td class="amountRange">
          <span>2-4</span>
          <span>条</span>
        </td>
        <td class="amountRange">
          <span>2-4</span>
          <span>条</span>
        </td>
        <td class="amountRange">
          <span>2-4</span>
          <span>条</span>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="form">
      <div class="number">
        <div class="numberTitle"><span>权益</span></div>
        <div class="numberChange" style="font-size: 16px;line-height: 34px;">登录享受会员价、淘宝数据等更多权益</div>
      </div>

      <div class="number">
        <div class="numberTitle"><span>优惠</span></div>
        <div class="numberChange" style="line-height: 24px;font-size: 12px;color: #3c3c3c"> 100元店铺优惠券，满999元可用 <span style="color: #f40">领取</span></div>
        <div class="numberChange" style="line-height: 24px;font-size: 12px;color: #3c3c3c"> 20元店铺优惠券，满358元可用 <span style="color: #f40">领取</span></div>
      </div>

      <div class="color">
        <div class="colorTitle"><span>颜色</span></div>
        <div class="colorPic">
          <ul>
            <li v-for="(item, index) in this.picBox" :key="index" @click="chooseColor(index)">
              <div>
                <span :class="{active: item.isActive, normal: !item.isActive}"><img :src="item.pic" alt="" style="width: 100%;height: 100%;"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="size">
        <div class="sizeTitle"><span>尺寸</span></div>
        <ul>
          <li v-for="(item, index) in this.size" :key="index" @click="chooseSize(index)"><div :class="{sizeActive: item.active, normalSize: !item.active}"><span>{{item.size}}</span></div></li>
        </ul>
      </div>

      <div class="number">
        <div class="numberTitle"><span>数量</span></div>
        <div class="numberChange">
          <div @click="reduceNumber" ref="input">-</div>
          <input v-model="number">
          <div @click="addNumber">+</div>
        </div>
      </div>

      <div class="button">
        <el-button style="background: #ff7300; color:white;width: 147px;height: 55px;">立即订购</el-button>
        <el-button style="background: #ff7300; color:white"><img src="../../assets/img/home/shopping.png" alt="" style="width:22px; height:22px;float: left;padding-top: 4px;"><span style="line-height: 30px; font-size: 16px;">加入购物车</span></el-button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['picBox', 'size', 'number'],
    data () {
      return {
      }
    },
    methods: {
      chooseColor (index) {
        this.$emit('chooseColor', index)
      },
      chooseSize (index) {
        this.$emit('chooseSize', index)
      },
      reduceNumber () {
//        this.number === 1 ? this.$refs.input.style.cursor = 'not-allowed' : this.$emit('changeNumber', 'remove')
        if (this.number === 1) {
          this.$refs.input.style.cursor = 'not-allowed'
        } else {
          this.$emit('changeNumber', 'remove')
          this.$refs.input.style.cursor = 'allowed'
        }
      },
      addNumber () {
        this.$emit('changeNumber', 'add')
      }
    }
  }
</script>

<style scoped>
  /*公共样式*/
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  /**************/
  .tableBox{
    height: 104px;
    background-color: #fff5ec;
    border-collapse: collapse;
    border-spacing: 0;
    color: #444;
    text-align: left;
  }
  .tableBox tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .price td{
    padding-top: 10px;
    padding-bottom: 8px;
    color: #ff7300;
  }
  .price td:first-child, .amount td:first-child{
    padding-left: 17px;
    color: #A5988F;
    width: 64px;
  }
  .price .priceTag, .amount .amountRange{
    width: 170px;
    padding-left: 21px;
  }
  .price .priceTag span:first-child{
    font-size: 18px;
    padding-right: 2px;
    font-family: Helvetica,Arial;
  }
  .price .priceTag span:nth-child(2){
    font-size: 30px;
  }
  .amount .amountRange span:nth-child(2){
    padding-left: 2px;
  }
  .form{
    width: 640px;
    padding-left: 0;
  }
  .form .color, .form .size, .form .number{
    margin: 0 20px 0 16px;
    padding: 10px 0 5px;
    /*border-bottom: 1px dotted #e5e5e5;*/
    text-align: left;
    overflow: hidden;
  }
  .form .color .colorTitle, .form .size .sizeTitle, .form .number .numberTitle{
    width: 79px;
    line-height: 38px;
    color: #888;
    float: left;
  }
  .form .color .colorPic{
    width: 510px;
    float: left;
  }
  .form .color .colorPic li{
    margin: 0 8px 10px 0;
    float: left;
  }
  .form .color .colorPic li div{
    float: left;
    height: 38px;
    width: 38px;
    background: #fff;
    overflow: visible;
  }
  .normal{
    display: inline-block;
    /*border: 2px solid #ff7300;*/
    border: 2px solid #d5d5d5;
    padding: 1.5px;
    width: 32px;
    height: 32px;
  }
  .active{
    display: inline-block;
    border: 2px solid #ff7300;
    padding: 1.5px;
    width: 32px;
    height: 32px;
  }
  .form .size li{
    float: left;
    position: relative;
    margin: 0 4px 4px 0;
    line-height: 32px;
    vertical-align: middle;
    padding: 1px;
  }
  .normalSize{
    float: left;
    background-color: #fff;
    white-space: nowrap;
    width: auto!important;
    min-width: 10px;
    padding: 0 9px;
    text-align: center;
    border: 1px solid #b8b7bd;
    color: #000;
    text-decoration: none;
  }
  .sizeActive{
    float: left;
    background-color: #fff;
    white-space: nowrap;
    width: auto!important;
    min-width: 10px;
    padding: 0 9px;
    text-align: center;
    color: #000;
    text-decoration: none;
    border: 2px solid #FF0036;
  }
  .number .numberChange{
    line-height: 32px;
    color: #3C3C3C;
  }
  .number .numberChange input{
    float: left;
    margin: 0;
    padding: 0;
    width: 54px;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #666;
    border: 1px solid #CCC;
    border-left: none;
    border-right: none;
    outline: 0;
    background: #FFF;
  }
  .number .numberChange div:first-child, .number .numberChange div:nth-child(3){
    font-weight: bolder;
    float: left;
    font-size: 18px;
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    line-height: 32px;
    padding: 0;
    vertical-align: top;
    text-align: center;
    overflow: hidden;
  }
  .number .numberChange div:first-child{
    /*cursor: not-allowed;*/
    background-color: #ededed;
    color: #ccc;
  }
  .number .numberChange div:nth-child(3){
    color: #3C3C3C;
    background-color: #ededed;
  }
  .button{
    margin-top:20px;
    margin-left: 36px;
  }

</style>
