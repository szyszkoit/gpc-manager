// src/views/Login.vue
<template>
  <div class="form-wrapper">
    <validation-observer
      ref="observer"
    >
      <form @submit.prevent="login">
        <validation-provider
          v-slot="{ errors }"
          name="Login"
          rules="required"
        >
          <v-text-field
            v-model="username"
            :error-messages="errors"
            label="Login"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Hasło"
          rules="required|min:6"
        >
          <v-text-field
            v-model="password"
            ref="password"
            type="password"
            :error-messages="errors"
            label="Hasło"
            required
          ></v-text-field>
        </validation-provider>
        <!-- <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider> -->
        <v-btn
          class="mr-4"
          type="submit"
        >
          Zaloguj
        </v-btn>
        <!-- <p class="form-question">Nie masz konta ? <a href="#/sign-up">Zarejestruj się</a></p> -->
      </form>
    </validation-observer>
    <loading
      :show="loader.show">
    </loading>
  </div>
</template>
<style lang="scss" scoped>
  .form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height:70vh;
  span {
    width: 400px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding:20px;
    .v-btn {
      width: 60%;
    }
    .form-question {
      margin-top:30px;
    }
    @media only screen
    and (orientation: portrait) {
      span{
        width: 100%;
      }
      form {
        width: 100%;
      }
    }
  }
}
</style>
<script>
// import AuthService from '@/services/AuthService.js';
import { required, min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import loading from 'vue-full-loading'

 setInteractionMode('eager')

  extend('required', {
    ...required,
    message: 'Pole {_field_} nie może być puste',
  })

  extend('min', {
    ...min,
    message: 'Minimalna długość znaków to {length}',
  })

  // extend('email', {
  //   ...email,
  //   message: 'Niepoprawny adres email',
  // })
export default {
  components: {
      ValidationProvider,
      ValidationObserver,
      loading,
  },
  data() {
    return {
      username: '',
      password: '',
      msg: '',
      loader:{
        show: false,
      }
    };
  },
  created() {
    if (this.$store.getters['authentication/isLoggedIn']) {
      this.$router.push('/');
    }
  },
  methods: {
    async login() {
      this.loader.show = true;
      this.$refs.observer.validate();
      try {
        const credentials = {
          username: this.username,
          password: this.password
        };
        await this.$store.dispatch('authentication/login', credentials)
        .then(() => {
          this.loader.show = false;
        })
        .catch(error => {
          this.loader.show = false;
        console.log(error);
        });
        // const response = await AuthService.login(credentials);
        // this.msg = response.msg;

        // const token = response.token;
        // const user = response.user;

        // this.$store.dispatch('login', { token, user });

        // this.$router.push('/');
      } catch (error) {
        this.loader.show = false;
        this.msg = error.response.data.msg;
      }
    }
  }
};
</script>