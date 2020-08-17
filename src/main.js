import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from "moment"
Vue.prototype.moment = moment

Vue.use(Buefy, {
    defaultIconPack: 'fas'
})

import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

if (localStorage.getItem('user')) {
    store.commit('setUser', JSON.parse(localStorage.getItem('user')))
}

store.subscribe((mutation, state) => {

    console.log('state: ', state);

});