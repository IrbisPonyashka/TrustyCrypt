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
            v-if="this.device < 996"
            >
            <li v-show="filterProducts.length > 0" ><p class="main__product-nums pages__style-nums active">1</p></li>
            <li v-show="filterProducts.length > 4" ><p class="main__product-nums pages__style-nums">2</p></li>
            <li v-show="filterProducts.length > 8" ><p class="main__product-nums pages__style-nums">3</p></li>
            <li v-show="filterProducts.length > 12" ><p class="main__product-nums pages__style-nums">4</p></li>
            <li v-show="filterProducts.length > 16" ><p class="main__product-nums pages__style-nums">5</p></li>
            <li v-show="filterProducts.length > 20" ><p class="main__product-nums pages__style-nums">6</p></li>
            <li v-show="filterProducts.length > 24" ><p class="main__product-nums pages__style-nums">7</p></li>
            <li v-show="filterProducts.length > 28" ><p class="main__product-nums pages__style-nums">8</p></li>
            <li v-show="filterProducts.length > 32" ><p class="main__product-nums pages__style-nums">9</p></li>
            <li v-show="filterProducts.length > 36" ><p class="main__product-nums pages__style-nums">10</p></li>
          </ul>
          <ul @click="getSliding" v-show="filterProducts.length >= 0" class="main__product-slide pages__style-slide"  v-if="this.device > 996">
            <li v-show="filterProducts.length > 0" ><p class="main__product-nums pages__style-nums active">1</p></li>
            <li v-show="filterProducts.length > 6" ><p class="main__product-nums pages__style-nums">2</p></li>
            <li v-show="filterProducts.length > 12" ><p class="main__product-nums pages__style-nums">3</p></li>
            <li v-show="filterProducts.length > 24" ><p class="main__product-nums pages__style-nums">4</p></li>
            <li v-show="filterProducts.length > 30" ><p class="main__product-nums pages__style-nums">5</p></li>
            <li v-show="filterProducts.length >= 36" ><p class="main__product-nums pages__style-nums">6</p></li>
          </ul>
</template>

<script>

import ProductItem from '@/components/Product/Product_Item.vue'
import {products} from '@/store/db.js'


export default {
    components:{
        ProductItem
    },
    data(){
        return {
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
                nums.forEach(el => el.classList.remove('active'));
                event.target.classList.add('active');
                console.log(window.innerWidth);
            if(window.innerWidth > 996){
                const offset = item.clientHeight*2+64;
                if(event.target.innerHTML == '1'){
                    items.style.transform = 'translateY(0%)';
                }else if(event.target.innerHTML == '2'){
                    items.style.transform = `translateY(-${offset}px)`;
                }else if(event.target.innerHTML == '3'){
                    items.style.transform = `translateY(-${offset*2}px)`;
                }else if(event.target.innerHTML == '4'){
                    items.style.transform = `translateY(-${offset*3+5}px)`;
                }else if(event.target.innerHTML == '5'){
                    items.style.transform = `translateY(-${offset*4+10}px)`;
                }else if(event.target.innerHTML == '6'){
                    items.style.transform = `translateY(-${offset*5+15}px)`;
                }
                console.log(offset);
            }
            else if(window.innerHeight <= 996){
                const offset = item.clientHeight*2+40;
                if(event.target.innerHTML == '1'){
                    items.style.transform = 'translateY(0%)';
                }else if(event.target.innerHTML == '2'){
                    items.style.transform = `translateY(-${offset}px)`;
                }else if(event.target.innerHTML == '3'){
                    items.style.transform = `translateY(-${offset*2}px)`;
                }else if(event.target.innerHTML == '4'){
                    items.style.transform = `translateY(-${offset*3}px)`;
                }else if(event.target.innerHTML == '5'){
                    items.style.transform = `translateY(-${offset*4}px)`;
                }else if(event.target.innerHTML == '6'){
                    items.style.transform = `translateY(-${offset*5}px)`;
                }else if(event.target.innerHTML == '7'){
                    items.style.transform = `translateY(-${offset*6}px)`;
                }else if(event.target.innerHTML == '8'){
                    items.style.transform = `translateY(-${offset*7}px)`;
                }else if(event.target.innerHTML == '9'){
                    items.style.transform = `translateY(-${offset*8}px)`;
                }else if(event.target.innerHTML == '10'){
                    items.style.transform = `translateY(-${offset*9}px)`;
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