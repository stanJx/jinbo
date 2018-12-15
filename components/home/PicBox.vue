<template>
  <div>
    <el-card :body-style="{ padding: '0px' }">
      <div class="image" @mouseenter="mouseenter(index)" @mouseleave="mouseleave(index)">
        <img :src="item.pic">
        <div :class="{picTitle: item.show, showActive: !item.show}"><a href="">{{item.title}}</a></div>
      </div>
      <div class="price">
        <a>
          <span>
            <i class="money">
              <strong>¥</strong>{{this.price[0]}}
            </i>
            <em><div class="amount">{{this.number[0]}}件</div></em>
          </span>
          <span>
            <i class="money">
              <strong>¥</strong>{{this.price[1]}}
            </i>
            <em><div class="amount">{{this.number[1]}}件</div></em>
          </span>
          <span>
            <i class="money">
              <strong>¥</strong>{{this.price[2]}}
            </i>
            <em><div class="amount">{{this.number[2]}}件</div></em>
          </span>
        </a>
      </div>
      <div class="company">
        <a href="" class="address">{{this.item.address}}</a>
        <span>
          <a href="" class="year">
            <img src="../../assets/img/home/small_logo.png" alt="">
            {{this.item.year}}年
          </a>
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: ['item', 'index'],
    data () {
      return{
        price: this.item.price.split(','),
        number: this.item.number.split(',')
      }
    },
    methods: {
      mouseenter () {
        this.$emit('returnShow', [this.index, false])
      },
      mouseleave () {
        this.$emit('returnShow', [this.index, true])
      },
      choosePic () {
        this.$emit('choosePic')
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
    color: #888;
  }
  a:hover{
    transition: color .3s ease 0s;
    color: #FF7300;
  }
  .year:hover, .amount:hover{
    transition: color .3s ease 0s;
    color: #FF7300;
  }
  .picTitle{
    font-size: 12px;
    display: block;
    position: absolute;
    visibility: hidden;
    left: 0;
    bottom: 0;
    line-height: 18px;
    color: #fff;
    text-align: left;
    background: rgba(80,156,30,.8);
    height: 38px;
    width: 100%;
    padding: 1px 5px 1px 5px;
  }
  .showActive{
    font-size: 12px;
    display: block;
    position: absolute;
    visibility: visible;
    left: 0;
    bottom: 0;
    line-height: 18px;
    color: #fff;
    text-align: left;
    background: rgba(80,156,30,.8);
    height: 38px;
    width: 100%;
    padding: 1px 5px 1px 5px
  }
  .content .price{
    width:100%;
    height: 48px;
  }
  .image{
    position: relative;
    width: 220px;
    height: 220px;
    overflow: hidden;
  }
  .image img{
    width:100%;
    height:100%;
  }
  .image a{
    color: white;
  }
  .image a:hover{
    transition: color .3s ease 0s;
    color: #FF7300;
  }
  .image .picTitle a{
    line-height: 18px;
    color: #fff;
    text-align: left;
    font-size: 12px;
  }
  .image img:hover{
    width: 240px;
    height: 240px;
    transform: scale(1);
    transition: all .5s ease 0s;
  }
  .el-card:hover{
    border:1px solid #FF7300;
  }
  .price span{
    padding: 6px 3px 6px 7px;
    width: 62px;
    display: block;
    float: left;
    height: 38px;
    line-height: 20px;
    padding-top: 8px!important;
    /*overflow: hidden;*/
    font-style: normal;
    word-break: break-all;
    border-left: 1px solid #efefef;
  }
  .price span:first-child{
    border-left: none;
  }
  .price span i{
    height: 14px;
    line-height: 14px;
    float:left;
    margin-bottom: 3px;
    color: #ff7300;
    width: 100%;
    font-size: 12px;
    font-style: normal;
    white-space: nowrap;
  }
  .price span em div{
    float: left;
    width: 100%;
    height: 14px;
    font-size: 12px;
    font-style: normal;
    line-height: 14px;
    color: #555;
    word-break: break-all;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .company{
    border-top: 1px solid #efefef;
    padding: 10px;
    /*height: 18px;*/
    overflow: hidden;
    color: #888;
  }
  .company .address{
    float: left;
    width: 9em;
    height: 16px;
    display: inline-block;
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .company span{
    float: right;
  }
  .company span a{
    font-size: 12px;
    color: #555;
    line-height: 18px;
    height: 16px;
  }
  .company img{
    width: 18px;
    height: 18px;
  }
</style>
