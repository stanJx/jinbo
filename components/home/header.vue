<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img src="../../assets/img/home/logo.png" alt="">
      </div>
      <div class="search">
        <el-input
          placeholder="阿里巴巴首页"
          v-model="input"
          clearable
          size="large"
          @keyup.enter.native="searchInput">
          <el-button type="primary" style="background: #ff500b; color: #fff;width:100px;"  slot="append" @click="searchInput">搜索</el-button>
        </el-input>
        <ol class="introduce">
          <li>热搜:</li>
          <li><a :href="`/?catalog=${'1'}`">女装</a></li>
          <li><a :href="`/?catalog=${'2'}`">童装</a></li>
          <li><a href="">2018女装连衣裙</a></li>
          <li><a href="">连衣裙</a></li>
          <li><a href="">手机壳</a></li>
          <li><a href="">女包</a></li>
          <li><a href="">女鞋</a></li>
          <li><a href="">玩具</a></li>
          <li><a href="">手表</a></li>
          <li><a href="">拖鞋</a></li>
        </ol>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        input: ''
      }
    },
    methods: {
      searchInput () {
        this.$emit('searchInput', this.input)
      },
      typeClick (val) {
        console.log(val)
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
  .header{
    background: #f6f6f6;
    margin-bottom: 16px;
    width: 100%;
    color: #555;
    height: 110px;
  }
  .container{
    width:1190px;
    /*border:1px solid red;*/
    margin: 0 auto;
    height: 100%;
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
  .search ol li a:hover{
    transition: color .3s ease 0s;
    color: #FF7300;
  }
</style>
