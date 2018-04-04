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
              <strong>¥</strong>4.50
            </i>
            <em><div class="amount">30~49件</div></em>
          </span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="company">
        <a href="" class="address">深圳市龙岗区优美杰服装商行</a>
        <span>
          <a href="" class="year">
            <img src="../../assets/img/home/small_logo.png" alt="">
            一年
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

      }
    },
    methods: {
      mouseenter () {
        this.$emit('returnShow', [this.index, false])
      },
      mouseleave () {
        this.$emit('returnShow', [this.index, true])
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
    width: 210px;
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
    width: 210px;
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
    height: 18px;
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
