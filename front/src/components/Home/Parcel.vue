<template>
  <div class="parcel" :id = "parcel.id">
    <div class="title">
        {{parcel.name}}
    </div>
    <div class="slots">
        <div class="slot" :id="parcel.id+'_'+index" v-for="index in parcel.size" :key="index">
            <v-btn
                color="default"
                class="ma-2"
                dark
                @click="openDialog($event, parcel.id, index)"
            >
              <parcelSlot v-if="parcel.slots" :index="index" :slots="parcel.slots" />
            </v-btn>
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
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Zbiornik</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <TankForm :formData="formData" :action="action" :parcelId="activeParcel" :slotId="activeSlot" @addTank="addHandle()"/>
          </v-card-text>
        </v-card>
      </v-dialog>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { mapState } from 'vuex';
import TankForm from './TankForm.vue';
import parcelSlot from './parcelSlot';
import axios from 'axios';
export default {
  name: 'Parcel',
  data(){
      return {
        dialog: false,
        activeParcel: '',
        activeSlot: '',
        action: 'add',
        formData: '',
      }
  },
  components: {
    TankForm,
    parcelSlot,
  },
  props: ['parcel'],
  mounted() {
    // this.$store.dispatch('common/loadSingleParcel');
  },
  methods: {
    openDialog(event, parcel, slot) {
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
        this.dialog = true;
      }

    },
    addHandle(){
      this.$store.dispatch('common/loadParcelList');
      this.dialog = false;
      this.activeParcel= '',
      this.activeSlot= '',
      this.$emit('addTank');
      // this.$router.push('/history');
      // this.$router.push('/login');
    }
  },
  created() {
    // this.$store.dispatch('common/loadParcelList');
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
    .parcel {
        .title{
            text-align: center;
            width: 100%;
        }
        .slots{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            margin: 10px;
            .slot {
                text-align:center;
                background-color:#ccc;
                border: 1px solid #fff;
                cursor: pointer;
                &:hover{
                    background-color: #999;
                }
            }
        }
    }
</style>
