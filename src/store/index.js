import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        error: null,
        url: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setError(state, message) {
            state.error = message
        },
    },
    actions: {
        newUser({ commit }, user) {
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    db.collection('userData').
                    add({
                        userId: res.user.uid,
                        email: user.email,
                        name: user.name,
                        birthDate: user.birthDate
                    }).then(
                        router.push('/')
                    )
                })
                .catch(error => {
                    console.log(error);
                })
        },
        logIn({ commit }, user) {
            auth.signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res);
                    const userLogged = {
                        email: res.user.email,
                        uid: res.user.uid
                    }
                    localStorage.setItem('user', JSON.stringify(userLogged))
                    commit('setUser', userLogged)
                    router.push('/home')
                })
                .catch(error => {
                    console.log(error.message);
                    commit('setError', error.message)
                })
        },
        logOut({ commit }) {
            auth.signOut()
                .then(() => {
                    commit('setUser', null)
                    localStorage.removeItem('user')
                    router.push('/')
                })
        }
    },
    modules: {},
    getters: {
        userLogged(state) {
            return !!state.user;
        },
        getUrl() {
            console.log(router.currentRoute);
        }
    }
})