<template>
  <div class="number">
    <div class="numberChange">
      <div @click="reduceNumber" ref="input">-</div>
      <input v-model="number">
      <div @click="addNumber">+</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['number'],
    methods: {
      reduceNumber () {
//        this.number === 1 ? this.$refs.input.style.cursor = 'not-allowed' : this.$emit('changeNumber', 'remove')
        if (this.number === 1) {
          this.$refs.input.style.cursor = 'not-allowed'
        } else {
          this.$emit('changeNumber', 'remove')
          this.$refs.input.style.cursor = 'allowed'
        }
      },
      addNumber () {
        this.$emit('changeNumber', 'add')
      }
    }
  }
</script>

<style scoped>
  .number .numberChange{
    line-height: 32px;
    color: #3C3C3C;
    padding-left: 10px;
  }
  .number .numberChange input{
    float: left;
    margin: 0;
    padding: 0;
    width: 54px;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #666;
    border: 1px solid #CCC;
    border-left: none;
    border-right: none;
    outline: 0;
    background: #FFF;
  }
  .number .numberChange div:first-child, .number .numberChange div:nth-child(3){
    font-weight: bolder;
    float: left;
    font-size: 18px;
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    line-height: 32px;
    padding: 0;
    vertical-align: top;
    text-align: center;
    overflow: hidden;
  }
  .number .numberChange div:first-child{
    /*cursor: not-allowed;*/
    background-color: #ededed;
    color: #ccc;
  }
  .number .numberChange div:nth-child(3){
    color: #3C3C3C;
    background-color: #ededed;
  }
</style>
