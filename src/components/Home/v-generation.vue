<template>
    <div class="main__generation">
        <swiper 
        :spaceBetween="30" 
        :pagination="{clickable: true}"
        :modules="modules"
        class="main__generation-box mySwiper"
        >
            <swiper-slide class="main__generation-image">
                <img src="@/assets/images/Home/home__security-1.png" alt="" class="main__generation-img">
            </swiper-slide>
            <swiper-slide class="main__generation-image">
                <img src="@/assets/images/Home/home__security-2.png" alt="" class="main__generation-img">
            </swiper-slide>
            <swiper-slide class="main__generation-image">
                <img src="@/assets/images/Home/home__security-3.png" alt="" class="main__generation-img">
            </swiper-slide>
        </swiper>
        <div class="main__generation-right">
            <h2 class="main__generation-title title">Кибербезопасность нового поколения</h2>
            <p class="main__generation-text text">Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса.</p>
        </div>
    </div>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
    data(){
        return{

        }
    }
}
</script>

<style>

</style>