<template>
  <div style="overflow-x: hidden">
    <div class="header">
      <div class="container">
        <div class="logo">
          <img src="../assets/img/home/logo.png" alt="">
        </div>
        <div class="search">
          <el-input
            placeholder="阿里巴巴首页 "
            v-model="input"
            clearable
            size="large">
            <el-button type="primary" style="background: #ff500b; color: #fff;width:100px;"  slot="append">搜索</el-button>
          </el-input>
          <ol class="introduce">
            <li>热搜:</li>
            <li><a href="">女装</a></li>
            <li><a href="">童装</a></li>
            <li><a href="">2018女装连衣裙</a></li>
            <li><a href="">连衣裙</a></li>
            <li><a href="">手机壳</a></li>
            <li><a href="">女包</a></li>
            <li><a href="">女鞋</a></li>
            <li><a href="">玩具</a></li>
            <li><a href="">手表</a></li>
            <li><a href="">拖鞋</a></li>
            <li><a href="">耳机</a></li>
          </ol>
        </div>
      </div>
    </div>

    <div class="tab">
      <div class="container">
        <ul>
          <li><a href="">阿里巴巴首页</a></li>
          <li><a href="">阿里巴巴官网首页</a></li>
          <li><a href="">阿里巴巴</a></li>
          <li><a href="">阿里巴巴批发</a></li>
          <li><a href="">官网</a></li>
          <li><a href="">阿里巴巴abs管生产</a></li>
          <li><a href="">旺铺首页装修</a></li>
        </ul>
      </div>
    </div>

    <div class="content">
      <div class="container" >
        <el-row style="margin-left: -22.5px;">
          <el-col :span="6" v-for="(item, index) in data" :key="index" style="width: 220px;margin-left:22.5px;margin-bottom: 20px;">
            <el-card :body-style="{ padding: '0px' }">
              <div class="image" @mouseenter="mouseenter(index)" @mouseleave="mouseleave(index)">
                <img :src="item.pic">
                <div :class="{picTitle: item.show, showActive: !item.show}"><a href="">{{item.title}}</a></div>
              </div>
              <div class="price">
                <a href="">
                                    <span>
                                        <i class="money">
                                            <strong>¥</strong>4.50
                                        </i>
                                        <em><a href="">30~49件</a></em>
                                    </span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div class="company">
                <a href="" class="address">深圳市龙岗区优美杰服装商行</a>
                <span>
                                    <a href="">
                                        <img src="../assets/img/home/small_logo.png" alt="">
                                        一年
                                    </a>
                                </span>
              </div>
            </el-card>
          </el-col>
        </el-row>

      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    asyncData () {
      return axios({
        method: 'POST',
        url: 'http://localhost:3003/jin',
        data: {}
      }).then(response => {
        return {title: 'dsf'}
      })
    },
    data () {
      return {
        input: '',
        data: [],
        picTitle: true,
        showActive: false
      }
    },
    methods: {
      mouseenter: function (index) {
        this.data[index].show = false
      },
      mouseleave: function (index) {
        this.data[index].show = true
      }
    }
  }
</script>

<style scoped>
  /*公共样式*/
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
  a{
    text-decoration: none;
    color: #888;
  }
  .content a:hover{
    transition: color .3s ease 0s;
    color: #FF7300;
  }
  .container{
    width:1190px;
    /*border:1px solid red;*/
    margin: 0 auto;
    height: 100%;
  }
  .header{
    background: #f6f6f6;
    margin-bottom: 16px;
    width: 100%;
    color: #555;
    height: 110px;
  }
  .header .container{
    display: flex;
  }
  .logo{
    width: 46%;
    height: 68px;
    margin-top: 30px;
    /*border:1px solid green;*/
  }
  .logo img{
    width: 285px;
    height: 100%;
  }
  .search{
    width: 54%;
    height: 68px;
    margin-top: 30px;
  }
  .search .el-input{
    width:100%;
  }
  .search ol {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 13px;
    margin-top: 6px;
  }
  .search ol li {
    float: left;
    display: inline;
    height: 18px;
    margin: 0 9px 0 9px;
    color: #555;
  }
  .search ol li:first-child{
    color: #ff7300;
    font-size: 13px;
    cursor: default;
  }
  .search ol li a{
    height: 18px;
    line-height: 17px;
    text-decoration: none;
    color:#999;
  }
  .tab{
    padding: 0 5px;
    margin: 0 auto;
    width: 100%;
    height: 40px;
  }
  .tab .container{
    background: #ff7300;
  }
  .tab ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tab ul li{
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .tab ul li a{
    float: left;
    display: inline;
    height: 20px;
    padding: 10px 16px;
    background: #ff7300;
    color: #fff;
    text-decoration: none;
  }
  .tab ul li a:hover{
    background: #FF6000;
  }
  .content{margin-top:20px;}
  .content .image{
    position: relative;
    width: 220px;
    height: 220px;
  }
  .content .image img{
    width:100%;
    height:100%;
  }
  .content .image a{
    color: white;
  }
  .content .image a:hover{
    transition: color .3s ease 0s;
    color: #FF7300;
  }
  .content .image .picTitle a{
    line-height: 18px;
    color: #fff;
    text-align: left;
    font-size: 12px;
  }
  .content .image img:hover{
    transform: scale(1);
    transition: all .5s ease 0s;
  }
  .content .price{
    width:100%;
    height: 48px;
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
  .price span em a{
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
    padding: 6px 10px 15px 10px;
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
  .content .el-card:hover{
    border:1px solid #FF7300;
  }
</style>
