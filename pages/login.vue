<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="logo" style="width: 500px;height: 40px">
          <div class="img"><img style="width:100px;height: 100%;" src="../assets/img/cart/goods_logo.png" alt=""></div>
          <div class="sub_logo">登录</div>
        </div>
      </div>

      <div style="overflow: hidden;margin-bottom: 150px;">
        <div class="feature">
          <img src="../assets/img/login/01.jpg" style="width: 100%;height: 100%;" alt="">
        </div>

        <div class="formarea">
          <div class="msgTip"><img src="../assets/img/login/02.png" style="width: 100%;height:100%;" alt=""></div>
          <div class="login_box">
            <div style="padding: 25px;">
              <div class="login_title">密码登录</div>
              <div style="margin-top: 20px;">
                <el-input placeholder="会员名/手机号/邮箱" v-model="user_name">
                  <template slot="prepend"><img src="../assets/img/login/login.png" style="width:20px;height: 20px;" alt=""></template>
                </el-input>
              </div>

              <div style="margin-top: 20px;">
                <el-input v-model="password">
                  <template slot="prepend"><img src="../assets/img/login/pwd.png" style="width:20px;height: 20px;" alt=""></template>
                </el-input>
              </div>
              <button class="button" @click="login_in">登录</button>
              <div class="login_link">
                <a href="/register">免费注册</a>
                <a href="">忘记会员名</a>
                <a href="">忘记密码</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="buttom_tips"><img src="../assets/img/login/03.png" style="width: 16px;height: 16px;margin-right: 5px;" alt=""><a href="">实力优品—热卖榜单，服务保障，放心采购！</a></div>
      <div class="buttom_tips"><img src="../assets/img/login/04.png" style="width: 16px;height: 16px;margin-right: 5px;" alt=""><a href="">随时随地上网做生意，一切尽在手机阿里！</a> <a href="" class="website"><img src="../assets/img/login/05.png" style="width: 16px;height: 16px;" alt="">“阿里巴巴中国站登录”改进建议</a></div>
    </div>
  </div>
</template>

<script>
  import requests from '../api/axios'
  export default {
    data () {
      return {
        user_name: '',
        password: ''
      }
    },
    created () {

    },
    methods: {
      login_in () {
        console.log(this.user_name)
        requests({type: 7, data: {user_name: this.user_name, password: this.password}}).then(value => {
            console.log(value.data.length)
          if (value.data.length !== 0) {
            console.log(value.data[0].password)
            if (value.data[0].password !== this.password) {
              this.$notify.error({
                title: '错误',
                message: '您输入的密码错误，请重新输入'
              })
            } else {
              sessionStorage.user_name = value.data[0].user_name
              sessionStorage.user_id = value.data[0].id
              window.location.href = '/'
            }
          } else {
            this.$notify.error({
              title: '错误',
              message: '您输入的用户名不存在，请重新登录'
            })
          }
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
    text-decoration: none;
    color: #666;
    font-size: 12px;
  }
  .header{
    padding: 12px 4px;
    height: 56px;
    width: 100%;
  }
  .img{
    float: left;
    margin-left: 30px;
    width: 108px;
    height: 100%;
  }
  .sub_logo{
    float: left;
    padding-left: 12px;
    height: 40px;
    line-height: 40px;
    font-family: "\5FAE\8F6F\96C5\9ED1";
    font-size: 26px;
    font-weight: 700;
    color: #666;
  }
  .feature{
    float: left;
    width: 578px;
    height: 350px;
  }
  .formarea{
    float: left;
    width: 360px;
    margin-left: 100px;
  }
  .msgTip{
    width:360px;
    height: 38px;
    margin-bottom: 20px;
  }
  .login_box{
    width: 360px;
    height: 290px;
    border: 1px solid #CCC;
    /*padding: 25px;*/
    color: #6c6c6c;
    background: #fff;
  }
  .login_title{
    height: 18px;
    line-height: 18px;
    font-size: 18px;
    color: #3c3c3c;
    margin-top: 9px;
    padding-bottom: 8px;
    font-weight: 700;
    color:#666;
  }
  .button{
    margin-top: 20px;
    width: 309px;
    height: 42px;
    border: 0;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    line-height: 42px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background: #f40;
    border-radius: 3px;
  }
  .login_link{
    margin-top: 25px;
    overflow: hidden;
    text-align: right;
  }
  .login_link a{
    margin-right: 10px;
    margin-left: 5px;
    color: #6c6c6c;
    text-decoration: none;
    font-size: 12px;
  }
  .login_link a:hover{
    color: #ff6000;
  }
  .buttom_tips{
    float: left;
    margin-left: 30px;
    line-height: 21px;
    font-size: 14px;
    width: 1000px;
  }
  .website{
    color: #0461AF;
    float: right;
  }
  .el-input-group__append, .el-input-group__prepend{
    background: #333;
  }
</style>
