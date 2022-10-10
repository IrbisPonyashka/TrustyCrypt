<template>
    <div class="main__generation">
        <div class="main__generation-box">
          <div class="main__generation-slider">
              <div class="1 main__generation-img-1 main__generation-img"></div>
              <div class="2 main__generation-img-2 main__generation-img"></div>
              <div class="3 main__generation-img-3 main__generation-img active"></div>
          </div>
          <div class="main__generation-dots">
            <div class="main__generation-dot" v-for="dot in dots" :key="dot.id" @click="Slider(dot.id)">  
              <img :src="require(`@/assets/images/SVG/Icons/${dot.img}`)" alt="" class="main__generation-dots">
            </div>
          </div>
        </div>
        <div class="main__generation-descr">
          <h2 class="main__generation-title title">Кибербезопасность нового поколения</h2>
          <p class="main__generation-text text">Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса. </p>
        </div>
      </div>
</template>

<script>
export default {
 data(){
  return{
    imgSrc:'3',
    images:[
      {id:1,img:'1'},
      {id:2,img:'2'},
      {id:3,img:'3'}
    ],
    active:'dot__active.svg',
    dots:[
      {id:1,img:'dot.svg'},
      {id:2,img:'dot.svg'},
      {id:3,img:'dot__active.svg'}
    ]
  }
 },
 methods:{
  Slider(id){
    let imgs = document.querySelectorAll('.main__generation-img');
    let offset = 3;
    for(let i =0;i<this.dots.length;i++){
      imgs[i].classList.remove('active');
        if(id === this.dots[i].id){
          this.dots[i].img = 'dot__active.svg'
          if(id == imgs[i].classList[0]){
            imgs[i].classList.add('active');
          }
        
      }else{
        this.dots[i].img = 'dot.svg'
      }
    }
  }
 }
}
</script>

<style>

</style>