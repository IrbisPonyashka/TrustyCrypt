<template>
    <div class="main__product-box pages__style-box">
        <div class="main__product-items pages__style-items">
            <ProductItem
            :SortProducts="filterProducts"
            />
        </div>
    </div>
          <ul @click="getSliding" v-show="filterProducts.length >= 0" class="main__product-slide pages__style-slide">
            <li v-show="filterProducts.length > 0" class="main__product-nums pages__style-nums active">1</li>
            <li v-show="filterProducts.length > 6" class="main__product-nums pages__style-nums">2</li>
            <li v-show="filterProducts.length > 12" class="main__product-nums pages__style-nums">3</li>
            <li v-show="filterProducts.length > 24" class="main__product-nums pages__style-nums">4</li>
            <li v-show="filterProducts.length > 30" class="main__product-nums pages__style-nums">5</li>
            <li v-show="filterProducts.length >= 36" class="main__product-nums pages__style-nums">6</li>
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
            SortProducts:[...products],
            dots:[]
      }
    },
    methods:{
        getSliding(){
            const items = document.querySelector('.pages__style-items');
            const nums = document.querySelectorAll('.pages__style-nums');
                nums.forEach(el => el.classList.remove('active'));
                event.target.classList.add('active');
                console.log(items.style.top);
            if(event.target.innerHTML == '1'){
                items.style.top = '0px';
            }else if(event.target.innerHTML == '2'){
                items.style.top = -items.clientHeight/6 + 'px';
            }else if(event.target.innerHTML == '3'){
                items.style.top = -items.clientHeight/3 + 'px';
            }else if(event.target.innerHTML == '4'){
                items.style.top = -items.clientHeight/2 + 'px';
            }else if(event.target.innerHTML == '5'){
                items.style.top = -items.clientHeight - -items.clientHeight/3 + 'px';
            }else if(event.target.innerHTML == '6'){
                items.style.top = -items.clientHeight - -items.clientHeight/6+ 'px';
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