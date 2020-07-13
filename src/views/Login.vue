<template>
  <div>
    <div class="container">
      <div>
        <h1 align="center">Log In</h1>
      </div>
      <form @submit.prevent="logIn({email: inputEmail, password: inputPassword})">
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="otaku@otaku.com"
            v-model="inputEmail"
          />
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" v-model="inputPassword"/>
        </div>
        <p>{{error}}</p>        
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Login',
    data(){
        return {
            inputEmail: '',
            inputPassword: ''
        }
    },
    computed: {
        ...mapState(['error'])
    },
    methods:{
        ...mapActions(['logIn'])
    }
}
</script>
