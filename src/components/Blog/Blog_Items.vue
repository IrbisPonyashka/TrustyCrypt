<template>
    <div class="main__blog-box pages__style-box">
      <div class="main__blog-items pages__style-items">
        <BlogItem
        :articles="filterArticles"
        />
      </div>
    </div>
          <ul class="main__product-slide pages__style-slide" 
            @click="getSliding" 
            v-show="filterArticles.length >= 0"
            v-if="this.device < 540">
                <img src="@/assets/images/SVG/Icons/topArrow.svg" alt="" class="main__product-arrow pages__style-arrow prev">
                <li v-for="n in this.offsetM()" :key="n">
                    <a :class="n.class">{{ n.offset }}</a>
                </li>
                <img src="@/assets/images/SVG/Icons/bottomArrow.svg" alt="" class="main__product-arrow pages__style-arrow next">
          </ul>
          <ul class="main__product-slide pages__style-slide" 
            @click="getSliding" 
            v-show="filterArticles.length >= 0"
            v-if="this.device < 996 && this.device > 540">
                <img src="@/assets/images/SVG/Icons/topArrow.svg" alt="" class="main__product-arrow pages__style-arrow prev">
                <li v-for="n in this.offsetN()" :key="n">
                    <a :class="n.class">{{ n.offset }}</a>
                </li>
                <img src="@/assets/images/SVG/Icons/bottomArrow.svg" alt="" class="main__product-arrow pages__style-arrow next">
          </ul>
          <ul 
            @click="getSliding" 
            v-show="filterArticles.length >= 0" 
            class="main__product-slide pages__style-slide"  
            v-if="this.device > 996">
                <img src="@/assets/images/SVG/Icons/topArrow.svg" alt="" class="main__product-arrow pages__style-arrow prev">
                <li v-for="n in this.offsetD()" :key="n">
                    <a :class="n.class">{{ n.offset }}</a>
                </li>
                <img src="@/assets/images/SVG/Icons/bottomArrow.svg" alt="" class="main__product-arrow pages__style-arrow next">
          </ul>
</template>

<script>


import BlogItem from '@/components/Blog/Blog_Item.vue'
import {articles} from '@/store/db.js'


import {getHeight, getNumsD, getNumsN, getNumsM} from '@/store/storage.js'

export default {
  components:{
    BlogItem
  },
  data(){
    return{
      offsetD:getNumsD,
      offsetN:getNumsN,
      offsetM:getNumsM,
      articles:[...articles],
      device: window.innerWidth,
    }
  },
  computed:{
    filterArticles(){
      // console.log(this.$store.getters.getType)
      return this.$store.getters.getType != 'Все статьи' ? this.articles.filter(article => article.category.includes(this.$store.getters.getType)) : this.articles
    }
  }
}
</script>

<style>

</style>