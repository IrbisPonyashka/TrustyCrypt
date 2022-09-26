<template>
  <div class="main__instruments">
    <div class="main__instruments-block">
        <h2 class="main__instruments-title title">
             Инструменты
        </h2>
        <p class="main__instruments-text text">
            Тестирование на проникновение позволяет ответить на вопрос, как кто-то со злым умыслом может вмешаться в вашу сеть.
        </p>
        <ul class="main__instruments-list">
            <li v-for="el in list" :key="el.img">
                <img :src="require('../../assets/images/Home/metasploit'+el.img)" alt="" class="main__instrument-list">
            </li>
        </ul>
    </div>
    <div class="main__instruments-block">
        <h2 class="main__instruments-title title">
             Наши продукты направлены на вашу безопасность. 
        </h2>
        <p class="main__instruments-text text">
            Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.
        </p>
        <div class="main__instruments-items">
            <div class="main__instruments-item" v-for="item in items" :key="item.id">
                <img :src="require('../../assets/images/SVG/SVG__card/'+item.img)" alt="" class="main__instruments-img">
                <p class="main__instruments-text text">{{item.text}}</p>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data () {
        return {
            list:[
                {img:'-logo.png'},
                {img:'-logo.png'},
                {img:'-logo.png'},
                {img:'-logo.png'},
            ],
            items:[
                {id:1,img:'Icon_01.svg',text:'Анонимность'},
                {id:2,img:'Icon_02.svg',text:'Проверка на наличие угроз'},
                {id:3,img:'Icon_03.svg',text:'Обнаружение и предотвращение аттак'}
            ]
        }
    }
}
</script>

<style>

</style>