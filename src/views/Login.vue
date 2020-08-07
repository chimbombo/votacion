    <template>
    <div class="container">
      <section class="center-login">
        <form @submit.prevent="logIn({email: inputEmail, password: inputPassword})">
          <b-field label="Email">
            <b-input

                placeholder="Email"
                v-model="inputEmail"
                type="email"
                icon="envelope"
                icon-right="close-circle"
                icon-right-clickable
                @icon-right-click="clearIconClick">
            </b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password"
                v-model="inputPassword"
                password-reveal>
            </b-input>
        </b-field>
        <div class="center-button">
          <b-button native-type="submit">Submit</b-button>
        </div> 
        </form>
    </section>
    </div>
</template>


<!--
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
-->


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
        ...mapActions(['logIn']),
        clearIconClick() {
                this.inputEmail = '';
                alert('Email cleared!')
            }
    }
}
</script>

<style scoped>
  .center-login {

    width: 50%;
    margin: auto;
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    padding: 2rem 4rem;
    box-sizing: border-box;
    border-radius: 20px;

  }

  @media (max-width: 425px ){
    .center-login{
      width: 100%
    }
  }

  .center-button {
    text-align: center;
  }
</style>