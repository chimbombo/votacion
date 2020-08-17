<template>
  <div class="container">
      <section class="center-register">
        <form @submit.prevent="newUser({name: inputName, email: inputEmail, birthDate: moment(inputDate).format('YYYY-MM-DD'), password: inputPassword1})">
          <h1 class="title center-button">Register form</h1>
            <b-field label="Name">
                <b-input 
                    v-model="inputName"
                    icon="user-astronaut"></b-input>
            </b-field>

            <b-field label="Your birthdate">
                <b-datepicker
                    v-model="inputDate"
                    placeholder="Click to select..."
                    icon="calendar-alt"
                    trap-focus>
                </b-datepicker>
            </b-field>

            <b-field label="Email">
                <b-input 
                    type="email"
                    v-model="inputEmail"
                    placeholder="otaku@mail.com"
                    icon="envelope"
                    maxlength="320">
                </b-input>
            </b-field>

            <b-field label="Password">
                <b-input 
                    type="password"
                    icon="key"
                    password-reveal
                    v-model="inputPassword1">
                </b-input>
            </b-field>

            <b-field label="Repeat Password">
                <b-input 
                    type="password"
                    icon="key"
                    password-reveal
                    v-model="inputPassword2">
                </b-input>
            </b-field>

          <div class="center-button">
            <b-button 
                :disabled='!passwordDisabled'
                native-type="submit">Submit</b-button>
          </div> 
        </form>
      </section>
    </div>
</template>


<script>
import {mapActions, mapState} from 'vuex'

export default {
  name:'Register',
  data(){
    return{
      inputName: '',
      inputDate: undefined,
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



<style scoped>
  .center-register {

    width: 50%;
    margin: auto;
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    padding: 2rem 4rem;
    box-sizing: border-box;
    border-radius: 20px;

  }

  @media (max-width: 425px ){
    .center-register{
      width: 100%
    }
  }

  .center-button {
    text-align: center;
  }
</style>