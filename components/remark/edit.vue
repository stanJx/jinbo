<template>
  <div class="quill-editor-modify">
    <quill-editor :options="editorOption" v-model="content" @change="onEditorChange($event)"></quill-editor>
    <div>
      <span class="save" v-show="autoSave">{{save}}</span>
      <span class="count">已输入{{contentLen}}字</span>
    </div>
  </div>
</template>

<script>
  import _trim from 'lodash/trim'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import 'iview/dist/styles/iview.css'
  export default {
    props:{
      placeholder: {
        require: true,
        type: String
      },
      autoSave: {
        type: Boolean
      },
      word: {
        require: true,
        type: String
      }
    },
    data() {
      return {
        content: '',
        contentLen: 0,
        save: '保存中...',
        editorOption: {
          placeholder: this.placeholder,
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{'header': 1}, {'header': 2}],
              [{'color': []}, {'background': []}],
              [{'align': []}],
              ['clean']
            ]
          }
        }
      }
    },
    methods: {
      onEditorChange({ text }) {
        let str = text.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, "")
        this.contentLen = _trim(str).length
        this.$emit('changeContent', str)
      },
      getEdit() {
        return {
          content: this.content,
          len: this.contentLen
        }
      }
    }
  }
</script>

<style>
  .quill-editor-modify .ql-container{height: 125px;}
  .quill-editor-modify .ql-container.ql-snow{border:none;}
  .quill-editor-modify .ql-toolbar {border: none;background: #F1F3F7;}
  .quill-editor-modify .count {height: 18px;line-height: 18px;float: right;color: #99a2aa;}
  .quill-editor-modify .save {padding-left: 10px;height: 18px;line-height: 18px;color: #99a2aa;}
</style>
