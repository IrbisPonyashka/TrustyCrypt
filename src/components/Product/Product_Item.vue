<template>
  <div class="main__product-item pages__style-item" 
    v-for="product in SortProducts" :key="product.id">
      <img src="../../assets/images/Product/laptop-3.png" alt="" class="main__product-img">
      <h2 class="main__product-title text">{{product.name}}</h2>
      <p class="main__product-descr inscr">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum...</p>
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