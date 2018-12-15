<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="logo" style="width: 108px;height: 40px"><img style="width:100%;height: 100%;" src="../assets/img/cart/goods_logo.png" alt=""></div>
      </div>

      <div class="cart-thead">
        <div class="thead-content">
          <ul class="list-inline">
            <li style="width: 300px;text-indent: 12px;">货品</li>
            <li style="width: 100px;text-align: center">单价(元)</li>
            <li style="width: 144px;text-align: center">数量</li>
            <li style="width: 150px;text-align: center;">总金额(元)</li>
            <li style="width: 150px;text-align: center;">订单状态</li>
            <li style="width: 150px;text-align: center;">交易操作</li>
            <li style="width: 150px;text-align: center;">其他</li>
          </ul>
        </div>
      </div>

      <div class="screen">
        <el-checkbox-group v-model="checkGoods" @change="handleCheckedCitiesChange">
          <div class="mod-cart" v-for="(item, index) in this.orderInfos" :key="index">
            <div class="content">
              <div class="zone-top">
                <div class="option"><el-checkbox :key="index" :label="item"><div style="display: none;">{{index}}</div></el-checkbox></div>
                <div class="info">
                  <span>订单号:&nbsp;2312312312333</span>&nbsp;&nbsp;<span style="color: #999;">{{item.time}}</span>
                  <span style="float: right;" @click="deleteItem(item.id)" v-show="item.status==='2' || item.status=== '3'"><i class="el-icon-delete"></i></span>
                </div>
              </div>

              <div class="zone-subtitle">
                <div class="subtitle">
                  <span>下单账号：</span>&nbsp;<span style="color: #999;">{{user_name}}</span>
                </div>
              </div>

              <div class="zone-goods">
                <div class="goods-image"><img :src="item.pic" alt="" style="width: 80px;height: 80px;"></div>
                <div class="goods-title">
                  <div class="title">{{item.title}}</div>
                  <div class="size"><span>颜色：</span><span style="display: inline-block;width: 55px;">{{item.color}}</span>&nbsp;<span>尺码：</span><span style="font-weight: 800">{{item.size}}</span></div>
                  <div class="brand" style="margin-top: 5px;"><img src="../assets/img/orderProcess/brand_logo.png" style="width:160px;height:20px;" alt=""></div>
                </div>
                <div class="goods-price">{{(item.single_price * 1).toFixed(2)}}</div>
                <div class="goods-number">{{item.number}}</div>
                <div class="goods-all">
                  <div class="total" style="line-height: 21px;">{{(item.all_price * 1).toFixed(2)}}</div>
                  <div class="fare" style="line-height: 21px;color: #999;font-size: 12px;font-weight:400;">含运费6.00</div>
                </div>
                <div class="goods-status">
                  <div class="status" v-show="item.status==='1'">交易进行中</div>
                  <div class="status" v-show="item.status === '2'">交易成功</div>
                  <div class="status" v-show="item.status === '3'">交易成功</div>
                  <div class="detail">订单详情</div>
                </div>
                <div class="goods-done" v-show="item.status=== '1'">---</div>
                <div class="goods-done" v-show="item.status=== '2'"><a :href="`/remark/?goods_id=${item.goods_id}&color=${item.color}&size=${item.size}&submit_id=${item.id}`" v-show="item.status==='2'">查看评价</a></div>
                <div class="goods-done" v-show="item.status=== '3'">已评价</div>
                <div class="goods-other">
                  <div>再次购买</div>
                  <div>投诉</div>
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
  import requests from '../api/axios'
  export default {
    mounted () {
      requests({type: 11, data: {user_id: sessionStorage.user_id}}).then(value => {
        console.log(value.data)
        this.orderInfos = value.data
        this.user_name = sessionStorage.user_name
      })
    },
    data () {
      return {
        checkAll: false,
        isIndeterminate: true,
        checkGoods: [],
        number: 1,
        orderInfos: [],
        user_name: '',
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
      },
      deleteItem (val) {
        requests({type: 16, data: {id: val}}).then(value => {
          requests({type: 11, data: {user_id: sessionStorage.user_id}}).then(value => {
            console.log(value.data)
            this.orderInfos = value.data
            this.user_name = sessionStorage.user_name
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
  a{
    color: #333;
    text-decoration: none;
  }
  a:hover{
    color: #ff6000;
  }
  .header{
    padding: 12px 4px;
    height: 56px;
    width: 100%;
  }
  .cart-thead{
    height: 16px;
    font-size: 12px;
    padding: 17px 0 11px 0;
    line-height: 16px;
    background: #f7f7f7;
    color: #999;
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
    height: 580px;
    overflow-y: auto;
  }
  .mod-cart{
    padding: 10px;
    margin-top:10px;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    color: #555;
  }
  .zone-top{
    background-color: #F5F5F5;
    padding: 8px;
    height: 16px;
    line-height: 16px;
  }
  .zone-top .option{
    float: left;
    width: 30px;
    /*margin-top: 20px;*/
  }
  .zone-top .info{
    float: left;
    font-size: 12px;
    width: 1090px;
  }
  .zone-subtitle{
    line-height: 16px;
    padding: 4px;
    font-size: 12px;
  }
  .zone-subtitle .subtitle{
    margin: 0 8px;
    padding: 8px 8px 8px 42px;
    /*border-bottom: 1px solid #ededed;*/
  }
  .zone-title .subtitle span{
    display: inline-block;
  }
  .zone-goods{
    border-top: 1px solid #eee;
    height:120px ;
    padding: 0 22px 26px;
    font-size: 12px;
    color: #333;
  }
  .zone-goods .goods-image{
    float: left;
    margin-top: 20px;
    width: 92px;
    height: 82px;
  }
  .zone-goods .goods-title{
    float: left;
    margin-top: 15px;
    width: 185px;
  }
  .zone-goods .goods-title .title{
    line-height: 20px;
    height: 60px;
    width: 178px;
  }
  .zone-goods .goods-title .size{
    color: #888;
    width: 178px;
  }
  .zone-goods .goods-price{
    float: left;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    margin-top: 15px;
    width: 100px;
  }
  .zone-goods .goods-number{
    float: left;
    margin-top: 15px;
    font-size: 14px;
    width: 144px;
    text-align: center;
    line-height: 24px;
  }
  .zone-goods .goods-all{
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    float: left;
    width: 150px;
    margin-top: 15px;
  }
  .zone-goods .goods-status{
    float: left;
    width: 150px;
    margin-top: 15px;
    text-align: center;
    line-height: 22px;
  }
  .zone-goods .goods-status .status{
    color: #25be13;
  }
  .zone-goods .goods-done{
    float: left;
    margin-top: 15px;
    width:130px;
    text-align: center;
    line-height: 22px;
  }
  .zone-goods .goods-other{
    float: left;
    margin-top: 13px;
    width:150px;
    text-align: center;
    line-height: 22px;
  }
</style>
