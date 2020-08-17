
<template>
  <div id="app">

    <!--
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
      <router-link class="navbar-brand" to="/home" v-if="userLogged">Home</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/vote" v-if="userLogged" >Waifus Vote</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vote" v-if="userLogged" >Husbandos Vote</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/" v-if="!userLogged" >LogIn</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register" v-if="!userLogged">Register</router-link>
          </li>
        </ul>
        
        
      </div>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"  @click="logOut" v-if="userLogged">LogOut</button>
        </form>
    </nav>
    -->
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/home' }">
                <img src="./assets/logo3.png" >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/vote' }" v-if="userLogged">Waifus Vote</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/vote' }" v-if="userLogged">Husbandos Vote</b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" :href="currentRouteName==='Login'?'/register':'/'" v-if="!userLogged">
                    {{currentRouteName==='Login'?'Sing Up':'Login'}}
                    </a>
                    <a class="button" :class="[currentRouteName==='Login'?'is-light':'is-primary']" v-if="!userLogged">boton1</a>
                    <a class="button" :class="[currentRouteName==='Register'?'is-light':'is-primary']" v-if="!userLogged">boton2</a>
                    <a class="button is-primary" type="submit" @click="logOut" v-if="userLogged">Log out</a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <div ><router-view/></div>
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['userLogged','getUrl']),
    currentRouteName() {
        return this.$route.name;
    }
  },
  methods: {
    ...mapActions(['logOut'])
  }
}
</script>

<style>
.colorBonito{
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}
</style>