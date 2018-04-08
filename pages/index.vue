<template>
  <div style="overflow-x: hidden">
    <Header></Header>
    <Middle></Middle>
    <div class="content">
      <div class="container" >
        <el-row style="margin-left: -22.5px;">
          <el-col :span="6" v-for="(item, index) in data" :key="index" style="width: 220px;margin-left:22.5px;margin-bottom: 20px;">
            <PicBox :item="item" :index="index" @returnShow="callback"></PicBox>
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
  export default {
    asyncData () {
      return request({type: 1, data: {text: 'ss'}}).then(value => {
        console.log(value.data)
        return {data: value.data}
      })
    },
    mounted() {
      console.log(this.data)
    },
    components: { Header, Middle, PicBox},
    data () {
      return {
        picTitle: true,
        showActive: false
      }
    },
    methods: {
      callback (val) {
        this.data[val[0]].show = val[1]
        console.log(val[0])
      }
    }
  }
</script>

<style scoped>
  /*公共样式*/
  .content
  .container{
    width:1190px;
    /*border:1px solid red;*/
    margin: 0 auto;
    height: 100%;
  }
  .content{margin-top:20px;}
</style>
