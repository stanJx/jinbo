<template>
  <div>
    <div class="top">
      <div class="container">
        <div class="mobile"><img style="position: absolute;top:8px;" src="../assets/img/home/mobile.png" alt=""><span style="display: inline-block;margin-left: 12px;">手机阿里</span></div>
        <ul style="float: left;">
          <li style="width: 80px"><a href="">{{this.user_name}}</a></li>
          <li><a href="/login">请登入</a></li>
          <li><a href="/register">免费注册</a> </li>
        </ul>
        <ul style="float: right;">
          <li style="width: 70px;"><a href="">1688首页</a></li>
          <li style="width: 80px;">
              <el-dropdown trigger="click" style="width:100%;">
                  <span class="el-dropdown-link">
                    我的阿里<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown" style="z-index: 99999999">
                  <el-dropdown-item class="clearfix" style="width: 100px;">
                    <div class="droptitle"><a href="/personSetting">买家中心</a></div>
                    <div class="droptitle"><a href="/orderProcess">已购买的货物</a></div>
                    <div class="droptitle"><a href="">优惠券</a></div>
                    <div class="droptitle"><a href="">发布询价单</a></div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </li>
          <li><a href="/cart">进货单</a></li>
        </ul>
      </div>
    </div>
    <Header @searchInput="searchInput"></Header>
    <Middle></Middle>
    <div class="content">
      <div class="container" >
        <el-row style="margin-left: -22.5px;">
          <el-col :span="6" v-for="(item, index) in data" :key="index" style="width: 220px;margin-left:22.5px;margin-bottom: 20px;">
            <a :href=" `/goods?id=${item.id}` ">
              <PicBox :item="item" :index="index" @returnShow="callback"></PicBox>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/home/header.vue'
  import Middle from '../components/home/Middle.vue'
  import PicBox from '../components/home/PicBox.vue'
  import request from '../api/ajax'
  import requests from '../api/axios'

  export default {
    asyncData () {
      return request({type: 1, data: {text: 'ss'}}).then(value => {
        console.log(value.data)
        for (let o of value.data) {
          o.show = true
        }
        return {data: value.data}
      })
    },
    components: { Header, Middle, PicBox},
    mounted () {
      console.log(sessionStorage.user_name, '******', this.$route.query.catalog)
      if (this.$route.query.catalog) {
        requests({type: 15, data: {catalog: this.$route.query.catalog}}).then(value => {
          for (let o of value.data) {
            o.show = true
          }
          this.data = value.data
        })
      }
      this.user_name = sessionStorage.user_name
    },
    data () {
      return {
        picTitle: true,
        showActive: false,
        user_name: '请点击登录'
      }
    },
    methods: {
      callback (val) {
        this.data[val[0]].show = val[1]
      },
      searchInput (val) {
        console.log(val)
        requests({type: 5, data: {input: val}}).then(value => {
          console.log(value)
          for (let o of value.data) {
            o.show = true
          }
          this.data = value.data
        })
      }
    }
  }
</script>

<style scoped>
  .top{
    width:100%;
    height: 29px;
    background:#ffffff;
    line-height: 29px;
    border-bottom: 1px solid #ddd;
    color: #555;
    font-size: 12px;
  }
  .top .mobile{
    float: left;
    padding-left: 16px;
    padding-right: 10px;
    background-position: 0 -115px;
    position: relative;
  }
  .top a{
    text-decoration: none;
    color: #555;
  }
  .top a:hover{
    color: #FF7300;
  }
  ul{
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  ul li{
    float: left;
    padding-right: 8px;
    width: 60px;
  }
  ul li:first-child{
    padding-left: 11px;
  }
  /*公共样式*/
  .container{
    width:1190px;
    /*border:1px solid red;*/
    margin: 0 auto;
    height: 100%;
  }
  .content{margin-top:20px;}
</style>
