<template>
  <main class="main">
    <div class="container-slider">
      <div class="main__product pages__style">
        <div class="main__product-top pages__style-top">
        <Product_Top/>
        </div>
        <div class="main__product-sliderbox pages__style-sliderbox">
        <Product_Items/>
        </div>
        <div class="main__product-bottom pages__style-bottom">
          <p class="main__product-text inscr">
            © 2022 LLC Trustcrypt. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </main>
  
</template>

<script>

// import products from '@/store/products.js'
import Product_Top from '../components/Product/Product_Top.vue'
import Product_Items from '../components/Product/Product_Items.vue'

export default {
  components:{
    Product_Top,
    Product_Items
  },
  data(){
    return{
    }
  },
  methods:{
    }
}
</script>

<style>

</style>


