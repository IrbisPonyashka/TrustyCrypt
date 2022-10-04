<template>
  <div class="main__product-item pages__style-item" 
    v-for="product in SortProducts" :key="product.id">
      <img src="../../assets/images/Product/laptop-1.png" alt="" class="main__product-img">
      <!-- <p style="color:white;">{{ product.id }}</p> -->
      <h2 class="main__product-title text">{{product.name}}</h2>
      <p class="main__product-descr inscr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <a href="#!" class="main__product-about inscr">Подробнее</a>
  </div>
</template>

<script>


export default {
  props:{
    SortProducts:Array
  }

}
</script>

<style>

</style>