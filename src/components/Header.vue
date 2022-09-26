<template>
  <header class="header" >
    <div class="container">
        <div class="header__nav" :class="{' burger__active' : burger}">
            <div class="header__nav-content">
                <div class="header__nav-logo" :class="{' burger__active' : burger}">
                <img src="../assets/images/LOGO/logo.svg" alt=""  class="header__nav-logotip" >
                
                <h2 class="header__nav-title">
                    Trustcrypt
                </h2>
                </div>
                <div class="header__nav-right">
                    <ul class="header__nav-pages" :class="{' burger__active' : burger}">
                    <li 
                        v-for="li in list" :key="li.link" >
                        <router-link 
                            :to="li.url" 
                            @click="getClass(li.link,li.url)" 
                            :class="li.class">
                                {{ li.name }}
                        </router-link>
                    </li>
                    </ul>
                    <div class="header__nav-list-lang">
                        <img :src="require('../assets/images/SVG/SVG__country/'+activeFlag)" alt="">
                        <p class="header__nav-text inscr">
                            {{activeLang}}
                        </p>
                        <img :src="require(`../assets/images/SVG/Icons/${this.btn}.svg`)" alt="" class="header__nav-drop" 
                            @click="active = !active, 
                            this.btn === 'arrow' ? this.btn = 'close' : this.btn = 'arrow'">
                        <ul class="header__nav-drop-list"
                            v-show="active">
                            <li 
                                v-for="el in dropList" :key="el.id" 
                                @click="chooseLang(el.src,el.country)">
                                <img :src="require('../assets/images/SVG/SVG__country/'+el.src)" alt="" class="header__nav-flag">
                                <p class="header__nav-country">{{el.country}}</p>
                            </li>
                        </ul> 
                    </div>
                        <img :src="require(`../assets/images/SVG/SVG__burger/${this.burgerBtn}.svg`)" alt="" 
                            class="header__nav-btn" 
                            :class="{' burger__active' : burger}" 
                            @click="burger = !burger
                            this.burgerBtn === 'burger' ? this.burgerBtn = 'close' : this.burgerBtn = 'burger';
                            ">
                    <ul class="header__nav-icons" :class="{' burger__active' : burger}">
                    <li v-for="icon in iconList" :key="icon">
                        <img :src="require('../assets/images/SVG/SVG__social/Vector'+icon)" alt="" class="header__nav-icon">
                    </li>
                    </ul>
                </div>
            </div>
            <transition name="burger">
                <div class="header__nav-burger" :class="{' burger__active' : burger}" v-if="burger">
                    <ul class="header__nav-burger-pages" v-if="burger">
                        <li 
                            v-for="li in list" :key="li.link" >
                            <router-link 
                                :to="li.url" 
                                @click="getClass(li.link,li.url)" 
                                :class="li.class">
                                    {{ li.name }}
                            </router-link>
                        </li>
                    </ul>
                    <ul class="header__nav-burger-icons" v-if="burger">
                        <li v-for="icon in iconList" :key="icon">
                            <img :src="require('../assets/images/SVG/SVG__social/Vector'+icon)" alt="" class="header__nav-icon">
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
  </header>

</template>

<script>
export default {
    data(){
        return {
            btn:'arrow',
            burgerBtn:'burger',
            loc:'http://localhost:8080/#',
            list: [
                {url:'/',link:'Home',name:'Главня',class:'header__nav-link inscr'},
                {url:'/Products',link:'Products',name:'Продукты',class:'header__nav-link inscr'},
                {url:'/Blog',link:'Blog',name:'Блог',class:'header__nav-link inscr'},
                {url:'/Contacts',link:'Contacts',name:'Контакты',class:'header__nav-link inscr'}
                    ],
            dropList:[
                {src:'rus.svg',country:'RU',id:1},
                {src:'en.svg',country:'EN',id:2},
                {src:'ae.svg',country:'AE',id:3}
            ],
            iconList:[
                '1.svg','2.svg','3.svg','4.svg'
            ],
            burger:false,
            clas:false,
            active:false,
            activeFlag:'rus.svg',
            activeLang:'RU'
        }
    },
    methods:{
        close(el){
            if(el.src != 'rus.svg' || el.src != 'en.svg' || el.src !='ae.svg'){
                this.active = false;
            }
            // el.src != 'rus.svg' || 'en.svg' || 'ae.svg' ? this.active = false : this.active = active 
        },
        chooseLang(src,country){
            this.activeFlag = src
            this.activeLang = country
        },
        getClass(link){
                for(let i =0;i<this.list.length;i++){
                    if(link == this.list[i].link){
                        this.list[i].class = 'header__nav-link inscr active'
                    }else{
                        this.list[i].class = 'header__nav-link inscr'
                    }
                }
        }
    },
    mounted() {
            for(let i =0;i<this.list.length;i++){
                location.href == this.loc+this.list[i].url ? this.list[i].class = 'header__nav-link inscr active' : 'header__nav-link inscr'; 
            }
  },
}
</script>

<style>

</style>



            <!-- <h2>
                <span @click="active == false ? active = false : active = false " :class="{ 'color':!active }">RU</span>
                        |
                <span @click="active == true ? active = true : active = true " :class="{ 'color':active }">EN</span>
            </h2> -->