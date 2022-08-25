<template>
    <v-card class="form">
      <h3 class="ml-8 pt-5 mb-5">Login</h3>
        <form class="ml-8 mr-8" v-on:submit.prevent="submitForm">
          <v-autocomplete
            label="Please Select Identity"
            filled
            solo-inverted
          ></v-autocomplete>
          <v-text-field
            filled
            solo-inverted
            v-model="number"
            label="Enter Number"
            required
            outlined
            :rules="[rules.required, rules.number]"
          ></v-text-field>
          <v-text-field
            filled
            solo-inverted
            v-model="password"
            label="Password"
            required
            outlined
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-alert v-if="alertError" type="error">
            Failed! Invalid number or password!
          </v-alert>

          <v-btn class="mb-4" type="submit" color="#19A0FB" dark width="100%">
            {{ isLoading }}
          </v-btn>

          <v-checkbox
            class="pb-10"
            v-model="ex4"
            label="Remember Me"
            color="primary"
            value="primary"
            hide-details
          ></v-checkbox>
        </form>
    </v-card>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: '',
      alertError: false,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      isLoading: 'Sign In',
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 8) || 'Minimum 8 characters',
      ],
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid email!'
        },
      },
    }
  },
  methods: {
    async submitForm() {
      this.isLoading = 'Please wait...'
      try {
        const response = await axios.post('login', {
          email: this.email.trim(),
          password: this.password,
        })
        localStorage.setItem('token', response.data.token)
        this.$store.dispatch('user', response.data.user)
        this.isLoading = 'Login'
        this.$router.push('/home')
      } catch (e) {
        this.alertError = true
        this.isLoading = 'Login'
      }
    },
  },
}
</script>

<style>
.form {
  height: auto;
  width: auto;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  margin: 1rem;
  border-radius: 6px;
}
.form-1 {
  transform: translate(0px, -30px);
}
.text {
  text-align: center;
}
h3 {
  text-align: left;
  color: #00A44C;
}
</style>
