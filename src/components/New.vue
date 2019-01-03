<template>
	<div id="app">
		<pre v-html="prettyJSON"></pre>
		<form-wizard @on-complete="onComplete"
    
		ref="wizard" 
		:start-index.sync="activeTabIndex"
		shape="circle" color="#20a0ff" error-color="#ff4949" 
    title='Please provide access details' 
    subtitle='Organisation, Scope and sudo entitlements'>
     
      <tab-content title="Entity" icon="ti-user"
			 :before-change="() => validate('preStep')">
       <div class="row">
        <pre-step ref="preStep" @on-validate="onStepValidate"></pre-step>
        <results ></results>
				<!-- <el-button @click="forceClearError">Try to clear the error</el-button> -->
        </div>
      </tab-content>
      <tab-content title="Organisation" icon="ti-world"
			 :before-change="() => validate('firstStep')">
        <first-step ref="firstStep" @on-validate="onStepValidate"></first-step>
        <results v-html="prettyJSON"></results>
				<!-- <el-button @click="forceClearError">Try to clear the error</el-button> -->
      </tab-content>
      <tab-content title="Scope" icon="ti-target"
			:before-change="() => validate('secondStep')">
        <second-step ref="secondStep" @on-validate="onStepValidate"></second-step>
        <results v-html="prettyJSON"></results>
      </tab-content>
      <tab-content title="Entitlements (sudo)" icon="ti-shield"
			:before-change="() => validate('thirdStep')">
        <third-step ref="thirdStep" @on-validate="onStepValidate"></third-step>
        <results v-html="prettyJSON"></results>
      </tab-content>
      <tab-content title="Review" icon="ti-check">
				Your data
			 <pre v-html="prettyJSON"></pre>
      </tab-content>
  	</form-wizard>
	</div>
</template>

<script>
import PreStep from "./PreStep.vue";
import FirstStep from "./FirstStep.vue";
import SecondStep from "./SecondStep.vue";
import ThirdStep from "./ThirdStep.vue";
import prettyJSON from "../assets/js/prettyJson.js";
import Results from "./Results.vue";
export default {
  name: "app",
  components: {
    PreStep,
    FirstStep,
    SecondStep,
    ThirdStep,
    Results
  },
  data() {
    return {
      finalModel: {},
      activeTabIndex: 0
    };
  },
  computed: {
    prettyJSON() {
      return prettyJSON(this.finalModel);
    }
  },
  methods: {
    onComplete() {
      alert("Yay. Done!");
    },
    forceClearError() {
      this.$refs.wizard.tabs[this.activeTabIndex].validationError = null;
      //console.log('Force Clear - Refs: ' + JSON.stingify(this.$refs))
    },
    validate(ref) {
      // console.log('Validate - Refs: ' + JSON.stringify(this.$refs[ref]))
      return this.$refs[ref].validate();

    },
    onStepValidate(validated, model) {
      if (validated) {
        
        console.log('onStepValidate - model: ' + JSON.stringify(model))
        console.log('onStepValidate - data: ' + JSON.stringify(this.$data))
        this.finalModel = { ...this.finalModel, ...model };
        console.log('onStepValidate - data2: ' + JSON.stringify(this.$data))
        
      }
    }
  }
};
</script>

<style>

.el-form {
   
   margin: 0% 5% ;
}



pre {
  overflow: auto;
}
pre .string {
  color: #885800;
}
pre .number {
  color: blue;
}
pre .boolean {
  color: magenta;
}
pre .null {
  color: red;
}
pre .key {
  color: green;
}




</style>
