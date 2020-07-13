import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        error: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user
        },
        setError(state, message) {
            state.error = message
        },
    },
    actions: {
        newUser({ commit }, user) {
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res);
                    router.push('/home')
                })
                .catch(error => {
                    console.log(error);
                })
        },
        logIn({ commit }, user) {
            auth.signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res);
                    router.push('/home')
                })
                .catch(error => {
                    console.log(error.message);
                    commit('setError', error.message)
                })
        }
    },
    modules: {}
})