<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="logo" style="width: 108px;height: 40px"><img style="width:100%;height: 100%;" src="../assets/img/cart/goods_logo.png" alt=""></div>
      </div>

      <div class="rate-compose">
        <div class="compose-header">
          <span>其他买家，需要你的建议哦！</span>
          <div class="compose-scrolltip">
            <img src="../assets/img/remark/01.png" alt=""><span>认真写评价最多可获天猫达人成长值20点！</span>
          </div>

          <div class="compose-order">
            <div class="compose-order-up">
              <div class="compose-master">
                <div class="compose-comment">
                  <div class="rate-right-side">
                    <div class="rate-box">
                      <div class="rate-box-title">评价商品</div>
                      <div class="rate-input-box">
                        <div class="text-input-box">
                          <div class="edit-box">
                            <!--**************富文本编辑器******************-->
                            <Edit :autoSave="edit.autoSave" :word="word"  @changeContent="changeContent" placeholder="请输入文章内容(500-3000字)" ref="edit"></Edit>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rete-box">
                    <div class="rate-box-title">晒图片</div>
                    <div class="pic-box">
                      <div style="height: 180px;width: 350px;overflow-y: auto;margin-top: 10px;"><upload-pic :imgList="imgList" @uploadSuccess="uploadSuccess" @handleRemove="handleRemove"></upload-pic></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="compose-sub" style="position: relative">
                <RateBox :rateBox="rateBox" @onRate1="onRate1" @onRate2="onRate2" @onRate3="onRate3"></RateBox>
              </div>
            </div>
            <div class="compose-order-down">
              <Radio @onRadio1="onRadio1" @onRadio2="onRadio2"></Radio>
            </div>
          </div>
        </div>
        <div class="submit">
          <el-button style="background: #c40000;color: #fff; font-weight: bold;margin-left: 48%;margin-top: 20px;" @click="submit_remark">提交评价</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Edit from '../components/remark/edit.vue'
  import uploadPic from '../components/remark/uploadPic.vue'
  import RateBox from '../components/remark/RateBox.vue'
  import Radio from '../components/remark/Radio.vue'
  import {format} from 'date-fns'
  import requests from '../api/axios'
  export default {
    components: { Edit, uploadPic, RateBox, Radio },
    mounted() {
      // 自动保存
      this.autoSave = window.setInterval(()=>{
        this.edit.autoSave = true;
        this.autoUp();
      },1000)
      requests({type: 12, data: {user_id: sessionStorage.user_id}}).then(value => {
        console.log(value.data[0].avator, '$$')
        this.user_info = value.data[0]
      })
    },
    destroyed () {
      clearInterval(this.autoSave)
    },
    data () {
      return {
        edit: {
          autoSave: false
        },
        word: '',
        user_info: [],
        rateBox: {
          rate1: 0,
          rate2: 0,
          rate3: 0
        },
        radioValue1: '',
        radioValue2: '',
        imgList: [],
        img_url: '',
        time: format(new Date(), 'YYYY-MM-DD HH:mm:ss')
      }
    },
    methods: {
      // 上传组件
      uploadSelect (val) {
        console.log(val);
        this.upload.img = window.URL.createObjectURL(val);
        this.clipDialog = true
      },
      save () {
        let param = this.saveCheck()
        if (param && this.loading.save) {
          this.loading.save = false
          this.$Message.success('保存成功');
        }
      },
      // 自动保存
      autoUp () {
        this.edit.autoSave = false
      },
      saveCheck () {
        if (this.$refs.title.getTitle().len === 0) {this.$Message.error('起码起个标题吧'); return false}
        return this.getForm()
      },
      onRate1 (val) {
        this.rateBox.rate1 = val
      },
      onRate2 (val) {
        this.rateBox.rate2 = val
      },
      onRate3 (val) {
        this.rateBox.rate3 = val
      },
      onRadio1 (val) {
        console.log(val)
        this.radioValue1 = val
      },
      onRadio2 (val) {
        console.log(val)
        this.radioValue2 = val
      },
      uploadSuccess (val) {
        this.imgList = val
        this.imgList.length > 0 ? this.img_url = 'http://localhost/commercial-goods/public/static/pic/thumbnail/' + val[0].name : this.img_url = ''
        console.log(this.img_url, '**')
      },
      handleRemove (val) {
        this.imgList = val
        this.imgList.length > 0 ? this.img_url = 'http://localhost/commercial-goods/public/static/pic/thumbnail/' + val[0].url.name : this.img_url = ''
        console.log(this.img_url, '**')
      },
      changeContent (val) {
        this.word = val
      },
      submit_remark () {
        if (this.word.length === 0) {
          this.$notify.error({
            title: '错误',
            message: '请填写评价内容'
          })
        } else {
          requests({type: 13, data: {user_name: this.user_info.user_name, content: this.word, pic: this.img_url, goods_id: this.$route.query.goods_id, size: this.$route.query.size, color: this.$route.query.color, time: this.time, remark_grade: this.radioValue1 === '好' ? '1' : '2', submit_id: this.$route.query.submit_id, head_img: this.user_info.avator}}).then(value => {
            window.location.href = '/'
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
  .header{
    padding: 12px 4px;
    height: 56px;
    width: 100%;
  }
  .rate-compose{
    border: 2px solid #f0eceb;
    margin: 10px 0;
    background: #F6F6F6;
    overflow: hidden;
  }
  .compose-header{
    padding: 25px 0 30px 5%;
    position: relative;
  }
  .compose-header span{
    text-indent: -99em;
    height: 18px;
    font-weight: 500;
    font-size: 20px;
  }
  .compose-order{
    margin-top: 40px;
  }
  .compose-scrolltip{
    position: absolute;
    right: 15px;
    top: 5px;
    height: 22px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    color: #666;
    padding-left: 22px;
  }
  .compose-scrolltip span{
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    color: #666;
  }
  .compose-master{
    width: 599px;
    float: left;
  }
  .compose-comment {
    margin-bottom: 30px;
  }
  .rate-box-title{
    float: left;
    line-height: 200px;
    height: 200px;
    width: 70px;
    text-align: center;
    vertical-align: top;
    color: #666;
    background-color: #EFEFEF;
    border-bottom: 1px solid #E7E7E7;
  }
  .pic-box{
    float: left;
    height: 200px;
    width: 480px;
    background: #ffffff;
    border-right: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
  }
  .rate-input-box{
    float: left;
    height: 200px;
    border-top: 1px solid #E7E7E7;
    width: 480px;
    position: relative;
  }
  .text-input-box{
    /*padding: 10px 9px 0;*/
    height:  199px;
    background-color: #fff;
    position: relative;
    border-right: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
  }
  .compose-sub{
    float: left;
    width: 300px;
    margin-left: 50px;
  }
  .compose-order-down{
    float: left;
    width: 100%;
    height: 160px;
    margin-top: 80px;
    padding: 0px 5%;
  }
  .submit{
    float: left;
    width: 100%;
    height: 80px;
    background: #ffffff;
  }
</style>
