<template>
  <div>
    <div class="container">
      <div>
        <h1 align="center">Register form</h1>
      </div>
      <form @submit.prevent="newUser({name: inputName, email: inputEmail, birthDate: inputDate, password: inputPassword1})">
        <div class="form-group">
          <label for="inputName">Name</label>
          <input type="text" class="form-control" id="inputName" v-model="inputName"/>
        </div>
        <div class="form-group">
          <label for="inputDate">Birth date</label>
          <input type="date" class="form-control" name="inputDate" v-model="inputDate" />
        </div>
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
          <label for="inputPassword1">Password</label>
          <input type="password" class="form-control" id="inputPassword1" v-model="inputPassword1"/>
        </div>
        <div class="form-group">
          <label for="inputPassword2">Repeat Password</label>
          <input type="password" class="form-control" id="inputPassword2" v-model="inputPassword2"/>
        </div>
        <button type="submit" :disabled='!passwordDisabled' class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name:'Register',
  data(){
    return{
      inputName: '',
      inputDate:'',
      inputEmail: '',
      inputPassword1: '',
      inputPassword2: ''
    }
  },
  methods:{
    ...mapActions(['newUser'])
  },
  computed:{
    passwordDisabled(){
      return this.inputPassword1 === this.inputPassword2 && this.inputPassword1.trim() !== '' && this.inputPassword1.length > 5
    }
  }
}
</script>