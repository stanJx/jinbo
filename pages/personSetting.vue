<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="logo" style="width: 108px;height: 40px"><img style="width:100%;height: 100%;" src="../assets/img/cart/goods_logo.png" alt=""></div>
      </div>

      <div class="userinfo">
        <div class="userbar">
          <div class="baseinfo">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess">
              <img class="avator" v-if="imageUrl" :src="imageUrl">
              <img class="avator" :src="this.user_info.avator" alt="" v-show="!imageUrl">
            </el-upload>
            <a href="" class="username">{{this.user_info.user_name}}</a>
          </div>
          <ul class="stuffs">
            <li><div>我的收获地址</div></li>
            <li>
              <el-dropdown trigger="click" style="width:100%;">
                  <span class="el-dropdown-link">
                    我的优惠信息<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix" style="width: 160px;">
                      <div class="droptitle">红包：&nbsp;<span>0</span></div>
                      <div class="droptitle">店铺优惠券：&nbsp;<span>1</span></div>
                      <div class="droptitle">1688积分：&nbsp;<span>540</span></div>
                      <div class="droptitle">1688点券卡：&nbsp;<span>1</span></div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </li>
            <li>
              <el-dropdown trigger="click" style="width: 100%;">
                <span class="el-dropdown-link">
                  我的支付宝<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" style="width:160px;">
                  <el-dropdown-item class="clearfix">
                    评论
                    <el-badge class="mark" :value="12" />
                  </el-dropdown-item>
                  <el-dropdown-item class="clearfix">
                    回复
                    <el-badge class="mark" :value="3" />
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>

        </div>
        <div class="scontent">
          <ul>
            <li><a href="/cart"><span class="li">待付款</span></a></li>
            <li><a href="/orderPerSetting"><span class="li">待发货</span></a></li>
            <li><a href="/orderPerSetting"><span class="li">待收获</span></a></li>
            <li><a href="/orderPerSetting"><span class="li">待评价</span></a></li>
            <li><a href=""><span class="li">退款</span></a></li>
          </ul>
        </div>
      </div>

      <div style="width: 100%;">
        <img src="../assets/img/person/01.png" style="width: 100%;" alt="">
      </div>

      <div>

      </div>
    </div>
  </div>
</template>

<script>
  import requests from '../api/axios'
  export default {
    mounted () {
      requests({type: 12, data: {user_id: sessionStorage.user_id}}).then(value => {
        console.log(value.data[0])
        this.user_info = value.data[0]
      })
    },
    data () {
      return {
        imageUrl: '',
        user_info: {}
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        console.log(file.name)
        this.imageUrl = 'http://localhost/commercial-goods/public/static/pic/thumbnail/' + file.name
        console.log(sessionStorage.user_id)
        requests({type: 14, data: {avator: this.imageUrl, user_id: sessionStorage.user_id}})
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
    text-decoration: none;
  }
  a:hover{
    color: #FF7300;
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .header{
    padding: 12px 4px;
    height: 56px;
    width: 100%;
  }
  .userinfo{
    width: 100%;
    height: 135px;
    border: 1px solid #e4eaee;
    margin-bottom: 23px;
    font-size: 12px;
    color: #4b4b4b;
    position: relative;
  }
  .userinfo .userbar{
    background: #f5f8fa;
    padding-top: 10px;
    height: 72px;
  }
  .userinfo .baseinfo{
    float: left;
    width: 39%;
  }
  .userinfo .baseinfo img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  .userinfo .baseinfo .avator{
    float: left;
    display: block;
    width: 52px;
    height: 52px;
    margin-right: 13px;
    margin-left: 12px;
    position: relative;
    border: 2px solid #FFF;
    border-radius: 50%;
    overflow: hidden;
  }
  .userinfo .baseinfo .username{
    margin-top: 28px;
    margin-left: 10px;
    display: block;
    color: #000;
    font-size: 14px;
    line-height: 23px;
  }
  .userinfo .stuffs{
    float: right;
    width: 61%;
    margin-right: -1px;
    margin-top: 9px;
  }
  .userinfo .stuffs li{
    width: 33%;
    display: inline;
    float: left;
  }
  .userinfo .stuffs li div{
    padding: 10px 0;
    color: #546d7e;
    text-align: center;
  }
  .droptitle{
    width: 100%;
    text-align: center;
  }
  .droptitle span{
    color: #f40;
    display: inline-block;
    margin-left: 4px;
  }
  .scontent{
    background: #fff;
  }
  .scontent ul{
    height: 52px;
    overflow: hidden;
  }
  .scontent ul li{
    width: 20%;
    float: left;
  }
  .scontent ul li a{
    padding: 17px 0;
    vertical-align: middle;
    display: block;
    color: #4b4b4b;
    text-align: center;
  }
  .li{
    height: 18px;
    line-height: 18px;
    border-left: 1px solid #e4eaee;
    font-weight: 400;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }
  .scontent ul li a span:hover{
    color: #f40;
  }
  .scontent ul li a span span{
    color: #f40;
  }
</style>
