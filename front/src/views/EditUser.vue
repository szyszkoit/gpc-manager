<template>
  <div class="form-wrapper">
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
      <form @submit.prevent="edit">
        <validation-provider
          v-slot="{ errors }"
          name="username"
          rules="required"
        >
          <v-select
            v-model="user"
            :items="users_list"
            item-text="username"
            item-value="id"
            :error-messages="errors"
            name="Użytkownik"
            label="Użytkownik"
            data-vv-name="username"
            required
          ></v-select>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required"
        >
          <v-text-field
            v-model="password"
            ref="password"
            type="password"
            min-length = "6"
            :error-messages="errors"
            label="Nowe hasło"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="confirm"
          rules="required|password:@password"
        >
          <v-text-field
            v-model="password_repeat"
            type="password"
            min-length = "6"
            required
            :error-messages="errors"
            label="Powtórz hasło"
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="group"
          rules="required"
        >
          <v-select
            v-model="user_group"
            :items="user_groups_list"
            item-text="name"
            item-value="id"
            :error-messages="errors"
            name="Grupa"
            label="Grupa"
            data-vv-name="group"
            required
          ></v-select>
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
          :disabled="invalid"
          type="submit"
        >
          Zapisz
        </v-btn>
        <!-- <p class="form-question">Masz już konto ? <a href="#/login">Zaloguj się</a></p> -->
      </form>
    </validation-observer>
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
import { mapState } from 'vuex';
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
 setInteractionMode('eager')
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Hasła muszą być takie same.'
});

  extend('required', {
    ...required,
    message: 'Pole {_field_} nie może być puste',
  })

  extend('min', {
    ...min,
    message: 'Minimalna długość znaków to {length}',
  })
export default {
  components: {
      ValidationProvider,
      ValidationObserver,
  },
  data() {
    return {
      user: '',
      password: '',
      password_repeat: '',
      user_group: '',
      msg: ''
    };
  },
  created(){
    this.$store.dispatch('authentication/loadUserGroupsList');
    this.$store.dispatch('authentication/loadUsersList');
  },
  methods: {
    async edit() {
      try {
        const credentials = {
          userId: this.user,
          password: this.password,
          password_repeat: this.password_repeat,
          userRole: this.user_group,
        };
        const response = await this.$store.dispatch("authentication/editUser", credentials);
        this.msg = response.msg;
        // this.$router.push('/');
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  },
  computed: {
    ...mapState('authentication', [
      'user_groups_list',
      'users_list',
    ]),
  }
};
</script>