<template>
  <div>
    <div class="tab-pane">
      <div class="vertical-img">
        <a href="">
          <img-zoom :src="smallPic" alt="" width="380" height="380" :bigsrc="bigPic" :configs="configs"></img-zoom>
        </a>
      </div>
    </div>

    <div class="tab-content">
      <div class="moveLeft"  @click="moveLeft">
        <i style="width: 10px;height: 20px;" class="el-icon-arrow-left"></i>
      </div>
      <div class="tab-container">
        <ul class="nav-tabs" ref="imgs" :style="{width: carousel.width}">
          <li v-for="(item, index) in this.picBox" :key="index" @click="choosePic(index)"><img :src="item" style="width:100%;height: 100%" alt=""></li>
        </ul>
      </div>

      <div class="moveRight" @click="moveRight">
        <i style="width: 10px;height: 20px;" class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import imgZoom from './zoom.vue'

  export default {
    components: {imgZoom},
    props: ['smallPic', 'bigPic', 'carousel', 'picBox', 'bigPicBox'],
    data () {
      return {
        configs: {
          width: 380,
          height: 380,
          maskWidth: 100,
          maskHeight: 100,
          maskColor: 'red',
          maskOpacity: 0.2
        },
        length: 0
      }
    },
    methods: {
      moveLeft () {
        if (Math.abs(this.length) !== 0) {
          this.length = this.length + 350
          this.$refs.imgs.style.transform = 'translateX(' + this.length + 'px)'
          this.$refs.imgs.style.transition = 'all .5s ease 0s'
        }
      },
      moveRight () {
        if (Math.abs(this.length) < (this.carousel.amount - 1) * 350) {
          this.length = this.length - 350
          this.$refs.imgs.style.transform = 'translateX(' + this.length + 'px)'
          this.$refs.imgs.style.transition = 'all .5s ease 0s'
        }
      },
      choosePic (index) {
        console.log(index)
        this.$emit('returnPic', index)
      }
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tab-pane{
    position: relative;
    width: 380px;
    height: 380px;
    overflow: hidden;
  }
  .vertical-img{
    display: table;
    text-align: center;
    overflow: hidden;
    font-size: 0;
  }
  .vertical-img a{
    color: #222;
    text-decoration: none;
  }
  .vertical-img a img{
    width: 380px;
    height: 380px;
    vertical-align:middle;
  }
  .tab-content{
    width: 380px;
    padding: 20px 0;
  }
  .tab-container{
    float: left;
    width: 350px;
    height: 62px;
    overflow: hidden;
    text-align: left;
  }
  .tab-content ul{
    height: 62px;
  }
  .tab-content ul li{
    float: left;
    width: 62px;
    height: 62px;
    margin-right: 8px;
    display: list-item;
  }
  .tab-content .moveLeft{
    float: left;
    display: inline;
    width: 10px;
    height: 27px;
    margin-right: 4.5px;
    padding-top: 20px;
    text-decoration: none;
    /*overflow: hidden;*/
  }
  .tab-content .moveRight{
    float: left;
    display: inline;
    width: 10px;
    height: 27px;
    margin-left: 4.5px;
    padding-top: 20px;
    text-decoration: none;
  }
  .tab-content i{position: relative;
    font-style: italic;
  }
  .tab-content .moveLeft span{
    border-width: 10px 10px 10px 0;
    position: absolute;
    top: 0;
    left: 2px;
  }
  .tab-content .moveRight span{
    border-width: 10px 10px 10px 0;
    position: absolute;
    top: 0;
    left: -2px;
  }
</style>
