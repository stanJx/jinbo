<template>
  <div>
    <div class="container">
      <div class="header" style="width: 100%;height: 100px;">
        <img style="width: 100%;height: 100%;" src="../assets/img/goods/header.png" alt="">
      </div>
      <div class="bigTitle">
        <h1>{{title}}</h1>
      </div>

      <div class="leftBox">
        <LeftBox :picBox="picBox" :smallPic="smallPic" :bigPic="bigPic" :carousel="carousel" @returnPic="getPic"></LeftBox>
      </div>

      <div class="rightBox">
        <RightBox :indexs="indexs" :picBox="picBox" :bigPicBox="bigPicBox" :size="size" :number="number" @chooseColor="chooseColor" @chooseSize="chooseSize" @changeNumber="changeNumber" :numbers="numbers" :price="price"></RightBox>
        <div class="button">
          <a :href="href"><el-button style="background: #ff7300; color:white;width: 147px;height: 55px;" @click="submitData()">立即订购</el-button></a>
          <el-button style="background: #ff7300; color:white;margin-left: 5px;" @click="submit_cart"><img src="../../assets/img/home/shopping.png" alt="" style="width:22px; height:22px;float: left;padding-top: 4px;"><span style="line-height: 30px; font-size: 16px;">加入购物车</span></el-button>
        </div>
      </div>

      <div class="lastBox">
        <img src="../assets/img/goods/01.png" alt="">
      </div>
    </div>

    <div class="container" style="margin-top:50px;">
      <Remark :goodsInfo="goodsInfo" :impress="impress" :star="star" @radioChange="radioChange"></Remark>
    </div>
  </div>

</template>

<script>
  import LeftBox from '../components/goods/LeftBox.vue'
  import RightBox from '../components/goods/rightBox.vue'
  import Remark from '../components/goods/remark.vue'
  import {format} from 'date-fns'
  import request from '../api/ajax'
  import requests from '../api/axios'

  export default {
//    async asyncData () {
//      let picBox = await request({type: 2, data: {text: 'ss'}}).then(value => {
//        console.log('**************')
//        console.log(value.data)
//        console.log('*************')
//        for (let o of value.data) {
//          o.isActive = false
//        }
//        return value.data
//      })
//      let goodsInfo = await request({type: 3, data: {text: 'ss'}}).then(value => {
//        console.log('*************')
//        console.log(value.data)
//        console.log('*************')
//        return  value.data
//      })
//      return {picBox: picBox, goodsInfo: goodsInfo}
//    },
    created () {
      requests({type: 2, data: {id: this.$route.query.id}}).then(value => {
        console.log(value.data.big_pic.split(',')[0], 'sss')
        this.goodsBox = value.data
        this.picBox = value.data.thumbnail.split(',')
        this.bigPicBox = value.data.big_pic.split(',')
        this.price = value.data.price.split(',')
        this.numbers = value.data.number.split(',')
        this.number1 = Number(this.numbers[0].split('-')[0])
        this.smallPic =  this.picBox[0]
        this.bigPic = this.bigPicBox[0]
        this.title = value.data.title
        this.address = value.data.address
        this.colors = value.data.color.split(',')
        this.color = value.data.color.split(',')[this.indexs]
        this.impress = value.data.impress.split(',')
        this.star = Number(value.data.star)
        this.number < this.number1 ? this.href = this.$route.fullPath: this.href = `/order?size=${this.is_size}&id=${this.$route.query.id}&number=${this.number}&color=${this.indexs}`
      })
      requests({type: 3, data: {id: this.$route.query.id}}).then(value => {
        this.remarkInfo = value.data
        this.goodsInfo = value.data
      })
    },
    computed: {
      carousel () {
        return {amount: Math.ceil(this.picBox.length / 5), width: Math.ceil(this.picBox.length / 5) * 350 + 'px'}
      }
    },
    components: {LeftBox, RightBox, Remark},
    data () {
      return {
        goodsBox: [{}],
        picBox: [{}],
        bigPicBox: [],
        goodsInfo: [],
        remarkInfo: [{}],
        impress: [],
        star: 0,
        title: '',
        smallPic: '',
        bigPic: '',
        size: [{'size': 'M', 'active': false}, {'size': 'L', active: false}, {'size': 'XL', active: true}, {'size': 'XXL', active: false}],
        is_size: 'XL',
        number: 1,
        number1: 0,
        indexs: 0,
        price: [],
        numbers: [],
        colors: [],
        color: '',
        href: '',
        singlePrice: '',
        goods_price: '',
        address: '',
        time: format(new Date(), 'YYYY-MM-DD HH:mm:ss')
      }
    },
    watch: {
      number () {
        this.number < this.number1 ? this.href = this.$route.fullPath: this.href = `/order?size=${this.is_size}&id=${this.$route.query.id}&number=${this.number}&color=${this.indexs}`
        if (this.number >= this.numbers[0].split('-')[0] && this.number <= this.numbers[0].split('-')[1] ) {
          this.singlePrice = this.price[0]
        }
        if (this.number >= this.numbers[1].split('-')[0] && this.number <= this.numbers[1].split('-')[1] ) {
          this.singlePrice = this.price[1]
        }
        if (this.number >= this.numbers[2].slice(1)) {
          this.singlePrice = this.price[2]
        }
        this.goods_price = (this.singlePrice * this.number).toFixed(2)
      }
    },
    methods: {
      getPic (val) {
        console.log(val)
        this.smallPic = this.picBox[val]
        this.bigPic = this.bigPicBox[val]
      },
      chooseColor (index) {
        this.smallPic = this.picBox[index]
        this.bigPic = this.bigPicBox[index]
        this.color = this.colors[index]
        this.indexs = index
        console.log(this.color)
      },
      chooseSize (index) {
        console.log(index)
        for (let o of this.size) {
          o.active = false
        }
        this.size[index].active = true
        this.is_size = this.size[index].size
      },
      changeNumber (val) {
        console.log(val)
        val === 'remove' ? this.number = this.number - 1 : this.number = this.number + 1
      },
      submitData () {
        if (this.number < this.number1) {
          alert('数量或金额不满足商家混批规则')
        }
      },
      // **********提交购物车********
      submit_cart () {
        if (this.number < this.number1) {
          alert('数量或金额不满足商家混批规则')
        } else {
          console.log(this.numbers[0].split('-')[0])
          console.log(typeof this.singlePrice, this.number, this.smallPic, this.goods_price, this.address)
          requests({type: 8, data: {goods_id: this.$route.query.id, user_id: sessionStorage.user_id, title: this.title, number: this.number, size: this.is_size, color: this.color, pic: this.smallPic, price: this.goodsBox.price, numbers: this.goodsBox.number, single_price: this.singlePrice, goods_price: this.goods_price, address: this.address, fare: '6.00', all_price: (this.goods_price * 1 + 6).toFixed(2), time: this.time}})
          window.location.href = '/cart'
        }
      },
      // *****点击单选按钮*********
      radioChange (val) {
        console.log(val)
        if (val === '全部') {
          this.goodsInfo = this.remarkInfo
        }
        if (val === '图片') {
          this.goodsInfo = this.remarkInfo.filter(t => {
            return t.pic.length > 0
          })
        }
        if (val === '好评') {
          this.goodsInfo =  this.remarkInfo.filter(t => {
            return t.remark_grade === '1'
          })
        }
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
  .bigTitle{
    padding: 14px 0;
    zoom: 1;
    width: 100%;
    height: 45px;
  }
  .bigTitle h1{
    float: left;
    font-size: 18px;
    color: #222;
    margin-right: 20px;
    font-weight: 400;
    font-family: \5FAE\8F6F\96C5\9ED1;
  }
  .leftBox{
    float: left;
    width: 380px;
  }
  .rightBox{
    float: left;
    width: 640px;
    height: 476px;
    margin-left: 50px;
  }
  .lastBox{
    float: left;
  }
  .button{
    margin-top:20px;
    margin-left: 36px;
  }

</style>
