<template>
  <div>
    <div class="container">
      <div class="bigTitle">
        <h1>{{title}}</h1>
      </div>

      <div class="leftBox">
        <LeftBox :picBox="picBox" :smallPic="smallPic" :bigPic="bigPic" :carousel="carousel" @returnPic="getPic"></LeftBox>
      </div>

      <div class="rightBox">
        <RightBox :picBox="picBox" :size="size" :number="number" @chooseColor="chooseColor" @chooseSize="chooseSize" @changeNumber="changeNumber"></RightBox>
      </div>
    </div>

    <div class="container">
      <Remark :goodsInfo="goodsInfo"></Remark>
    </div>
  </div>

</template>

<script>
  import LeftBox from '../components/goods/LeftBox.vue'
  import RightBox from '../components/goods/rightBox.vue'
  import Remark from '../components/goods/remark.vue'
  import request from '../api/ajax'

  export default {
    async asyncData () {
      let picBox = await request({type: 2, data: {text: 'ss'}}).then(value => {
        console.log(value.data)
        return value.data
      })
      let goodsInfo = await request({type: 3, data: {text: 'ss'}}).then(value => {
        console.log(value.data)
        return  value.data
      })
      return {picBox: picBox, goodsInfo: goodsInfo}
    },
    created () {
        this.smallPic =  this.picBox[0].pic,
        this.bigPic = this.picBox[0].bigPic,
        this.size =  this.picBox[0].size
        this.title = this.picBox[0].title
    },
    computed: {
      carousel () {
        return {amount: Math.ceil(this.picBox.length / 5), width: Math.ceil(this.picBox.length / 5) * 350 + 'px'}
      }
    },
    components: {LeftBox, RightBox, Remark},
    data () {
      return {
        title: '',
        smallPic: '',
        bigPic: '',
        size: [{}],
        number: 1
      }
    },
    methods: {
      getPic (val) {
        console.log(val)
        this.smallPic = val[0]
        this.bigPic = val[1]
      },
      chooseColor (index) {
        console.log(index)
        for (let o of this.picBox) {
          o.isActive = false
        }
        this.smallPic = this.picBox[index].pic
        this.bigPic = this.picBox[index].bigPic
        this.picBox[index].isActive = true
      },
      chooseSize (index) {
        console.log(index)
        for (let o of this.size) {
          o.active = false
        }
        this.size[index].active = true
      },
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
    margin-left: 15px;
  }

</style>
