<template>
  <footer>
  {{ copyright }}
  </footer>
</template>

<script>

export default {
  data() {
    return {
        copyright: 'Cloud Access management - developed by Hosting Solutions'
    }
  }
}
</script>

<style scoped>

footer{
    background: #222;
    padding: 10px;
    color: lightgreen;
    text-align: center;
    font-size: small;
}
</style>
