<template>
  <div class="main__blog-item pages__style-item" 
    v-for="article in articles" :key="article.id">
        <div class="main__blog-images">
            <img :src="require('../../assets/images/Blog/blog__item'+article.img)" alt="" class="main__blog-img">
            <div class="main__blog-images-category">
                <img :src="require('../../assets/images/SVG/Icons/'+article.category+'.svg')" alt="" class="main__blog-icon">
                <p class="main__blog-images-text micro-text">
                    {{article.category}}
                </p>
            </div>
            <div class="main__blog-images-eyes">
                <img src="../../assets/images/SVG/Icons/eye.svg" alt="" class="main__blog-icon">
                <p class="main__blog-images-text micro-text">
                    24K
                </p>
            </div>
            <div class="main__blog-images-data">
                <img src="../../assets/images/SVG/Icons/note.svg" alt="" class="main__blog-icon">
                <p class="main__blog-images-text micro-text">
                    05.07.2022
                </p>
            </div>
        </div>
      <h2 class="main__blog-title text">{{article.text}}</h2>
      <!-- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio sed porro. -->
      <p class="main__blog-descr inscr">Если клиент очень умный, он сможет добиться желаемого результата. Разницы не знают, но дальше.</p>
  </div>
</template>

<script>

export default {
    props:{
        articles:Array
    }

}
</script>

<style>

</style>