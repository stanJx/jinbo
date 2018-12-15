<template>
  <div style="">
    <el-upload
      action=""
      list-type="picture-card"
      :file-list="imgList"
      :on-success="uploadSuccess"
      name="file"
      ref="upload"
      :on-remove="handleRemove"
      :data="uploadData"
      :on-preview="handlePictureCardPreview">
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-dialog :append-to-body="true" :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          end_time: '',
          start_time: '',
          award_id: '',
          pic: ''
        },
        uploadData: {
          type: 12,
          data: JSON.stringify({flag: 2}),
          md5: '123'
        },
        dialogImageUrl: '',
        dialogVisible: false,
        imgList: [],
        fileList: []
      }
    },
    methods: {
      handlePictureCardPreview (file) {
        console.log(file.url, '******')
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      uploadSuccess (response, file, fileList) {
        this.imgList = fileList
        console.log(this.imgList)
        this.$emit('uploadSuccess', this.imgList)
        console.log(file.name, '*****')
//        this.imgList[this.imgList.length - 1].pic_url = response.data.pic_url
      },
      handleRemove (file, fileList) {
        this.imgList = fileList
        console.log(this.imgList)
        this.$emit('handleRemove', this.imgList)
      }
    }
  }
</script>

<style>
</style>
