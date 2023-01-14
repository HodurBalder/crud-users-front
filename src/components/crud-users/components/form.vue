<template>
  <el-dialog class="form" title="Data User"  :visible="isFormVisible">
  <span slot="title" class="el-dialog__title">Data User</span>
  <button type="button" @click="callForm()" aria-label="Close" class="el-dialog__headerbtn">
    <i class="el-dialog__close el-icon el-icon-close" />
  </button>
    <el-form :model="form" label-position="left" :rules="rules" ref="ruleForm" >
      <el-form-item v-for="header in publicHeaders" :key="header._id" :label="header" :label-width="formLabelWidth" :prop="header">
        <el-input v-model="form[header]"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="callForm()">Cancel</el-button>
      <el-button @click="submitForm" type="primary">Confirm</el-button>
    </span>
  </el-dialog>
</template>
<script>

  export default {
    name: 'FormUser',
    props: {
      isFormVisible: { type: Boolean, default: false },
      publicHeaders: { type: Array, required: true },
      user: { type: Object, required: false, default: () => ({}) },
    },
    data() {
      return {
        form: Object.fromEntries(this.publicHeaders.map(header => {
                    return [ header, '']
                })),

        rules: Object.fromEntries(this.publicHeaders.map(header => {
          return [ header, [{ required: true, message: `Please input ${header}`, trigger: 'blur', type: header === 'email' ? 'email' : 'string' }]]
        })),

        formLabelWidth: '80px'
      };
    },
    methods: {
      callForm(){
        this.$emit('call-form')
      },
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$emit('save-data', this.form )
          } else {
            return false;
          }
        });
      },
    },
    beforeMount(){
      if(Object.entries(this.user).length){
        this.form = this.user
      }
      
    }
  }
</script>

<style>
</style>