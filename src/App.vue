<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
      <router-link class="navbar-brand" to="/home" v-if="userLogged">Home</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/waifus" v-if="userLogged" >Waifus Vote</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/husbandos" v-if="userLogged" >Husbandos Vote</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/" v-if="!userLogged" >LogIn</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register" v-if="!userLogged">Register</router-link>
          </li>
          <li>
            <button class="submit" @click="logOut" v-if="userLogged">LogOut</button>
          </li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['userLogged'])
  },
  methods: {
    ...mapActions(['logOut'])
  }
}
</script>