<template>
  <v-app>
    <v-toolbar
    color="primary"
    dark
    v-if="loggedIn"
  >
    <!-- <v-toolbar-title>GPC Manager</v-toolbar-title> -->
<v-btn text type="button" title="Wyloguj" value="Logout" @click="logout"><v-icon>mdi-logout</v-icon></v-btn>
    <!-- <v-divider
      class="mx-4"
      vertical
    ></v-divider> -->

    <!-- <span class="subheading">M</span> -->

    <v-spacer></v-spacer>

    <v-toolbar-items class="">
      <v-btn
      v-for="item in items"
      :key="item.title"
      link
      :to="item.path"
      text>
        {{item.title}}
      </v-btn>

      <v-divider vertical></v-divider>
      <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>
                <v-list-item-title class="title">
                  {{user.username}}
                </v-list-item-title>
              </v-list-item>
              <v-divider v-if="user.userRole == 1"></v-divider>
              <v-list-item v-if="user.userRole == 1">
                <v-list-item-title>
                  <v-btn
                    link
                    to="/sign-up"
                    text>
                      Utwórz użytkownika
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="user.userRole == 1">
                <v-list-item-title>
                  <v-btn
                    link
                    to="/edit-user"
                    text>
                      Edycja użytkowników
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="user.userRole == 1">
                <v-list-item-title>
                  <v-btn
                  @click="openDialog"
                  link
                  text
                  >
                  Raport z placu
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </v-toolbar-items>
  </v-toolbar>
    <v-main>
      <router-view></router-view>
    </v-main>
<v-dialog
        v-if="raportDialog"
        v-model="raportDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
      <v-card tile>
          <v-toolbar
            flat
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="raportDialog = false;"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Zbiorniki na placu</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Szukaj"
          single-line
          hide-details
        ></v-text-field>
            <v-data-table
              v-if="raportDialog"
              :headers = "headers"
              :items="activeTanks"
              :search="search"
              dense
              class="elevation-1"
              :mobile-breakpoint="0"
              :items-per-page="10"
              >
                <!-- <template v-slot:item.sortableDeliverDate="{ item }">
                  {{item.deliverDate}}
                </template> -->
            </v-data-table>
          </v-card-text>
        </v-card>
</v-dialog>
<notifications group="foo"  position="bottom right"/>
  </v-app>
</template>

<script>
// import Home from './views/Home.vue';
import { mapState } from 'vuex';
import axios from 'axios';


export default {
  name: 'App',

  components: {
    // Home,
  },

  data: () => ({
    raportDialog: false,
    activeTanks: [],
    drawer: null,
    username: '',
    search: '',
    loggedIn: false,
    headers: [
      {
        text: 'Nazwa',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Parcela', value: 'parcel' },
      { text: 'Miejsce', value: 'slotId' },
      { text: 'Producent', value: 'manufacturerName' },
      { text: 'Pojemność', value: 'capacityName' },
      { text: 'Właściciel', value: 'ownerName' },
      { text: 'Zawór', value: 'valveName' },
      { text: 'PIN', value: 'pin' },
      { text: 'Rok produkcji', value: 'productionYear' },
      { text: 'Zafakturowano', value: 'invoice' },
      { text: 'Uwagi', value: 'comment' },
      { text: 'Uwagi do pracy', value: 'workComment' },
    ],
    items: [
      { title: 'Zbiorniki', path: '/', icon: 'mdi-view-dashboard' },
      { title: 'W trasie', path: '/on-the-road', icon: 'mdi-road' },
      { title: 'Historia', path: '/history', icon: 'mdi-history' },
    ],
  }),
  methods: {
    logout() {
      this.$store.dispatch('authentication/logout');
      this.loggedIn = false;
      if(this.$router.path !== '/login'){
        this.$router.push('/login');
      }
    },
    openDialog() {
      // console.log(event.target.outerText);
            axios.get(`${this.api_url}tank/get-tanks-list`, {
          headers: {
            Authorization: this.token,
          //   apitoken: context.rootState.apitoken,
          //   clientbrowser: Vue.clientbrowser,
          },
        })
        .then((result)=>{
          // Object.assign({}, this.tankData, result.data[0])
          this.activeTanks = result.data;
          this.raportDialog = true;
        })
    },
  },
  beforeCreate() {
    this.$store.dispatch('common/loadParcelList');
  },
  created() {

  },
  beforeMount() {
  },
  mounted() {
    this.loggedIn = this.$store.getters['authentication/isLoggedIn'];
    this.username = this.$store.getters['authentication/getUser'].username;
  },
  beforeUpdate() {
    this.loggedIn = this.$store.getters['authentication/isLoggedIn'];
    this.username = this.$store.getters['authentication/getUser'].username;
  },
  updated() {
  },
  activated() {
  },
  deactivated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  computed: {
    ...mapState('authentication', [
      'user',
      'token',
    ]),
    ...mapState([
      'api_url'
    ]),
  },
};
</script>
<style>
html{
  font-size: 12px !important;
}
  .v-list-item a {
    display: flex;
    text-decoration: none;
    color: black;
    width: 100%;
  }
  .v-list-item a > div {
    width: 100%;
    display: flex;
  }
  .v-toolbar__content {
    padding-right: 5px !important;
    padding-left: 5px !important;
  }
  @media(max-width: 1000px){
    .v-btn:not(.v-btn--round).v-size--default {
      font-size: 0.6rem !important;
      padding: 0 5px !important;
    }
  }
</style>
