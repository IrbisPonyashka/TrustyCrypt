<template>
  <div class="main__info">
    <h2 class="main__info-title title" >Вы можете связаться с нами удобным для Вас способом</h2>
    <div class="main__info-content">
        <div class="main__info-blur"></div>
        <div class="main__info-register">
            <form  class="main__info-form">
                <label class="main__info-label" v-for="el in form" :key="el.id">
                    <input type="text" :class="'main__info-'+el.class+' info-input inscr'" :placeholder="el.text">
                    <!-- <span class="main__info-descr inscr" :class="state">{{el.text}}</span> -->
                </label>
                <label for="" class="main__info-label">
                    <textarea class="main__info-textarea inscr" v-model="text"></textarea>
                    <span v-if="text == ''" class="main__info-descr inscr">Введите ваше сообщение</span>
                </label>
                <div class="main__info-root">
                    <div class="main__info-switch" @click="state = !state" :class="{'on' : state}">
                        <div class="main__info-dot" :class="{'on' : state}"></div>
                    </div>
                    <p class="main__info-text micro-text">Я согласен на обработку персональных данных</p>
                </div>
                <button class="main__info-btn inscr">Отправить данные</button>
            </form>
        </div>
            <h2 class="main__info-adress-title title">Мы находимся по адресу</h2>
        <div class="main__info-adress">
            <ul class="main__info-adress-list">
                <li class="main__info-adress-li" v-for="adres in adress" :key="adres.key">
                    <img :src="require('../../assets/images/SVG/Icons'+adres.icon)" alt="" class="main__adres-icon">
                    <p class="main__info-adres-text inscr">{{ adres.text }}</p>
                </li>
            </ul>
            <div style="position:relative;overflow:hidden;" >
                <a href="https://yandex.uz/maps/16/yaroslavl/?utm_medium=mapframeutm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;"></a>
                <a href="https://yandex.uz/maps/16/yaroslavl/house/leningradskiy_prospekt_27/Z0AYfgVlQEQOQFttfXp2cX9iYQ==/?ll=39.825919%2C57.670315&mode=search&sctx=ZAAAAAgAEAAaKAoSCTSAt0CCQ1FAEQjMQ6Z8jkRAEhIJU%2BdR8X9Hyj8R28GIfQIouj8iBgABAgMEBSgKOABA1boGSAFiNHJlbGV2X3JhbmtpbmdfaGVhdnlfY2xpY2tfbWFwc19mb3JtdWxhPTAuNDpmbWw4NzMzMDVqAnV6nQHNzEw9oAEAqAEAvQGYmZDgwgEZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOoBAPIBAPgBAIICNNCb0LXQvdC40L3Qs9GA0LDQtNGB0LrQuNC5INC%2F0YDQvtGB0L%2FQtdC60YIsIDI3LCDQujKKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=39.825919%2C57.670315&sspn=0.012481%2C0.004401&text=%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%2C%2027%2C%20%D0%BA2&utm_medium=mapframe&utm_source=maps&z=17.04" style="color:#eee;font-size:12px;position:absolute;top:14px;"></a>
                <iframe src="https://yandex.uz/map-widget/v1/-/CCUVBLdH3B" max-width="345" width="100%" height="300" frameborder="1" allowfullscreen="true" style="position:relative;" class="main__info-canvas"></iframe>
            </div>
        </div>
    </div>
    <p class="main__info-about-text micro-text">
        © 2022 LLC Trustcrypt. All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            state:false,
            text:'',
            form:[
                {id:1,text:'Как к Вам обращаться?',class:'name',text_2:'Как к Вам обращаться?',name:''},
                {id:2,text:'Какую компанию Вы представляете?',class:'company',text_2:'Какую компанию Вы представляете?',name:''},
                {id:3,text:'Адрес электронной почты',class:'email',text_2:'Адрес электронной почты',name:''},
            ],
            adress:[
                {id:1,text:'Ленинградский пр-т., 27, к2',icon:'/label.svg'},
                {id:2,text:'+7 (495) 000 - 00 - 00',icon:'/Call.svg'},
                {id:3,text:'admin@trustcrypt.com',icon:'/Mail.svg'}
            ]
        }
    },
    methods:{
        // clear(id){
        //         if(id == 1){
        //             this.form[0].text = ''
        //         }else if(id == 2){
        //             this.form[1].text = ''
        //         }else if(id == 3){
        //             this.form[2].text = '';
        //         }
        // }
    }
}
</script>

<style>

</style>