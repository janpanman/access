<template>
<div class="col-sm-6">
<el-form :model="model" :rules="rules" ref="form">
  <el-form-item label="Sudo lines" prop="sudotext">
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 50}"
      placeholder="# Examples in sudo syntax
%my-ad-groupname ALL = NOPASSWD: /usr/bin/echo 'Hello world'
%my-ad-groupname ALL = NOPASSWD: /usr/bin/su - my-l3-user
my-l3-user ALL = NOPASSWD: /bin/apachectl start"
      v-model="model.sudotext" :change="textblock2list">
    </el-input>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  data(){
		return {
      model: {
        sudotext: '',
        sudo: []
      },
      rules: {
        sudotext: [{
          required: false,
          message: 'Sudo lines',
          trigger: 'change'
        }]
      }
	}},
  methods: {
    textblock2list() {
      return this.model.sudo = this.model.sudotext.split("\n")
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          this.$emit('on-validate', valid, this.model)
          resolve(valid);
        });
      })

    }
  }

}
</script>

<style>
.el-input__inner {
   width: 100%;
}
.el-button {
   margin-top: 5px;
}

.wizard-tab-content {
  width: 100%;
}
</style>
