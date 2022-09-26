import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/styles/style.scss'
import { store } from '@/store/store'

import routers from '@/router/routes.js'
import db from '@/store/db'


createApp(App).use(routers).use(store).mount('#app')

// function writeUserData(userId, name, email, imageUrl) {
//     const db = getDatabase();
//     set(ref(db, 'Products/' + userId), {
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
// }
// writeUserData(1,'Ismail','asddsasad','photo.png')
