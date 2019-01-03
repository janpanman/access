<template>
<div class="col-sm-6">
<el-form :model="model" :rules="rules" ref="form">
<p> Owner:  
  <el-form-item  prop="owner_acf2">
    <el-input v-model="model.owner_acf2" placeholder="Update owner"></el-input>
  </el-form-item>
</p>

Delegates:   
  <el-form-item prop="Add delegate"  >
    <el-input v-model="model.delegate_acf2" placeholder="Delegate ACF2's"></el-input>
    <el-button v-on:click="addDelegate" type="submit">Add</el-button>
  </el-form-item>
      <el-select v-model="model.delegate_list" 
              
              multiple placeholder="Configured delegates">
      <el-option
        v-for="item in model.delegate_list"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  
  <el-form-item prop="Add SME's" >
    <el-input v-model="model.sme_acf2" placeholder="SME ACF2's"></el-input>
    <el-button v-on:click="addSME" type="submit">Add</el-button>
  </el-form-item>
      <el-select v-model="model.sme_list" 
              
              multiple placeholder="Configured sme's">
      <el-option
        v-for="item in model.sme_list"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select> 
</el-form>
</div>
</template>

<script>
export default {
  data(){
		return {
      model: {
        requester_acf2: 'panmaj2',
        owner_acf2: '',
        delegate_acf2: '',
        delegate_list: [],
        sme_acf2: '',
        sme_list: []
      },
      rules: {
        owner_acf2: [{
          required: true,
          message: 'Owner ACF2',
          trigger: 'blur'
        }],
        delegate_acf2: [{
          required: false,
          message: 'Delegates',
          trigger: 'blur'
        }],
         sme_acf2: [{
          required: false,
          message: 'SME\'s ACF2',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Invalid email',
          trigger: 'change'
        }],
      }
	}},
  methods: {
    addSME() {
      return this.model.sme_list.push(this.model.sme_acf2)
    },
    addDelegate() {
      return this.model.delegate_list.push(this.model.delegate_acf2)
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


</style>
