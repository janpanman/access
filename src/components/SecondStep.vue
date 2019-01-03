<template>
<div class="col-sm-6">
<el-form :model="model" :rules="rules" ref="form">
  <p>Select at least one scope tag and provide a value for that tag. Please add additional values for a tag as needed and/or add new tags. </p>
  The scope tags define <i>where</i> the given user/group will be configured.
  <p>The given scope tags will be matched with meta data available on the VM</p>

  <el-form-item label="Scope tags" prop="scope_tag_key">
    <el-select v-model="model.scope_tag_key">
            <el-option v-for="scope in scopeOptions"
                       :key="scope.value"
                       :label="scope.label"
                       :value="scope.value">
            </el-option>
          </el-select>
  </el-form-item>
  <el-form-item label="Scope tag value"  prop="scope_tag_value">
    <el-input v-model="model.scope_tag_value" placeholder="Add value"></el-input>
  </el-form-item>
<el-button v-on:click="addScopeKeyValue" type="submit">Add: tag + value</el-button>
</el-form>
</div>
</template>

<script>
import prettyJSON from "../assets/js/prettyJson.js";
export default {
  data(){
		return {
      model: {
        scope_tag_key: '',
        scope_tag_value: '',
        scope: {}
        // lob_list: [],
        // itnumber_list: [],
        // malcode_list: [],
        // environment_list: [],
        // tenant_list: [],
        // role_list: [],
        // hostname_list: [],
        // ipnumber_list: []
      },
      scopeOptions: [
          {value: '', label: '- select tags -'},
          {value: 'lob', label: 'LOB Name'},
          {value: 'itnumber', label: 'IT Number'},
          {value: 'mal_code', label: 'MAL Code'},
          {value: 'environment', label: 'Environment'},
          {value: 'tenant_name', label: 'Tenant name'},
          {value: 'roles', label: 'Roles'},
          {value: 'hostnames', label: 'Hostnames'},
          {value: 'ipnumbers', label: 'IP numbers'}
        ],
      rules: {
        // To do... Need rule for a scope tag + value pair presence.
        // Can only go to next page,.. if key/pair is present
        scope_tag_key: [{
          required: true,
          message: 'One scope tag with a value is required',
          trigger: 'change'
        }],
        scope_tag_value: [{
          required: true,
          message: 'One scope tag with a value is required',
          trigger: 'change'
        }]
      }
  }},
  methods: {
 
    addScopeKeyValue() {
      var scopetag_value = this.model.scope_tag_value
      if ( this.model.scope_tag_key in this.model.scope ) {
          this.model.scope[this.model.scope_tag_key].push(scopetag_value)
          console.log('2) Trying to add value:' + scopetag_value + ' to: ' + this.model.scope[this.model.scope_tag_key])
      } else {
          this.model.scope[this.model.scope_tag_key] = [scopetag_value]
          console.log('1) Trying to add value:' + scopetag_value + ' to new list: ' + this.model.scope[this.model.scope_tag_key])
      }
      return this.model.scope
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
</script >

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
