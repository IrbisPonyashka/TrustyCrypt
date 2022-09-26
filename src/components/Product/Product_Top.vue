<template>
          <h2 class="main__poruct-top-title title">
              Наши продукты
          </h2>
          <p class="main__product-top-text inscr pages__style-top-text">
            Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.
          </p>
          <div class="main__product-sliderlist pages__style-sliderlist">
            <ul class="main__product-top-categories pages__style-top-categories">
              <li v-for="el in list" :key="el" @click="getChoose(el.name)">
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
          {name:'Все продукты',class:'main__product-top-category inscr choosed pages__style-top-category'},
          {name:'1 категория',class:'main__product-top-category inscr pages__style-top-category'},
          {name:'2 категория',class:'main__product-top-category inscr pages__style-top-category'},
          {name:'3 категория',class:'main__product-top-category inscr pages__style-top-category'},
          ]
          }
    },
    methods:{
      getChoose(name){
        for(let i =0;i<this.list.length;i++){
          if(this.list[i].name === name){
            this.list[i].class = 'main__product-top-category inscr choosed pages__style-top-category'
            this.status = this.list[i].name 
            this.$store.commit('getChooseCategory',this.list[i].name)
          }else{
            this.list[i].class = 'main__product-top-category inscr pages__style-top-category'
          }
        }
      }
    }
}
</script>

<style>

</style>