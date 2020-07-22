<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
      <router-link class="navbar-brand" to="/home" v-if="userLogged">Home</router-link>
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
        </ul>
        <!--<button class="submit" @click="logOut" v-if="userLogged">LogOut</button>-->
        
      </div>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-danger my-2 my-sm-0" type="submit"  @click="logOut" v-if="userLogged">LogOut</button>
        </form>
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