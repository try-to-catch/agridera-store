import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCartShopping, faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faCartShopping, faXmark)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() {
            console.log('Service worker registered!');
        });
}

