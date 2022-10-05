<template>
    <div class="main__product-box pages__style-box">
        <div class="main__product-items pages__style-items">
            <ProductItem
            :SortProducts="filterProducts"
            />
        </div>
    </div>
          <ul class="main__product-slide pages__style-slide" 
            @click="getSliding"
            v-show="filterProducts.length >= 0"
            v-if="this.device < 540">
                <img src="@/assets/images/SVG/Icons/topArrow.svg" alt="" class="main__product-arrow pages__style-arrow prev">
                <li v-for="n in this.offsetM()" :key="n">
                    <a :class="n.class">{{ n.offset }}</a>
                </li>
                <img src="@/assets/images/SVG/Icons/bottomArrow.svg" alt="" class="main__product-arrow pages__style-arrow next">
          </ul>
          <ul class="main__product-slide pages__style-slide" 
            @click="getSliding" 
            v-show="filterProducts.length >= 0"
            v-if="this.device < 996 && this.device > 540">
                <img src="@/assets/images/SVG/Icons/topArrow.svg" alt="" class="main__product-arrow pages__style-arrow prev">
                <li v-for="n in this.offsetN()" :key="n">
                    <a :class="n.class">{{ n.offset }}</a>
                </li>
                <img src="@/assets/images/SVG/Icons/bottomArrow.svg" alt="" class="main__product-arrow pages__style-arrow next">
          </ul>
          <ul 
            @click="getSliding" 
            v-show="filterProducts.length >= 0" 
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

import ProductItem from '@/components/Product/Product_Item.vue'
import {products} from '@/store/db.js'

import {getHeight, getNumsD, getNumsN, getNumsM} from '@/store/storage.js'

export default {
    components:{
        ProductItem
    },
    data(){
        return {
            offsetD:getNumsD,
            offsetN:getNumsN,
            offsetM:getNumsM,
            status:false,
            interval:4,
            device: window.innerWidth,
            SortProducts:[...products],
            dots:[]
      }
    },
    methods:{
        getSliding(){
            const items = document.querySelector('.pages__style-items');
            const item = document.querySelector('.pages__style-item');
            const nums = document.querySelectorAll('.pages__style-nums');
                if(event.target.nodeName == 'P' ||event.target.nodeName == 'A'){
                let offset = 0;
                    if(window.innerWidth > 996){
                        offset += item.clientHeight*2+68;
                    }else if(window.innerWidth < 996 && window.innerWidth > 540){
                        offset += (item.clientHeight+20)*2;
                    }else if(window.innerWidth <= 540){
                        offset += (item.clientHeight+20)*3;
                    }
                nums.forEach(el =>  el.classList.remove('active'));
                event.target.classList.add('active');
                items.style.transform = `translateY(${getHeight(event.target.innerHTML,offset)}px)`
                }else if(event.target.nodeName == 'IMG'){
                        if(event.target.classList[2] == 'next'){
                            this.interval = nums[nums.length-1].classList[2] == 'visible' ? this.interval : this.interval += 4;
                            for(let i =0;i<nums.length;i++){
                                if(nums[i].innerHTML <= this.interval && nums[i].innerHTML > this.interval-4){
                                    nums[i].classList.add('visible');
                                }else{
                                    nums[i].classList.remove('visible');
                                }
                            }
                        }else if(event.target.classList[2] == 'prev'){
                            this.interval = this.interval ==4 ? this.interval=4 : this.interval -= 4 ;
                            for(let i =0;i<nums.length;i++){
                                if(nums[i].innerHTML <= this.interval && nums[i].innerHTML > this.interval-4){
                                    nums[i].classList.add('visible');
                                }else{
                                    nums[i].classList.remove('visible');
                                }
                            }
                        }
                    }
                
        },
        countItems(length){
            if(length > 6){
                dots.push({
                    id:1
                })
            }
        }
    },
    computed:{
        filterProducts(){
            if(this.$store.getters.getChooseCategory == '1'){
                return this.SortProducts.filter(product => product.category == '1' );
            }else if(this.$store.getters.getChooseCategory == '2'){
                return this.SortProducts.filter(product => product.category == '2' );
            }else if(this.$store.getters.getChooseCategory == '3'){
                return this.SortProducts.filter(product => product.category == '3' );
            }else{
                return this.SortProducts.sort((a, b) => a.id > b.id ? 1 : -1)
            }
        }
    }
}
</script>

<style>

</style>