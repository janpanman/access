<template>
<div class="col-sm-6">
  <el-form :model="model" :rules="rules" ref="form">
    <p>User or Group entity: 
    <el-form-item prop="entity">
      <el-input v-model="model.entity" placeholder="eg. its-cloud-dev"></el-input>
    </el-form-item>
    </p>
    <p>Domain(s): 
    <el-select v-model="model.domains" 
              style="width: 300px"
              multiple placeholder="Select one or more domains">
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
    </p>
    <p>Type:
    <el-radio v-model="model.type" label="user">User</el-radio>
    <el-radio v-model="model.type" label="group">Group</el-radio>
    </p>
  </el-form>
</div>
</template>

<script>
export default {
  data(){
		return {
      options: [
        'd2-tdbfg', 'p-tdbfg', 'tdbfg'
      ],
      
      model: {
        entity: '',
        domains: [],
        type: 'user', 
        },
      rules: {
        entity: [{
          required: true,
          message: 'User or group',
          trigger: 'blur'
        }]
      }
	}},
  methods: {
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


</style>
