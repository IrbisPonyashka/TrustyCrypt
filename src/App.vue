<template>
  <div class="wrapper">
    <img src="../src/assets/images/bg.png" class="main-background" alt="">
    <Header/>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  components : {
    Header
  }
}
</script>

<style>
  .wrapper{
    position: relative;
    overflow: hidden;
  }
</style>