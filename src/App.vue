<template>
<div>
<app-header></app-header>
<router-view></router-view>
<app-footer></app-footer>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import New from './components/New.vue';


export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-new': New
  },
}
</script>

<style>

</style>
