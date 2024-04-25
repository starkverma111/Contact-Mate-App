import { createApp } from 'vue'
import App from './App.vue'
import AllContacts from './components/AllContacts.vue'
import FavoriteContacts from './components/FavoriteContacts.vue'
import DeleteContacts from './components/DeleteContacts.vue'

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AllContacts },
        { path: '/favorite', component: FavoriteContacts },
        { path: '/delete', component: DeleteContacts },
    ]
});


const app = createApp(App)
app.use(router);


app.mount('#app')