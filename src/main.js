import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import FormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import locale from 'element-ui/lib/locale/lang/en'


Vue.use(Element, { locale })
Vue.use(FormWizard);
Vue.config.productionTip = false;

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);


// import VueFormWizard from 'vue-form-wizard'
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// Vue.use(VueFormWizard)

// import VueFormGenerator from "vue-form-generator"
// import "vue-form-generator/dist/vfg.css";
import "./assets/css/themify-icons.css";
// Vue.use(VueFormGenerator)

import Routes from './routes.js';

const store = {} 

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  data: {
    sharedstore: store
  }
}).$mount('#app')
