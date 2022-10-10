<template>
  <div class="wrapper">
    <img src="../src/assets/images/bg.png" class="main-background" :id="this.img" alt="">
    <Header/>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import { getBase64Image} from '@/store/storage.js'



setTimeout(() => {
  if(document.getElementById(`main__img`)){
    localStorage.setItem('imageIdCached', JSON.stringify(getBase64Image(document.getElementById('main__img'))));
  }
}, "1000")

export default {
  components : {
    Header
  },
  data(){
    return{
      img:'main__img'
    }
  },
  watch:{
    getImg(){
    }
  },
  created(){
    var dataImage = JSON.parse(localStorage.getItem('imageIdCached'));
    this.img = "data:image/png;base64," + dataImage;

  }
}
</script>

<style>
  .wrapper{
    position: relative;
    overflow: hidden;
  }
</style>