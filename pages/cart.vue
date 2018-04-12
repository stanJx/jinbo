<template>
  <div style="background: #F7F7F7; height: 720px;">
    <div class="container">
      <div class="cart-thead">
        <div class="thead-content">
          <ul class="list-inline">
            <li style="width: 130px"><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox></li>
            <li style="width: 435px;text-indent: 12px;">货品</li>
            <li style="width: 196px;text-indent: 72px">数量</li>
            <li style="width: 223px;padding-right: 15px;text-align: right;">单价(元)</li>
            <li style="width: 170px;text-align: right;">金额(元)</li>
          </ul>
        </div>
      </div>

      <div class="screen">
        <el-checkbox-group v-model="checkGoods" @change="handleCheckedCitiesChange">
          <div class="mod-cart" v-for="(item, index) in this.cityOptions" :key="index">
            <div class="content">
              <div class="zone-store">
                <div class="fd-left"><div>东莞市松雨服饰有限公司</div> </div>
                <div class="fd-right">
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      优惠说明<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item class="clearfix">
                        <div style="font-weight: 800">混批条件</div>
                        <div>混批货品总金额≥100元，或混批货品总件数≥1</div>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>

              <div class="zone-goods">
                <div class="option"><el-checkbox :key="index" :label="item"><div style="display: none;">{{index}}</div></el-checkbox></div>
                <div class="goods-image"><img src="../../assets/img/1.jpg" alt="" style="width: 60px;height: 60px;"></div>
                <div class="goods-title">
                  <div class="title">棉t恤长袖爆款跑量2018春秋装新款女装一字领纯条纹T恤女打底衫</div>
                  <div class="size"><span>颜色：&nbsp;</span><span style="display: inline-block;width: 150px;">黑色条纹</span><span>尺码：</span><span style="font-weight: 800">S</span></div>
                </div>
                <div class="goods-number">
                  <ControlNumber @changeNumber="changeNumber" :number="number"></ControlNumber>
                </div>

                <div class="goods-price">
                  <div>3-19 件:  &nbsp;21.00</div>
                  <div>20-49 件:  &nbsp;20.50</div>
                  <div>≥50 件:  &nbsp;19.50</div>
                </div>

                <div class="goods-all">
                  <div>21.00</div>
                </div>
              </div>
            </div>
          </div>
        </el-checkbox-group>
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
        checkAll: false,
        isIndeterminate: true,
        checkGoods: [],
        number: 1,
        cityOptions :  ['上海', '北京', '广州', '深圳']
      }
    },
    methods: {
      // ********全选按钮
      handleCheckAllChange (val) {
        this.checkGoods = val ? this.cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        console.log(value)
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cityOptions.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length
      },
      changeNumber (val) {
        console.log(val)
        val === 'remove' ? this.number = this.number - 1 : this.number = this.number + 1
      }
    }
  }
</script>

<style>
  .container{
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
  }
  .cart-thead{
    height: 16px;
    padding: 17px 0 11px 0;
    line-height: 16px;
    background: #f7f7f7;
    color: #555;
  }
  .cart-thead .thead-content{
    line-height: 16px;
  }
  .cart-thead .thead-content ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .cart-thead .thead-content ul li{
    float:left;
  }
  .screen{
    height: 500px;
    overflow-y: auto;
  }
  .mod-cart{
    margin-bottom: 20px;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    color: #555;
  }
  .zone-store {
    height: 48px;
    line-height: 48px;
    padding: 0 22px;
  }
  .fd-left{
    height: 48px;
    line-height: 48px;
    width: 201px;
    float:left;
  }
  .fd-left div{
    font-size: 16px;
    margin-left: 21px;
    color:#222;
    vertical-align: middle;
  }
  .fd-right{
    float: right;
    line-height: 48px;
    width:85px;
  }
  .zone-goods{
    border-top: 1px solid #eee;
    height:150px ;
    padding: 0 22px 26px;
  }
  .zone-goods .option{
    float: left;
    width: 30px;
    margin-top: 20px;
  }
  .zone-goods .goods-image{
    float: left;
    margin-top: 20px;
    width: 92px;
    height: 82px;
  }
  .zone-goods .goods-title{
    float: left;
    margin-top: 20px;
    width: 400px;
  }
  .zone-goods .goods-title .title{
    font-size: 12px;
    line-height: 20px;
    height: 60px;
  }
  .zone-goods .goods-title .size{
    font-size: 12px;
  }
  .zone-goods .goods-number{
    float: left;
    margin-top: 68px;
    width: 172px;
    margin-left: 40px;
  }
  .zone-goods .goods-price{
    float: left;
    font-size: 14px;
    line-height: 24px;
    margin-top: 48px;
    width: 172px;
    margin-left: 140px;
  }
  .zone-goods .goods-all{
    display: block;
    text-align: right;
    font-size: 16px;
    font-weight: 700;
    color: #ff7300;
    float: left;
    width: 100px;
    margin-top: 78px;
  }
</style>
