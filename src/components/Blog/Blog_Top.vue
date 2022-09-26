<template>
          <h2 class="main__blog-top-title title">
              Наши продукты
          </h2>
          <p class="main__blog-top-text pages__style-top-text inscr">
            Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.
          </p>
          <div class="main__blog-sliderlist pages__style-sliderlist">
            <ul class="main__blog-top-categories pages__style-top-categories">
              <li v-for="el in list" :key="el" @click="getType(el.name)">
                <a  :class="el.class"> {{el.name}} </a>
              </li>
            </ul>
          </div>
</template>

<script>
export default {
    data(){
        return{
      status:'',
      list:
        [
          {name:'Все статьи',class:'main__blog-top-category inscr choosed pages__style-top-category'},
          {name:'Фишинг',class:'main__blog-top-category inscr pages__style-top-category'},
          {name:'Советы',class:'main__blog-top-category inscr pages__style-top-category'},
          {name:'Способы',class:'main__blog-top-category inscr pages__style-top-category'},
          {name:'Гейминг',class:'main__blog-top-category inscr pages__style-top-category'},
          {name:'Безопасность',class:'main__blog-top-category inscr pages__style-top-category'},
          {name:'Разработка',class:'main__blog-top-category inscr pages__style-top-category'},
          ]
          }
    },
    methods:{
      getType(name){
        for(let i =0;i<this.list.length;i++){
          if(this.list[i].name === name){
            this.list[i].class = 'main__blog-top-category inscr choosed pages__style-top-category'
            this.status = this.list[i].name 
            this.$store.commit('getType',this.list[i].name)
          }else{
            this.list[i].class = 'main__blog-top-category inscr pages__style-top-category'
          }
        }
      }
    }
}
</script>

<style>

</style>