<template>
  <main class="main">
    <div class="container-slider">
      <div class="main__blog pages__style">
        <div class="main__blog-top pages__style-top">
        <BlogTop/>
        </div>
        <div class="main__blog-sliderbox pages__style-sliderbox">
        <BlogItems/>
        </div>
        <div class="main__blog-bottom pages__style-bottom">
          <p class="main__blog-text inscr">
            © 2022 LLC Trustcrypt. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </main>
  
</template>

<script>

// import products from '@/store/products.js'
import BlogTop from '../components/Blog/Blog_Top.vue'
import BlogItems from '../components/Blog/Blog_Items.vue'

export default {
  components:{
    BlogTop,
    BlogItems
  },
}
</script>

<style>

</style>