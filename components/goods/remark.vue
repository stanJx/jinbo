<template>
  <div>
    <div class="leftBox">
      <img src="../../assets/img/home/01.png" alt="">
    </div>
    <div class="rightBox">
      <el-tabs type="border-card" style="width: 790px;height: 476px;">
        <el-tab-pane label="宝贝详情" style="height: 400px;">
          <div class="attributes">
            <ul class="attributes-list">
              <li v-for="(item, index) in this.goodsDetail" :key="index">{{item.title}}:&nbsp;{{item.introduce}}</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="累计统计" style="height: 400px;">
          <div class="rate-header">
            <div class="rate-score">
              <div>与描述相符</div>
              <div class="score">{{this.star}}</div>
              <div>
                <Rate allow-half v-model="this.star" disabled></Rate>
              </div>
            </div>
            <div class="impress">
              <div style="width: 100px;height: 30px;line-height: 30px;text-align: center;">大家印象</div>
              <div style="width: 450px;">
                <ul>
                  <li><el-button v-for="(item, index) in this.impress" :key="index" size="small" style="background: #f88916;color: #fff;font-weight: bold;">{{item}}</el-button></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="radioBox">
            <RadioGroup v-model="radio" @on-change="radioClick">
              <Radio label="全部"></Radio>
              <Radio label="图片"></Radio>
              <Radio label="好评"></Radio>
            </RadioGroup>
          </div>
          <div class="remarkArea">
            <ul>
              <li v-for="(item, index) in this.goodsInfo" :key="index">
                <div class="from-who">
                  <img :src="item.head_img" style="width: 40px;height: 40px;" alt="">
                  <div class="username" style="font-size: 12px;">{{item.user_name}}</div>
                </div>
                <div class="review-detail">
                  <div class="content">
                    {{item.content}}
                  </div>
                  <div style="width: 40px; height: 40px;" v-show="item.pic"><img style="width:100%;height: 100%;" :src="item.pic" alt=""></div>
                  <div class="info">
                    <span style="margin-right: 20px;">{{item.time}}</span>
                    <span style="margin-right: 20px;">颜色分类：{{item.color}}</span>
                    <span>尺码：{{item.size}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="专项服务" style="height: 400px;">
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
   import 'iview/dist/styles/iview.css'
   export default {
    props: ['goodsInfo', 'impress', 'star'],
    data () {
      return {
        radio: '全部',
        goodsDetail: [{title: '货源类别', introduce: '现货'},{title: '产地', introduce: '广州'},{title: '面料名称', introduce: '棉类混纺'},{title: '主面料成分', introduce: '聚酯纤维（涤纶）'},{title: '主面料成分', introduce: '51%-70%'},{title: '主图来源', introduce: '实拍有模特'},{title: '风格', introduce: '休闲'},{title: '款式', introduce: '套头'},{title: '袖长', introduce: '短袖'},{title: '工艺', introduce: '刺绣/绣花'}]
      }
    },
     methods: {
       radioClick () {
         this.$emit('radioChange', this.radio)
       }
     }
  }
</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .leftBox{
    float: left;
    width: 190px;
    height: 477px;
  }
  .rightBox{
    margin-left: 10px;
    float: left;
    width: 790px;
    height: 477px;
  }
  .attributes{
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    padding: 10px;
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
    height: 30px;
    line-height: 30px;
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
  .rate-header{
    border: 1px solid #c8c8c8;
    padding: 10px 0;
    overflow: hidden;
  }
  .rate-score{
    width: 200px;
    padding: 0 20px;
    border-right: 1px dotted #ddd;
    text-align: center;
    float: left;
  }
  .rate-score .score{
    color: #f60;
    font-family: arial;
    font-size: 32px;
    line-height: 32px;
    margin: 0 2px;
    font-weight: 700;
  }
  .impress{
    float: left;
    width: 550px;
    display: flex;
  }
  .impress ul li{
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  .radioBox{
    margin-top: 10px;
    padding: 10px;
    border: #DDD 1px solid;
    background: #FCFCFC;
    color: #404040;
  }
  .remarkArea{
    /*margin-top: 10px;*/
    width: 100%;
    overflow: hidden;
  }
  .remarkArea ul{
    height: 260px;
    overflow-y: auto;
  }
  .remarkArea ul li{
    display: flex;
    border-bottom: 1px solid #D4D4D4;
    margin-top: 10px;
  }
  .from-who{
    overflow: hidden;
    width: 100px;
    text-align: center;
    line-height: 1.5;
  }
  .review-detail{
    width: 600px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .review-detail .content{
    height: 40px;
    font-size: 14px;
    line-height: 1.4;
    color: #3F3F3F;
    word-wrap: break-word;
  }
  .review-detail .info{
    margin-top: 8px;
    font-size: 12px;
    color: #B0B0B0;
    margin-bottom: 5px;
  }
</style>
