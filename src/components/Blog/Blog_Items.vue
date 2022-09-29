<template>
    <div class="main__blog-box pages__style-box">
      <div class="main__blog-items pages__style-items">
        <BlogItem
        :articles="filterArticles"
        />
      </div>
    </div>
          <ul class="main__blog-slide pages__style-slide">
            <li class="main__blog-nums pages__style-nums active">1</li>
            <li class="main__blog-nums pages__style-nums">2</li>
            <li class="main__blog-nums pages__style-nums">3</li>
            <li class="main__blog-nums pages__style-nums">4</li>
          </ul>
</template>

<script>


import BlogItem from '@/components/Blog/Blog_Item.vue'
import {articles} from '@/store/db.js'


export default {
  components:{
    BlogItem
  },
  data(){
    return{
      articles:[...articles]
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