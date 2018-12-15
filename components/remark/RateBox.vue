<template>
  <div>
    <div class="desc"><div style="display: inline-block;line-height: 30px;">描述相符</div>&nbsp;&nbsp;<Rate v-model="rateBox.rate1" @on-change="onRate1"></Rate></div>
    <div class="desc"><div style="display: inline-block;line-height: 30px;">卖家服务</div>&nbsp;&nbsp;<Rate v-model="rateBox.rate2" @on-change="onRate2"></Rate></div>
    <div class="desc"><div style="display: inline-block;line-height: 30px;">物流服务</div>&nbsp;&nbsp;<Rate v-model="rateBox.rate3" @on-change="onRate3"></Rate></div>
  </div>
</template>

<script>
   import 'iview/dist/styles/iview.css'

  export default {
    props: [ 'rateBox'],
    data () {
      return {

      }
    },
    methods: {
      onRate1 () {
        this.$emit('onRate1', this.rateBox.rate1)
      },
      onRate2 () {
        this.$emit('onRate2', this.rateBox.rate2)
      },
      onRate3 () {
        this.$emit('onRate3', this.rateBox.rate3)
      }
    }
  }
</script>

<style>
</style>
