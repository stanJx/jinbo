<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="logo" style="width: 108px;height: 40px"><img style="width:100%;height: 100%;" src="../assets/img/cart/goods_logo.png" alt=""></div>
      </div>

      <div class="cart-thead">
        <div class="thead-content">
          <ul class="list-inline">
            <li style="width: 130px"><el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox></li>
            <li style="width: 300px;text-indent: 12px;">货品</li>
            <li style="width: 176px;text-indent: 72px">数量</li>
            <li style="width: 176px;text-align: center;">单价(元)</li>
            <li style="width: 130px;text-align: center;">金额(元)</li>
            <li style="width: 130px;text-align: center;">运费(元)</li>
            <li style="width: 130px;text-align: center;">总金额(元)</li>
          </ul>
        </div>
      </div>

      <div class="screen">
        <el-checkbox-group v-model="checkGoods" @change="handleCheckedCitiesChange">
          <div class="mod-cart" v-for="(item, index) in this.cartBox" :key="index">
            <div class="content">
              <div class="zone-store">
                <div class="fd-left"><div>{{item.address}}</div> </div>
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
                <div class="goods-image"><img :src="item.pic" alt="" style="width: 60px;height: 60px;"></div>
                <div class="goods-title">
                  <div class="title">{{item.title}}</div>
                  <div class="size"><span>颜色：&nbsp;</span><span style="display: inline-block;width: 150px;">{{item.color}}</span><span>尺码：</span><span style="font-weight: 800">{{item.size}}</span></div>
                </div>
                <div class="goods-number">
                  <ControlNumber @changeNumber="changeNumber" :number="item.number" :index="index"></ControlNumber>
                </div>

                <div class="goods-price">
                  <div>{{item.numbers.split(',')[0]}} 件:  &nbsp;{{item.price.split(',')[0]}}</div>
                  <div>{{item.numbers.split(',')[1]}} 件:  &nbsp;{{item.price.split(',')[1]}}</div>
                  <div>{{item.numbers.split(',')[2]}} 件:  &nbsp;{{item.price.split(',')[2]}}</div>
                </div>

                <div class="goods-all">
                  <div>{{item.goods_price}}</div>
                </div>
                <div class="cart">
                  <div>{{item.fare}}</div>
                </div>
                <div class="total-all">
                  <div>{{item.all_price}}</div>
                </div>
              </div>
            </div>
          </div>
        </el-checkbox-group>
      </div>

      <div class="end">
        <div class="checkout">
          <div class="checktotal"><span class="label">应付总额(含运费)：</span>&nbsp;<span>{{this.total_price}}</span>&nbsp;<span>元</span></div>
          <div class="submit" @click="submit_cart">提交订单</div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import ControlNumber from '../components/controlNumbers.vue'
  import requests from '../api/axios'
  import {format} from 'date-fns'
  export default {
    components: { ControlNumber },
    mounted () {
      requests({type: 9, data: {user_id: sessionStorage.user_id}}).then(value => {
        console.log(value.data)
        this.cartBox = value.data
      })
    },
    data () {
      return {
        checkAll: false,
        isIndeterminate: true,
        checkGoods: [],
        number: 1,
        cartBox: [],
        selectCarts: [],
        total_price: 0
      }
    },
    methods: {
      // ********全选按钮
      handleCheckAllChange (val) {
        this.checkGoods = val ? this.cartBox : []
        this.isIndeterminate = false
        this.total_price = eval(this.cartBox.map(t=> {return t.all_price * 1}).join('+'))
        this.selectCarts = this.cartBox
      },
      handleCheckedCitiesChange (value) {
        this.selectCarts = value
        this.total_price = eval(value.map(t=> {return t.all_price * 1}).join('+'))
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cartBox.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cartBox.length
      },
      changeNumber (val) {
        console.log(val)
        val[0] === 'remove' ? this.cartBox[val[1]].number = this.cartBox[val[1]].number - 1 : this.cartBox[val[1]].number = this.cartBox[val[1]].number + 1
        if (this.cartBox[val[1]].number >= this.cartBox[val[1]].numbers.split(',')[0].split('-')[0] && this.cartBox[val[1]].number <= this.cartBox[val[1]].numbers.split(',')[0].split('-')[1]) {
          this.cartBox[val[1]].goods_price = (this.cartBox[val[1]].price.split(',')[0] * this.cartBox[val[1]].number).toFixed(2)
          this.cartBox[val[1]].all_price = (this.cartBox[val[1]].goods_price * 1 + 6).toFixed(2)
        }
        if (this.cartBox[val[1]].number >= this.cartBox[val[1]].numbers.split(',')[1].split('-')[0] && this.cartBox[val[1]].number <= this.cartBox[val[1]].numbers.split(',')[1].split('-')[1]) {
          this.cartBox[val[1]].goods_price = (this.cartBox[val[1]].price.split(',')[1] * this.cartBox[val[1]].number).toFixed(2)
          this.cartBox[val[1]].all_price = (this.cartBox[val[1]].goods_price * 1 + 6).toFixed(2)
        }
        if (this.cartBox[val[1]].number >= this.cartBox[val[1]].numbers.split(',')[2].slice(1)) {
          this.cartBox[val[1]].goods_price = (this.cartBox[val[1]].price.split(',')[2] * this.cartBox[val[1]].number).toFixed(2)
          this.cartBox[val[1]].all_price = (this.cartBox[val[1]].goods_price * 1 + 6).toFixed(2)
        }
        console.log(this.cartBox)
      },
      submit_cart () {
        let selectBox = this.selectCarts.filter(t => {
          t.time = format(new Date(), 'YYYY-MM-DD HH:mm:ss')
          return t
        })
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
          requests({type: 10, data: {data: JSON.stringify(selectBox)}}).then(value => {
            window.location.href = 'cart'
          })
        })
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
  .header{
    padding: 12px 4px;
    height: 56px;
    width: 100%;
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
    height: 440px;
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
    width: 301px;
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
    width: 300px;
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
  }
  .zone-goods .goods-price{
    float: left;
    font-size: 14px;
    line-height: 24px;
    margin-top: 48px;
    width: 165px;
    margin-left: 40px;
  }
  .zone-goods .goods-all{
    display: block;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    color: #ff7300;
    float: left;
    width: 130px;
    margin-top: 78px;
  }
  .cart{
    display: block;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    float: left;
    width: 95px;
    margin-top: 78px;
  }
  .total-all{
    display: block;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    float: left;
    width: 95px;
    margin-top: 74px;
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
</style>
