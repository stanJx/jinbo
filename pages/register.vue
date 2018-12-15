<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="logo" style="width: 500px;height: 40px">
          <div class="img"><img style="width:100px;height: 100%;" src="../assets/img/cart/goods_logo.png" alt=""></div>
          <div class="sub_logo">账号注册</div>
        </div>
      </div>

      <div style="overflow: hidden;margin-bottom: 70px;">
        <div class="feature">
          <img src="../assets/img/login/01.jpg" style="width: 100%;height: 100%;" alt="">
        </div>

        <div class="formarea">
          <el-tabs v-model="activeName">
            <el-tab-pane label="个人账号注册" name="first" style="padding-top: 15px;">
              <Person @submitForm="submitForm"></Person>
            </el-tab-pane>
            <el-tab-pane label="企业账号注册" name="second" style="padding-top: 15px;">
              <Business></Business>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

      <div class="buttom_tips"><img src="../assets/img/login/03.png" style="width: 16px;height: 16px;margin-right: 5px;" alt=""><a href="">实力优品—热卖榜单，服务保障，放心采购！</a></div>
      <div class="buttom_tips"><img src="../assets/img/login/04.png" style="width: 16px;height: 16px;margin-right: 5px;" alt=""><a href="">随时随地上网做生意，一切尽在手机阿里！</a> <a href="" class="website"><img src="../assets/img/login/05.png" style="width: 16px;height: 16px;" alt="">“阿里巴巴中国站登录”改进建议</a></div>
    </div>
  </div>
</template>

<script>
  import Person from '../components/register/person.vue'
  import Business from '../components/register/business.vue'
  import requests from '../api/axios'
  export default {
    components: { Person, Business },
    created () {

    },
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      submitForm (val) {
        console.log(typeof val.name)
        requests({type: 6, data: {user_name: val.name, password: val.pass, phone: val.telephone}}).then(value => {
          console.log(value.data)
          if (value.data.length === 0) {
            requests({type: 7, data: {user_name: val.name}}).then(value => {
              console.log(value, '*******')
              sessionStorage.user_name = value.data[0].user_name
              sessionStorage.user_id = value.data[0].id
              window.location.href = '/'
            })
          } else {
            this.$notify.error({
              title: '错误',
              message: '您输入的用户名已存在，请重新注册'
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
    height: 420px;
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
</style>
