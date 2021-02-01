<template>
  <div class="history-div">
    <v-card-title>
      <v-layout row wrap>

        <v-flex md6>
            <v-menu
                    ref="show_start_date"
                    :close-on-content-click="false"
                    v-model="show_start_date"
                    :nudge-right="40"
                    :return-value.sync="start_date"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
            >
                      <template v-slot:activator="{ on }" >

                <v-text-field
                        slot="activator"
                        v-model="start_date"
                        label="Od"
                        prepend-icon="event"
                        readonly
                        required
                        v-on="on"

                ></v-text-field>
                </template>
                <v-date-picker
                        v-model="start_date"
                        @input="filterStartDate"
                ></v-date-picker>


            </v-menu>
        </v-flex>

        <v-flex md6>
            <v-menu
                    ref="show_end_date"
                    :close-on-content-click="false"
                    v-model="show_end_date"
                    :nudge-right="40"
                    :return-value.sync="end_date"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
            >
            <template v-slot:activator="{ on }" >
                <v-text-field
                        v-on="on"
                        slot="activator"
                        v-model="end_date"
                        required
                        label="Do"
                        prepend-icon="event"
                        readonly
                ></v-text-field>
            </template>
                <v-date-picker
                        v-model="end_date"
                        @input="filterEndDate"
                ></v-date-picker>

            </v-menu>
        </v-flex>
        <v-flex xs12>
          <v-btn
            style="left: 10px;top: 10px; width: 95%"
            v-bind="attrs"
            v-on="on"
            @click="findBetween"
          >
            <v-icon left>
              mdi-magnify
            </v-icon>
            Wyszukaj w przedziale
          </v-btn>
        </v-flex>
        <v-flex xs12 style="margin-top: 20px;">
            <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Szukaj"
          single-line
          hide-details
        ></v-text-field>
        </v-flex>
      </v-layout>
    </v-card-title>
    <!-- <v-data-table
    dense
    :search="search"
    :headers="headers"
    :items="delivered_tanks_list"
    :items-per-page="10"
    class="elevation-1"
    :mobile-breakpoint="0"
    @click:row="openDialog"
  >
    <template v-slot:item.exportDate="{ item }">
      {{new Date(item.exportDate).toLocaleString()}}
    </template>
  </v-data-table> -->

  <v-data-table
  :headers = "headers"
  :items="delivered_tanks_list"
  :search="search"
  dense
  class="elevation-1"
  :mobile-breakpoint="0"
  sort-by="sortableDeliverDate"
  @click:row="openDialog"
  :items-per-page="10"
  >
    <template v-slot:item.sortableDeliverDate="{ item }">
      {{item.deliverDate}}
    </template>
  </v-data-table>
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
              @click="dialog = false;"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Zbiornik</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <TankForm :formData="formData" :action="action" parcelId="0" slotId="0"/>
          </v-card-text>
        </v-card>
      </v-dialog>
  </div>
</template>
<script>
import TankForm from '@/components/Home/TankForm.vue';
import {mapState} from 'vuex';
import axios from 'axios';
export default {
  name: 'History',
  components: {
    // Parcel,
    TankForm,
  },
  data() {
    return{
      action: 'history',
      formData:{},
      dialog: false,
      search:'',
      start_date: null,
      show_start_date: '',
      end_date: null,
      show_end_date: '',
      headers: [
          {
            text: 'Nazwa',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Miasto', value: 'city' },
          { text: 'Ulica', value: 'street' },
          { text: 'Montaż', value: 'installation' },
          { text: 'Data dostarczenia', value: 'sortableDeliverDate' },
        ],
    }
  },
  created() {
    if (!this.$store.getters['authentication/isLoggedIn']) {
      this.$router.push('/login');
    }
    this.$store.dispatch('common/loadDeliveredTanksList', {from: null, to: null});
  },
  methods:{
    findBetween() {
      this.$store.dispatch('common/loadDeliveredTanksList', {from: new Date(this.start_date), to: new Date(this.end_date + 'T00:00:00Z')});
    },
    filterStartDate(val) {
      // Close the date picker.
      this.$refs.show_start_date.save(val);
      //Convert the value to a timestamp before saving it.
      this.start_date = new Date(val);
      // console.log(timestamp);
      // this.filters = this.$MultiFilters.updateFilters(this.filters, {start_date: timestamp});
    },
    /**
     * Handler when select a date on "To" date picker.
     */
    filterEndDate(val) {
      // Close the date picker.
      this.$refs.show_end_date.save(val);
      //Convert the value to a timestamp before saving it.
      this.end_date = new Date(val);
      // console.log(timestamp);
      // this.filters = this.$MultiFilters.updateFilters(this.filters, {end_date: timestamp});
    },
    filterDate(){
      this.$store.dispatch('common/loadDeliveredTanksList', {from: this.start_date, to: this.end_date});
    },
    openDialog(e){
      axios.get(`${this.api_url}tank/get/${e.id}`, {
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
      // this.formData = e;
      // this.dialog = true;
    }
  },
  computed: {
    ...mapState('common', [
      'delivered_tanks_list',
    ]),
    ...mapState('authentication', [
      'user',
      'token',
    ]),
    ...mapState([
      'api_url'
    ]),
  },
  filters: {
    dateToHuman: function(t) {
      var d = new Date(t * 1000);
      var day = d.getDate(); // the day of the month, 19
      var year = d.getFullYear(); // the year, 2018
      var month = d.getMonth() + 1; // the month number, zero-indexed, 2 for March
      var fullDate = month + " " + day + ", " + year;

      return fullDate;
    }
  },
}
</script>