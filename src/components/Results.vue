<template>
<div class="col-sm-6">
  results...  
  <pre v-html="prettyJSON"></pre>  
</div>
</template>

<script>
import prettyJSON from "../assets/js/prettyJson.js";
export default {
  data(){
    return {
    }
  },
  computed: {
    prettyJSON() {
      return prettyJSON(this.finalModel);
    }
  },
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
