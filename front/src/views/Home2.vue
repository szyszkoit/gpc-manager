<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!-- <div>
    <h1>Hi {{ username }}</h1>
    <p>{{ secretContent }}</p>
  </div> -->
    <!-- <Parcel v-for="parcel in parcel_list" :key="parcel.id" :parcel="parcel" @addTank="addHandle()" /> -->
{{parcel_list}}
  </div>
</template>

<script>
// @ is an alias to /src
import Parcel from '@/components/Home/Parcel.vue';
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
    Parcel,
  },
  data() {
    return{
      secretContent: '',
      username: '',
    }
  },
  beforeCreate() {
    this.$store.dispatch('common/loadParcelList');
  },
  created() {
    if (!this.$store.getters['authentication/isLoggedIn']) {
      this.$router.push('/login');
    }
    this.$store.dispatch('authentication/getSecretContent')
    .then(() => {
      this.secretContent = this.$store.getters['authentication/getSecretContent'];
    });
    this.username = this.$store.getters['authentication/getUser'].username;

  },
  mounted() {

  },
  methods: {
    addHandle() {
      // this.$store.dispatch('common/loadParcelList');
      // location.reload();
    }
  },
  computed: {
    ...mapState('common', [
      'parcel_list',
    ]),
  },
};
</script>
<style  lang="scss">
    .home {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));;
    }
</style>