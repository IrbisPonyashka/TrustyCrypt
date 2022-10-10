<template>
  <main class="main"> 
    <div class="container">
        <div class="home__content">
          <HomeAdvenced/>
          <Generation/>
          <Instruments/>
          <Info/>
        </div>
    </div>
  </main>
</template>

<script>

import HomeAdvenced from "../components/Home/Advanced.vue"
import Generation from "../components/Home/v-generation.vue"
import Instruments from "../components/Home/Instruments.vue"
import Info from "../components/Home/Info.vue"

  

export default {
  components : {
    HomeAdvenced,
    Generation,
    Instruments,
    Info
  }
}
</script>


<style>

</style>