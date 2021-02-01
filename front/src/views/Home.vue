<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!-- <div>
    <h1>Hi {{ username }}</h1>
    <p>{{ secretContent }}</p>
  </div> -->
  <v-container fluid>
  <v-layout row wrap justify-space-between>

      <v-flex md3>
        <v-chip class="plotTanks">Zbiorniki na placu: {{plotTanks('all')}} / {{plotSlots()}}</v-chip>
      </v-flex>
      <v-flex md6 shrink style="text-align: right">
      <v-chip class="plotTanks color-0">{{plotTanks(0)}}</v-chip>
      <v-chip class="plotTanks color-1">{{plotTanks(1)}}</v-chip>
      <v-chip class="plotTanks color-2">{{plotTanks(2)}}</v-chip>
      <v-chip class="plotTanks color-3">{{plotTanks(3)}}</v-chip>
      <v-chip class="plotTanks color-4">{{plotTanks(4)}}</v-chip>
      <v-chip class="plotTanks color-5">{{plotTanks(5)}}</v-chip>
      <v-chip class="plotTanks color-6">{{plotTanks(6)}}</v-chip>
      <v-chip class="plotTanks color-7">{{plotTanks(7)}}</v-chip>
      <v-chip class="plotTanks color-8">{{plotTanks(8)}}</v-chip>
      <v-chip class="plotTanks color-9">{{plotTanks(9)}}</v-chip>
      </v-flex>
  </v-layout>
  </v-container>
<v-form @submit.prevent="findNumber">
    <!-- <v-container>
      <v-row> -->
        <v-col cols="12">
          <v-text-field
            v-model="message"
            clearable
            label="Wyszukaj zbiornik"
            type="text"
            @input="clearFoundTanks(message)"
          >
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-progress-circular
                  v-if="loading"
                  size="24"
                  color="info"
                  indeterminate
                ></v-progress-circular>
              </v-fade-transition>
            </template>
            <template v-slot:append-outer>
              <v-menu
                style="top: -25px"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    style="top: -10px"
                    v-bind="attrs"
                    v-on="on"
                    @click="findNumber(message)"
                  >
                    <v-icon left>
                      mdi-magnify
                    </v-icon>
                    Szukaj
                  </v-btn>
                </template>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
      <!-- </v-row>
    </v-container> -->
  </v-form>
<div style="margin: 0px;" v-for="parcel in parcel_list" :key="parcel.id"  class="parcel" :id = "parcel.id">
  <div class="title">
        {{parcel.name}}
        <v-chip class="parcelSlots">Zbiorniki: {{parcel.slots.length}} / {{parcel.size}}</v-chip>
      <div class="parcelTanksChips">
        <v-chip class="parcelTanks color-0">{{parcelTanks(parcel.slots, 0)}}</v-chip>
        <v-chip class="parcelTanks color-1">{{parcelTanks(parcel.slots, 1)}}</v-chip>
        <v-chip class="parcelTanks color-2">{{parcelTanks(parcel.slots, 2)}}</v-chip>
        <v-chip class="parcelTanks color-3">{{parcelTanks(parcel.slots, 3)}}</v-chip>
        <v-chip class="parcelTanks color-4">{{parcelTanks(parcel.slots, 4)}}</v-chip>
        <v-chip class="parcelTanks color-5">{{parcelTanks(parcel.slots, 5)}}</v-chip>
        <v-chip class="parcelTanks color-6">{{parcelTanks(parcel.slots, 6)}}</v-chip>
        <v-chip class="parcelTanks color-7">{{parcelTanks(parcel.slots, 7)}}</v-chip>
        <v-chip class="parcelTanks color-8">{{parcelTanks(parcel.slots, 8)}}</v-chip>
        <v-chip class="parcelTanks color-9">{{parcelTanks(parcel.slots, 9)}}</v-chip>
      </div>
    </div>
<div class="slots">
  <div v-for="index in parcel.size" :key="index" >
    <!-- <div style="" > -->
        <span class="slotId">
          {{parcelSlotId(parcel.slots, index)}}
        </span>
      <v-btn
                color="default"
                :class="[parcelSlotId(parcel.slots, index) == index ? `color-${parcelSlotBg(parcel.slots, index)}` : '', 'ma-2', 'slot']"
                @click="openDialog($event, parcel.id, index)"
            >
        <!-- <span v-if="item.slotId == index">
          {{item.name}}
        </span> -->

      {{parcelSlot(parcel.slots, index)}}
      </v-btn>
    <!-- </div> -->
  </div>
</div>
</div>
<v-dialog
        v-if="dialog"
        v-model="dialog"
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
              @click="dialog = false; action = 'add'"
            >
              <v-icon @click="clearFoundTanks('')">mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Zbiornik</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-chip>
              Parcela: {{activeParcel}}, miejsce: {{activeSlot}}
            </v-chip>
          </v-toolbar>
          <v-card-text>
            <TankForm :formData="formData" :action="action" :parcelId="activeParcel" :slotId="activeSlot" @addTank="addHandle()"/>
          </v-card-text>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import TankForm from '@/components/Home/TankForm.vue';
// @ is an alias to /src
// import Parcel from '@/components/Home/Parcel.vue';
import { mapState } from 'vuex';
import axios from 'axios';
// import $ from 'jquery';

export default {
  name: 'Home',
  components: {
    // Parcel,
    TankForm,
  },
  data() {
    return{
      // user: this.$store.getters['authentication/getUser'],
      message: '',
      loading: false,
      secretContent: '',
      username: '',
      parcelOne: '',
      formData: '',
      dialog: false,
        activeParcel: '',
        activeSlot: '',
        action: 'add',
    }
  },
  beforeCreate() {
    this.$store.dispatch('common/loadParcelList');
  },
  created() {
    if (!this.$store.getters['authentication/isLoggedIn']) {
      this.$router.push('/login');
    }
    this.$store.dispatch('authentication/loadUserGroupsList');
    this.$store.dispatch('authentication/loadUsersList');
    this.$store.dispatch('authentication/getSecretContent')
    .then(() => {
      this.secretContent = this.$store.getters['authentication/getSecretContent'];
    });
    this.username = this.$store.getters['authentication/getUser'].username;
/////////////////

  },
  mounted() {

  },
  methods: {
    // clickMe () {
    //     this.loading = true
    //     this.message = 'Wait for it...'
    //     setTimeout(() => {
    //       this.loading = false
    //       this.message = `You've clicked me!`
    //     }, 2000)
    //   },
    findNumber(tankNumber) {
    this.loading = true;
    // this.message = 'Szukam!';
    // let foundSlots = [];
    const buttonsInner = document.getElementsByClassName('slot');
    let iterations = buttonsInner.length;
    for(let slot of buttonsInner) {
      if(slot.innerText.includes(tankNumber)){
        // slot.classList.add('found');
        slot.style.color = 'yellow';
        slot.style.border = '4px solid yellow'
        slot.style.fontWeight = 'bold';
      }
       if (!--iterations) {
          this.loading = false;
          // this.message = '';
        }
    }
    },
    clearFoundTanks(){
      const buttonsInner = document.getElementsByClassName('slot');
      let iterations = buttonsInner.length;
      for(let slot of buttonsInner) {
        // if(slot.classList.contains('found')){
        //   slot.classList.remove('found');
        if(slot.hasAttribute('style')){
          slot.removeAttribute('style');
          // slot.style.removeProperty('font-size');
          // slot.classList.remove('found');
        }
        if (!--iterations) {
            this.loading = false;
            // this.message = '';
          }
      }
    },
    addHandle() {
      // this.$store.dispatch('common/loadParcelList');
      this.dialog = false;
      // location.reload();
    },
    parcelSlot(slots, index){
      // let result= [];
      // if(slots){
      const result = slots.filter((el) => {
            if(el.slotId == index) {
              return el.name;
              // this.id =el.id;
            }
        });
      // }
      if(result.length){
        return `${result[0].name}${result[0].pin}`;
      }else{
        return '';
      }
    },
    parcelSlotId(slots, index){
      // if(slots){
      const result = slots.filter((el) => {
            if(el.slotId == index) {
              return el.slotId;
              // this.id =el.id;
            }
        });
      // }
      if(result.length){
        return result[0].slotId;
      }else{
        return index;
      }
    },
    parcelSlotBg(slots, index){
      // if(slots){
      const result = slots.filter((el) => {
            if(el.slotId == index) {
              return el.backgroundColor;
              // this.id =el.id;
            }
        });
      // }
      if(result.length){
        return result[0].backgroundColor;
      }else{
        return '';
      }
    },
    openDialog(event, parcel, slot) {
      // console.log(event.target.outerText);
      this.activeParcel = parcel;
      this.activeSlot = slot;
      if(event.target.outerText != ''){
        this.action = 'edit';
        this.parcel_list[parcel-1].slots.filter((el)=> {
          if(el.slotId == slot){
            axios.get(`${this.api_url}tank/get/${el.id}`, {
          headers: {
            Authorization: this.token,
          //   apitoken: context.rootState.apitoken,
          //   clientbrowser: Vue.clientbrowser,
          },
        })
        .then((result)=>{
          // Object.assign({}, this.tankData, result.data[0])
          this.formData = result.data[0];
          this.dialog = true;
        })
          }
        });
      }else {
        if(this.user.userRole == 1 || this.user.userRole == 2){
          this.dialog = true;
        }
      }

    },
    plotTanks(bg){
      let tanks = 0;
      let bgTanks = 0;
      let bgColor = bg;
      for(let parcel of this.parcel_list) {
        tanks += parcel.slots.length;
        if(bg != 'all'){
          for(let slot of parcel.slots){
            if(slot.backgroundColor == bgColor){
              bgTanks += 1;
            }
          }
        }
      }
      if(bg != 'all'){
        return bgTanks;
      } else {
        return tanks;
      }

    },
    plotSlots(){
      let slots = 0;
      for(let parcel of this.parcel_list) {
        slots += parcel.size;
      }
      return slots;
    },
    parcelTanks(slots, bg){
      let bgTanks = 0;
      let bgColor = bg;
      for(let slot of slots) {
        if(slot.backgroundColor == bgColor){
          bgTanks += 1;
        }
      }
      return bgTanks;
    },
  },

  computed: {
    ...mapState('common', [
      'parcel_list',
    ]),
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
<style  lang="scss">
    .home {
      .v-chip.v-size--default{
        height: 15px !important;
      }

    }
    .parcel {
      .v-chip.v-size--default{
        height: 15px !important;
      }
      .title{
          text-align: center;
          width: 100%;
          position: relative;
          font-size: 18px!important;
          padding: 20px;
          text-transform: uppercase;
          margin-top: 20px;
          border-top: 2px solid #1976d2;
          border-bottom: 2px solid #417bb5;
          .parcelSlots {
            position: absolute;
            font-size: 9px;
            top: 5px;
            left: 5px;
            font-weight: bold;
          }
          .parcelTanksChips{
            position: absolute;
            font-size: 9px;
            bottom: 1px;
            right: 5px;
            font-weight: bold;
            .parcelTanks{
              font-size: 9px !important;
            }
          }

      }

      .slots{
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        justify-content: center;
        margin: 0px;
        div{
          position: relative;
        .slotId{
                position: absolute;
                z-index: 100;
                left: 3px;
                top: 1px;
                font-size:9px;
                font-weight: bold;
          }
        }
        .slot {
          text-align:center;
          background-color:#ccc;
          border: 1px solid #fff;
          cursor: pointer;
          &:hover{
              background-color: #999;
          }
          .v-btn__content{
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    .found {
      background-color:crimson !important;
    }
    .v-application .ma-2 {
      width:95% !important;
      text-transform: none !important;
      margin: 1px !important;
      overflow: hidden;
      font-size:0.9rem;
    }
    // .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    //   background: none;
    // }
    .color-0{
      background-color:#cccccc !important;
    }
    .color-1{
      background-color:#016cc4  !important;
    }
    .color-2{
      background-color:#9e00dc !important;
    }
    .color-3{
      background-color:#b30202 !important;
    }
    .color-4{
      background-color:#019439 !important;
    }
    .color-5{
      background-color:#00b2ff !important;
    }
    .color-6{
      background-color:rgb(255, 145, 0) !important;
    }
    .color-7{
      background-color:rgb(9, 255, 0) !important;
    }
    .color-8{
      background-color:rgb(255, 0, 0) !important;
    }
    .color-9{
      background-color:rgb(4, 0, 255) !important;
    }
    .found{
      background-color: yellow !important;
    }
</style>