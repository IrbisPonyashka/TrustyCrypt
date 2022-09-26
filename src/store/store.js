import { createStore } from "vuex"

export const store = createStore({
    state:{
        status: 'Все категории',
        type:'Все статьи'
    },
    mutations:{
        getChooseCategory(state,payload){
            state.status = payload[0]
        },
        getType(state,payload){
            if(payload == 'Фишинг'){
                state.type = 'fishing';
            }else if(payload == 'Советы'){
                state.type = 'tips';
            }else if(payload == 'Способы'){
                state.type = 'ways';
            }else if(payload == 'Гейминг'){
                state.type = 'gaming';
            }else if(payload == 'Безопасность'){
                state.type = 'security';
            }else if(payload == 'Разработка'){
                state.type = 'development'
            }else{
                state.type = 'Все статьи'
            }
        }
    },
    actions:{

    },
    getters:{
        getChooseCategory(state){
            return state.status
        },
        getType(state){
            return state.type
        }
    }
})