<template>
  <div style="background: #F7F7F7; height: 728px;" ref="box">
    <div class="container">
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
                        <div class="side"><img src="../../assets/img/1.jpg" alt="" style="width: 60px;height: 60px;"></div>
                        <div class="offer-title">棉t恤长袖爆款跑量2018春秋装新款女装一字领纯条纹T恤女打底衫</div>
                        <div class="offer-sku"><span>颜色：黑色条纹</span> <span>尺码：S</span></div>
                        <div class="support-icon"><img src="../../assets/img/home/small_logo.png" alt=""></div>
                      </div>
                    </td>
                    <td style="width: 135px;font-size: 14px;word-wrap: break-word;text-align: center;">21.00</td>
                    <td>
                      <ControlNumber @changeNumber="changeNumber" :number="number"></ControlNumber>
                    </td>
                    <td style="text-align: center">--</td>
                    <td style="font-weight: 700;font-size: 14px;word-wrap: break-word;text-align: right;padding-right: 42px;">42.00</td>
                    <td style="font-weight: 700;font-size: 14px;word-wrap: break-word;text-align: right;padding-right: 36px;">6.00</td>
                  </tr>
                  <tr class="summary" style="height: 80px;">
                    <td colspan="3">
                      <div class="message">
                        <div class="tell">给卖家留言:</div>
                        <div class="input">
                          <el-input placeholder="可以告诉卖家您的特殊要求" type="textarea" autosize></el-input>
                        </div>
                      </div>
                    </td>
                    <td colspan="3">
                      <div class="subtotal-wrap" style="width: 225px;height: 100%;float: right">
                        <div class="subtotal">
                          <div class="item"><span>运费总计:&nbsp;</span><span>6.00</span><span>元</span></div>
                          <div class="item"><span>货品总金额:&nbsp;</span><span>21.00</span><span>元</span></div>
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
              <div class="number"><span>数量总计&nbsp;：</span><span>1件</span></div>
            </div>

            <div class="itemBox">
              <div class="item"><span>运费共计：</span><span>8.00</span><span>元</span></div>
              <div class="item"><span>货品总金额：</span><span>67.00</span>&nbsp;<span>元</span></div>
              <div class="item"><span>应付总额（含运费）：</span><span style="font-size: 18px;color: #ff6000;">75.00</span>&nbsp;<span>元</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="end">
        <div class="checkout">
          <div class="checktotal"><span class="label">应付总额(含运费)：</span>&nbsp;<span>26.00</span>&nbsp;<span>元</span></div>
          <a href="">提交订单</a>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
  import ControlNumber from '../components/controlNumber.vue'
  export default {
    components: { ControlNumber },
    data () {
      return {
        number: 1,
      }
    },
    methods: {
      changeNumber (val) {
        console.log(val)
        val === 'remove' ? this.number = this.number - 1 : this.number = this.number + 1
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
  .checkout a{
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
