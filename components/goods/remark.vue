<template>
  <div>
    <div class="leftBox">
      <img src="../../assets/img/home/01.png" alt="">
    </div>
    <div class="rightBox">
      <el-tabs type="border-card" style="width: 990px;">
        <el-tab-pane label="宝贝详情">
          <div class="attributes">
            <ul class="attributes-list">
              <li v-for="(item, index) in this.goodsInfo" :key="index">{{item.title}}:&nbsp;{{item.introduce}}</li>
              <!--<li>裤长:&nbsp;长裤</li>-->
              <!--<li>裤长:&nbsp;长裤</li>-->
              <!--<li>裤长:&nbsp;长裤</li>-->
              <!--<li>裤长:&nbsp;长裤</li>-->
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="累计统计">累计统计</el-tab-pane>
        <el-tab-pane label="专项服务">
          <div class="service">
            <h2 class="title"><em>卖家承诺以下服务</em></h2>
            <div style="display: flex">
              <div style="width: 8%;">
                <img src="../../assets/img/home/good_logo.png" style="width:50px; height:50px;float: right;" alt="">
              </div>
              <div class="consumer" style="margin-left: 20px;">
                <div class="name">消费者保障服务</div>
                <div class="detail">该卖家已缴纳 20052.0 元保证金。<br>
                  在确认收货 15 天内，如有商品质量问题、描述不符或未收到货等，您有权申请退款或退货，来回邮费由卖家承担。
                </div>
              </div>
            </div>

            <div>
              <h3 style="border-bottom: 1px solid #eee;font-size: 18px;margin-top: 30px;line-height: 20px;">价格说明</h3>
              <div class="priceTitle">划线价格</div>
              <div class="priceContent">指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</div>
              <div class="priceTitle">未划线价格</div>
              <div class="priceContent">指商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</div>
              <div class="priceContent">此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['goodsInfo'],
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .leftBox{
    float: left;
    width: 190px;
  }
  .rightBox{
    margin-left: 10px;
    float: left;
    width: 990px;
  }
  .attributes{
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    padding: 10px;
    border-bottom: solid 1px #eee;
  }
  .attributes .attributes-list{
    padding: 0 15px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .attributes .attributes-list li{
    display: inline;
    float: left;
    width: 226px;
    height: 26px;
    line-height: 26px;
    margin-right: 20px;
    overflow: hidden;
    text-indent: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: normal;
  }
  .service .title{
    font-size: 14px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    margin: 20px 0 30px 0;
  }
  .service .title em{
    display: inline-block;
    padding: 0 10px;
    background-color: #fff;
    color: #3c3c3c;
    font-style: normal;
  }
  .consumer .name{
    margin: 0 0 4px 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    color: #3c3c3c;
  }
  .consumer .detail{
    margin-top: 8px;
    overflow: hidden;
    line-height: 24px;
    word-wrap: break-word;
    color: #6c6c6c;
  }
  .priceTitle {
    color: #fe702f;
    font-size: 12px;
    font-family: normal;
  }
  .priceContent {
    color: #666;
    margin-bottom: 15px;
    font-size: 12px;
    font-family: normal;
  }
</style>
