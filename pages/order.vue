<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="logo" style="width: 108px;height: 40px"><img style="width:100%;height: 100%;" src="../assets/img/cart/goods_logo.png" alt=""></div>
      </div>

      <div class="order">
        <div class="store">
          <div class="contact">
            卖家：&nbsp;东莞市松雨服饰有限公司
          </div>
        </div>


        <div class="model">
            <div class="header">
              <div class="title">订单1:</div>
            </div>

            <div class="offers">
              <table>
                <tbody>
                  <tr style="line-height: 40px;">
                    <td style="width: 307px;text-align: left;padding-left: 12px;">货品信息</td>
                    <td style="width: 135px;text-align: center">单价(元)</td>
                    <td style="width: 139px;text-align: center">数量</td>
                    <td style="width: 143px;text-align: center">优惠(元)</td>
                    <td style="width: 123px;text-align: right;padding-right: 36px">金额(元)</td>
                    <td style="width: 106px;padding-right: 20px;text-align: right;">运费(元)</td>
                  </tr>
                  <tr class="single" style="height: 100px;">
                    <td>
                      <div class="dl">
                        <div class="side"><img :src="pic" alt="" style="width: 60px;height: 60px;"></div>
                        <div class="offer-title">{{this.title}}</div>
                        <div class="offer-sku"><span>颜色：{{this.color}}</span> <span>尺码：{{this.$route.query.size}}</span></div>
                        <div class="support-icon"><img src="../../assets/img/home/small_logo.png" alt=""></div>
                      </div>
                    </td>
                    <td style="width: 135px;font-size: 14px;word-wrap: break-word;text-align: center;">{{singlePrice}}</td>
                    <td>
                      <ControlNumber @changeNumber="changeNumber" :number="number"></ControlNumber>
                    </td>
                    <td style="text-align: center">--</td>
                    <td style="font-weight: 700;font-size: 14px;word-wrap: break-word;text-align: right;padding-right: 42px;">{{goodsPrice}}</td>
                    <td style="font-weight: 700;font-size: 14px;word-wrap: break-word;text-align: right;padding-right: 36px;">6.00</td>
                  </tr>
                  <tr class="summary" style="height: 80px;">
                    <td colspan="3">
                      <div class="message">
                        <div class="tell">给卖家留言:</div>
                        <div class="input">
                          <el-input placeholder="可以告诉卖家您的特殊要求" type="textarea" v-model="textarea" autosize></el-input>
                        </div>
                      </div>
                    </td>
                    <td colspan="3">
                      <div class="subtotal-wrap" style="width: 225px;height: 100%;float: right">
                        <div class="subtotal">
                          <div class="item"><span>运费总计:&nbsp;</span><span>6</span><span>元</span></div>
                          <div class="item"><span>货品总金额:&nbsp;</span><span>{{allPrice}}</span><span>元</span></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
      </div>

      <div class="screen">
        <div class="screenContent">
          <div class="header">总计：</div>
          <div class="content">
            <div class="summary-count">
              <div class="number"><span>货品种类&nbsp;：</span><span>1种</span></div>
              <div class="number"><span>数量总计&nbsp;：</span><span>{{this.number}}件</span></div>
            </div>

            <div class="itemBox">
              <div class="item"><span>运费共计：</span><span>6.00</span><span>元</span></div>
              <div class="item"><span>货品总金额：</span><span>{{allPrice}}</span>&nbsp;<span>元</span></div>
              <div class="item"><span>应付总额（含运费）：</span><span style="font-size: 18px;color: #ff6000;">{{allPrice}}</span>&nbsp;<span>元</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="end">
        <div class="checkout">
          <div class="checktotal"><span class="label">应付总额(含运费)：</span>&nbsp;<span>{{allPrice}}</span>&nbsp;<span>元</span></div>
          <div class="submit" @click="submitOrder">提交订单</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import ControlNumber from '../components/controlNumber.vue'
  import requests from '../api/axios'
  import {format} from 'date-fns'
  export default {
    components: { ControlNumber },
    created () {
      console.log(this.$route.query.size)
      requests({type: 2, data: {id: this.$route.query.id}}).then(value => {
        console.log(value.data.price)
        this.numberRange = value.data.number.split(',')
        this.priceRange = value.data.price.split(',')
        this.number1 = Number(this.numberRange[0].split('-')[0])
        this.number2 = Number(this.numberRange[0].split('-')[1])
        this.number3 = Number(this.numberRange[1].split('-')[0])
        this.number4 = Number(this.numberRange[1].split('-')[1])
        this.number5 = Number(this.numberRange[2].slice(1))
        this.pic = value.data.thumbnail.split(',')[this.$route.query.color]
        this.title = value.data.title
        this.address = value.data.address
        this.color = value.data.color.split(',')[this.$route.query.color]
        console.log(this.number1, this.number2, this.number3, this.number4, this.number5)
      })
    },
    data () {
      return {
        number: Number(this.$route.query.number),
        pic: '',
        title: '',
        color: '',
        numberRange: [],
        number1: 0,
        number2: 0,
        number3: 0,
        number4: 0,
        number5: 0,
        priceRange: [],
        textarea: '',
        address: '',
        time: format(new Date(), 'YYYY-MM-DD HH:mm:ss')
      }
    },
    computed: {
      singlePrice () {
        if (this.number >= this.number1 && this.number <= this.number2 ) {
          return this.priceRange[0]
        }
        if (this.number >= this.number3 && this.number <= this.number4) {
          return this.priceRange[1]
        }
        if (this.number >= this.number5 ) {
          return this.priceRange[1]
        }
      },
      goodsPrice () {
        if (this.number >= this.number1 && this.number <= this.number2 ) {
          return Number(this.priceRange[0] * this.number).toFixed(2)
        }
        if (this.number >= this.number3 && this.number <= this.number4) {
          return Number(this.priceRange[1] * this.number).toFixed(2)
        }
        if (this.number >= this.number5 ) {
          return this.priceRange[2] * this.number.toFixed(2)
        }
      },
      allPrice () {
        if (this.number >= this.number1 && this.number <= this.number2 ) {
          return (this.priceRange[0] * this.number + 6).toFixed(2)
        }
        if (this.number >= this.number3 && this.number <= this.number4) {
          return (this.priceRange[1] * this.number + 6).toFixed(2)
        }
        if (this.number >= this.number5 ) {
          return (this.priceRange[2] * this.number + 6).toFixed(2)
        }
      }
    },
    methods: {
      changeNumber (val) {
        console.log(this.singlePrice)
        if (val === 'remove' && this.number === this.number1) {
          this.$notify.error({
            title: '错误',
            message: '数量或金额不满足商家混批规则',
          })
        } else {
          val === 'remove' ? this.number = this.number - 1 : this.number = this.number + 1
        }
      },
      submitOrder () {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '您确定要购买该商品'),
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...'
              setTimeout(() => {
                done()
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300)
              }, 3000)
            } else {
              done()
            }
          }
        }).then(action => {
          requests({type: 4, data: {goods_id: this.$route.query.id, user_id: sessionStorage.user_id,size: this.$route.query.size, pic: this.pic, color: this.color,number: this.number, fare: 6, single_price: this.singlePrice, goods_price: this.goodsPrice, all_price: this.allPrice, remark: this.textarea, address: this.address, title: this.title, time: this.time}}).then(value => {
            window.location.href = '/'
          })
        })
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
  }
  .header{
    padding: 0px 4px;
    height: 56px;
    width: 100%;
  }
  .store{
    height: 40px;
    background: #e2edf8;
    padding-right: 6px;
  }
  .store .contact{
    float: left;
    padding: 11px 0 0 11px;
  }
  .model{
    display: flex;
    margin-top: 30px;
    margin-bottom:20px;
  }
  .model .header{
    width: 105px;
    font-size: 14px;
    line-height: 1.5;
    color: #999;
  }
  .model .offers{
    border: 1px solid #e2edf8;
    background: #f9fbff;
    font-size: 12px;
  }
  table{
    border-collapse: collapse;
    border-spacing: 0;
  }
  .single td{
    text-align: center;
    height: 60px;
    padding: 12px 0;
    border-top: 1px solid #e2edf8;
  }
  .summary td{
    text-align: center;
    height: 60px;
    padding: 10px 0;
    border-top: 1px solid #e2edf8;
  }
  table .dl{
    width: 287px;
    text-align: left;
    padding-left: 12px;
    padding-right: 20px;
    position: relative;
  }
  table .side{
    height: 62px;
    padding-right: 8px;
    float: left;
    text-align: left;
  }
  .offer-sku span{
    padding-right: 14px;
    color: #666;
    line-height: 1.5;
  }
  .offer-title{
    line-height: 1.5;
  }
  .message{
    display: flex;
  }
  .message .tell{
    width:15%;
    line-height: 32px;
  }
  .message .input{
    width:75%;
  }
  .subtotal{
    padding: 0 20px 0 22px;
    line-height:26px;
    text-align: right;
  }
  .subtotal span:nth-child(2){
    font-size: 14px;
    color: #ff6000;
    font-weight: 700;
    margin-right: 4px;
  }
  .end{
    font-size: 12px;
    line-height: 1.5;
    color: #333;
    background: #fff;
    overflow: hidden;
    box-shadow: 2px -5px 12px rgba(0,0,0,.1);
    position: fixed;
    width: 1190px;
    margin: 0 auto;
    bottom: 0;
    left: auto;
  }
  .checkout{
    float: right;
  }
  .checkout .checktotal{
    display: inline-block;
  }
  .checkout .checktotal span:nth-child(2){
    font-size: 18px;
    font-weight: 700;
    margin-right: 4px;
    color: #ff6000;
  }
  .checkout .submit{
    margin-left: 20px;
    height: 60px;
    width: 180px;
    line-height: 60px;
    border-radius: 0;
    background-color: #ff6000;
    border-color: #ff6000;
    text-align: center;
    padding: 0 20px;
    text-decoration: none;
    display: inline-block;
    color: #fff;
    font-size: 18px;
  }
  .screen{
    margin-top: 12px;
    background: #fef8e1;
    border: 1px solid #fbe1a3;
    padding: 20px 30px;
    font-size: 12px;
    line-height: 1.5;
    color: #333;
  }
  .screen .screenContent{
    display: flex;
  }
  .screen .screenContent .header{
    font-size: 14px;
    text-align: left;
    width:105px;
  }
  .screen .screenContent .content{
    width: 1023px;
  }
  .screen .screenContent .content .summary-count{
    float: left;
    height: 24px;
    line-height: 24px;
  }
  .screen .screenContent .content .summary-count .number{
    float: left;
  }
  .screen .screenContent .content .summary-count .number span{
    display: inline-block;
    width: 80px;
  }
  .itemBox{
    float: right;
    margin-right: 20px;
    width: 480px;
    font-size: 12px;
    line-height: 1.5;
    color: #333;
  }
  .itemBox .item{
    padding-bottom: 6px;
    line-height: 26px;
    text-align: right;
  }
  .itemBox .item span:nth-child(2){
    font-weight: 700;
    margin-right: 4px;
    font-size: 14px;
  }
</style>
