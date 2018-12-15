<template>
  <div>
    <div class="question-title">关于商品</div>
    <div class="tm-question-wrap">
      <div style="font-size: 12px;color: #BBB;margin-bottom: 9px;">质量做工</div>
      <RadioGroup v-model="radioValue1" @on-change="onRadio1()">
        <Radio v-for="(item, index) in this.radioBox1" :key="index" :label="item.label">{{item.value}}</Radio>
      </RadioGroup>
    </div>
    <div class="tm-question-wrap">
      <div style="font-size: 12px;color: #BBB;margin-bottom: 9px;">质量做工</div>
      <RadioGroup v-model="radioValue2"  @on-change="onRadio2()">
        <Radio v-for="(item, index) in this.radioBox2" :key="index" :label="item.label">{{item.value}}</Radio>
      </RadioGroup>
    </div>
  </div>
</template>

<script>
   import 'iview/dist/styles/iview.css'

  export default {
    data () {
      return {
        radioValue1: '',
        radioValue2: '',
        radioBox1: [
          {value: '不好', label: '不好'},
          {value: '一般', label: '一般'},
          {value: '好', label: '好'},
        ],
        radioBox2: [
          {value: '偏小', label: '偏小'},
          {value: '适合', label: '适合'},
          {value: '偏大', label: '偏大'}
        ]
      }
    },
    methods: {
      onRadio1 () {
        this.$emit('onRadio1', this.radioValue1)
      },
      onRadio2 () {
        this.$emit('onRadio2', this.radioValue2)
      }
    }
  }
</script>

<style scoped>
  .question-title{
    font-size: 14px;
    color: rgb(102, 102, 102);
    padding-bottom: 9px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 9px;
    border-bottom: 1px solid rgb(231, 231, 231);
  }
  .tm-question-wrap {
    float: left;
    margin-left: 40px;
    margin-bottom: 10px;
  }
</style>
