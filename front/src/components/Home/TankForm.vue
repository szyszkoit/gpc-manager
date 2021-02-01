<template>
<div>
<v-tabs
      v-model="tab"
      centered
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Zbornik
        <!-- <v-icon>mdi-phone</v-icon> -->
      </v-tab>

      <v-tab href="#tab-2" v-if="user.userRole != 3 && action == 'edit'">
        Wywóz
        <!-- <v-icon>mdi-heart</v-icon> -->
      </v-tab>
      <v-tab href="#tab-3" v-if="user.userRole == 1 && action == 'edit'">
        Przenieś
        <!-- <v-icon>mdi-heart</v-icon> -->
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        value="tab-1"
      >
        <v-card flat>
          <v-card-text>
            <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="addEditTank">
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="Numer zbiornika"
      >
        <v-text-field
          v-model="tankData.name"
          :error-messages="errors"
          label="Numer zbiornika"
          :disabled="isDisabled()"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="Producent"
      >
        <v-select
          v-model="tankData.manufacturerId"
          :items="tankManufacturerList"
          item-text="name"
          item-value="id"
          :error-messages="errors"
          label="Producent"
          data-vv-name="manufacturer"
          :disabled="isDisabled()"
          required
        ></v-select>
      </validation-provider>
       <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="Pojemność"
      >
        <v-select
          v-model="tankData.capacityId"
          item-text="name"
          item-value="id"
          :items="tankCapacityList"
          :error-messages="errors"
          label="Pojemność"
          data-vv-name="capacity"
          :disabled="isDisabled()"
          required
        ></v-select>
      </validation-provider>
       <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="Właściciel"
      >
        <v-select
          v-model="tankData.ownerId"
          item-text="name"
          item-value="id"
          :items="tankOwnerList"
          :error-messages="errors"
          label="Właściciel"
          data-vv-name="owner"
          :disabled="isDisabled()"
          required
        ></v-select>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="Zawór"
      >
        <v-combobox
          v-model="tankData.valveId"
          item-text="name"
          item-value="id"
          :items="tankValveList"
          :error-messages="errors"
          label="Zawór"
          data-vv-name="valve"
          :disabled="isDisabled()"
          required
        ></v-combobox>
      </validation-provider>
      <div class="form-row">
        <div class="form-control">
          <label for="productionYear">Rok produkcji
            <datepicker :disabled="isDisabled()" format="yyyy" :minimumView="'year'" :maximumView="'year'" v-model="tankData.productionYear"></datepicker>
          </label>
        </div>
        <div class="form-control">
          <label for="pin">PIN
            <v-radio-group v-model="tankData.pin">
              <v-radio
                label="P"
                value="P"
                :disabled="isDisabled()"
              >P</v-radio>
              <v-radio
                label="N"
                value="N"
                :disabled="isDisabled()"
              >N</v-radio>
            </v-radio-group>
          </label>
        </div>
        <div class="form-control backgroundColor-form" v-if="user.userRole == 1">
          <label for="backgroundColor">Kolor podświetlenia
            <v-radio-group
            v-model="tankData.backgroundColor"
            :disabled="isDisabled()"
            >
            <v-row>
              <v-col
                cols="3"
              >
          <label class="backgroundColor-form-label" for="color-1">
<div style="width: 20px;height: 20px" class="color-1"></div>
            <v-radio
              name="color-1"
              :value="1"
              hide-details
            ></v-radio>

          </label>
          <label class="backgroundColor-form-label" for="color-2">
            <div style="width: 20px;height: 20px" class="color-2"></div>
            <v-radio
              :value="2"
              hide-details
            ></v-radio>
          </label>
          <!-- </v-row>
          <v-row> -->
          <label class="backgroundColor-form-label" for="color-3">
            <div style="width: 20px;height: 20px" class="color-3"></div>
            <v-radio
              :value="3"
              hide-details
            ></v-radio>
          </label>
              </v-col>
              <v-col
          cols="3"
          >
          <label class="backgroundColor-form-label" for="color-4">
            <div style="width: 20px;height: 20px" class="color-4"></div>
            <v-radio
              :value="4"
              hide-details
            ></v-radio>
          </label>
          <!-- </v-row>
          <v-row> -->

          <label class="backgroundColor-form-label" for="color-5">
            <div style="width: 20px;height: 20px" class="color-5"></div>
            <v-radio
              :value="5"
              hide-details
            ></v-radio>
          </label>
          <label class="backgroundColor-form-label" for="color-0">
            <div style="width: 20px;height: 20px" class="color-0"></div>
            <v-radio
              :value="0"
              hide-details
            ></v-radio>
          </label>
          </v-col>
          <v-col
          cols="3"
          >

        <!-- </v-row>
        <v-row> -->
          <label class="backgroundColor-form-label" for="color-7">
          <div style="width: 20px;height: 20px" class="color-7"></div>
          <v-radio
            :value="7"
            hide-details
          ></v-radio>
          </label>
          <label class="backgroundColor-form-label" for="color-8">
          <div style="width: 20px;height: 20px" class="color-8"></div>
          <v-radio
            :value="8"
            hide-details
          ></v-radio>
          </label>
          <label class="backgroundColor-form-label" for="color-9">
          <div style="width: 20px;height: 20px" class="color-9"></div>
          <v-radio
            :value="9"
            hide-details
          ></v-radio>

          </label>
          </v-col>
        </v-row>
        </v-radio-group>
          </label>
        </div>
        <label for="invoice"  v-if="user.userRole == 1">
        <v-checkbox
          v-model="tankData.invoice"
          v-bind:false-value="0"
          v-bind:true-value="1"
          label="Zafakturowano"
          hide-details
          :disabled="isDisabled()"
        ></v-checkbox>
        <!-- Zafakturowano -->
        </label>
      </div>
      <label v-if="action == 'history'" for="">Uwagi</label>
      <v-textarea
        v-model="tankData.comment"
        solo
        label="Uwagi"
        :disabled="isDisabled()"
      ></v-textarea>
      <label v-if="action == 'history'" for="">Uwagi do wykonanej pracy</label>
      <v-textarea
        v-model="tankData.workComment"
        solo
        label="Uwagi do wykonanej pracy"
        :disabled="isDisabled()"
      ></v-textarea>
      <label v-if="action == 'history'" for="">Uwagi do transportu</label>
      <v-textarea
        v-model="tankData.transportComment"
        solo
        label="Uwagi do transportu"
        :disabled="isDisabled()"
      ></v-textarea>
      <v-btn

        class="mr-4"
        type="submit"
        v-if="!isDisabled()"
        :disabled="invalid"
      >
        Zapisz
      </v-btn>
    </form>
  </validation-observer>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
        value="tab-2"
        v-if="user.userRole != 3 && action == 'edit'"
      >
        <v-card flat>
          <v-card-text>
            <validation-observer
    ref="observer2"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="tankExport">
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="Miasto"
      >
        <v-text-field
          v-model="exportData.city"
          :error-messages="errors"
          label="Miasto"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name = "Ulica"
      >
        <v-text-field
          v-model="exportData.street"
          :error-messages="errors"
          label="Ulica"
          required
        ></v-text-field>
      </validation-provider>
      <v-btn
        class="mr-4"
        type="submit"
        v-if="user.userRole != 3 && action == 'edit'"
        :disabled="invalid"
      >
        Wywóz
      </v-btn>
    </form>
      </validation-observer>

          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
        value="tab-3"
        v-if="user.userRole != 3 && action == 'edit'"
      >
        <v-card flat>
          <v-card-text>
            <validation-observer
    ref="observer3"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="moveTank">
      <v-row>
        <v-col
          cols="12"
          md="4"
          >
          <v-select
            v-model="moveTankSlot"
            :items="parcel_free_slots[0].slots"
            item-text="id"
            item-value="id"
            :error-messages="errors"
            name="Parcela 1"
            label="Parcela 1"
            data-vv-name="parcel1"
            @change="moveParcelSelect($event, 1)"
            :disabled="isDisabled()"
            required
          ></v-select>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
          <v-select
            v-model="moveTankSlot"
            :items="parcel_free_slots[1].slots"
            item-text="id"
            item-value="id"
            :error-messages="errors"
            name="Parcela 2"
            label="Parcela 2"
            data-vv-name="parcel2"
            @change="moveParcelSelect($event, 2)"
            :disabled="isDisabled()"
            required
          ></v-select>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
          <v-select
            v-model="moveTankSlot"
            :items="parcel_free_slots[2].slots"
            item-text="id"
            item-value="id"
            :error-messages="errors"
            name="Parcela 3"
            label="Parcela 3"
            data-vv-name="parcel3"
            @change="moveParcelSelect($event, 3)"
            :disabled="isDisabled()"
            required
          ></v-select>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
          <v-select
            v-model="moveTankSlot"
            :items="parcel_free_slots[3].slots"
            item-text="id"
            item-value="id"
            :error-messages="errors"
            name="Parcela 4"
            label="Parcela 4"
            data-vv-name="parcel4"
            @change="moveParcelSelect($event, 4)"
            :disabled="isDisabled()"
            required
          ></v-select>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
          <v-select
            v-model="moveTankSlot"
            :items="parcel_free_slots[4].slots"
            item-text="id"
            item-value="id"
            :error-messages="errors"
            name="Łąka"
            label="Łąka"
            data-vv-name="parcel5"
            @change="moveParcelSelect($event, 5)"
            :disabled="isDisabled()"
            required
          ></v-select>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
          <v-select
            v-model="moveTankSlot"
            :items="parcel_free_slots[5].slots"
            item-text="id"
            item-value="id"
            :error-messages="errors"
            name="Hala"
            label="Hala"
            data-vv-name="parcel6"
            @change="moveParcelSelect($event, 6)"
            :disabled="isDisabled()"
            required
          ></v-select>
        </v-col>
        <v-col
        cols="12"
        md="4"
        >
          <v-select
            v-model="moveTankSlot"
            :items="parcel_free_slots[6].slots"
            item-text="id"
            item-value="id"
            :error-messages="errors"
            name="Złom"
            label="Złom"
            data-vv-name="parcel7"
            @change="moveParcelSelect($event, 7)"
            :disabled="isDisabled()"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-btn
        class="mr-4"
        type="submit"
        v-if="user.userRole != 3 && action == 'edit'"
        :disabled="invalid"
      >
        Przenieś
      </v-btn>
    </form>
      </validation-observer>

          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { required, min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import Datepicker from 'vuejs-datepicker'
// import axios from 'axios';

extend('required', {
    ...required,
    message: 'Pole {_field_} nie może być puste',
  })

  extend('min', {
    ...min,
    message: 'Minimalna długość znaków to {length}',
  })
// import History from '../../../../../model/History';
// import Api from '../../../../../model/Api';
// import store from '../../../../../store';

export default {
  name: 'TankForm',
  props: ['formData', 'action', 'parcelId', 'slotId'],
  components: {
    ValidationProvider,
    ValidationObserver,
    Datepicker,
  },
  data() {
    return {
    //   user: this.$session.get('user_info'),
    tab: null,
      tankData: {
        name: '',
        manufacturerId: '',
        capacityId: '',
        ownerId: '',
        valveId: '',
        productionYear:new Date(),
        pin: 'P',
        comment: '',
        workComment: '',
        backgroundColor: '0',
        invoice: '0',
      },
      exportData: {
        city: '',
        street: '',
      },
      moveTankParcel: undefined,
      moveTankSlot:undefined,
      freeSlots: '',
      // tankManufacturerList:[],
    };
  },

  created() {
    // const self = this;
    this.$store.dispatch('tank/getManufacturerList');
    this.$store.dispatch('tank/getCapacityList');
    this.$store.dispatch('tank/getOwnerList');
    this.$store.dispatch('tank/getValveList');

  },
  mounted() {
    if(this.action === 'edit' || this.action === 'history'){
      this.tankData = this.formData;
      this.tankData.productionYear = new Date(this.tankData.productionYear);
      // this.tankData.productionYear =this.tankData.productionYear.getFullYear();
    }
    // this.moveTankParcel = this.parcel_list[0].id;
    // this.$set(this, 'freeSlots', this.parcel_free_slots[this.moveTankParcel-1].slots);
    // this.parcel_free_slots = this.$store.getters['common/getFreeParcelSlots'];
  },
  methods: {
    addEditTank() {
    //   const self = this;
      this.tankData.parcelId = this.parcelId;
      this.tankData.slotId = this.slotId;
      this.tankData.productionYear = this.tankData.productionYear.getFullYear();
      if(this.tankData.manufacturerId.id){
        this.tankData.manufacturerId = this.tankData.manufacturerId.id;
      }
      if(this.tankData.capacityId.id){
        this.tankData.capacityId = this.tankData.capacityId.id;
      }
      if(this.tankData.ownerId.id){
        this.tankData.ownerId = this.tankData.ownerId.id;
      }
      if(this.tankData.valveId.id){
        this.tankData.valveId = this.tankData.valveId.id;
      }
      if(this.user.userRole == 2){
        this.tankData.backgroundColor = '6';
      }
      if(this.action === 'edit') {
        this.$store.dispatch('common/editTank', this.tankData);
        this.$emit('addTank');
      }else if(this.action === 'add'){
        this.$store.dispatch('common/addTank', this.tankData);
        this.$emit('addTank');
      }
      // location.reload();
        // store.dispatch('adminPanel/addUser', data);
    },
    tankExport(){
      this.tankData.parcelId = this.parcelId;
      this.tankData.slotId = this.slotId;
      // this.tankData.productionYear = this.tankData.productionYear.getFullYear();
        this.$store.dispatch('common/exportTank', {
          parcelId: this.parcelId,
          slotId: this.slotId,
          isExported: 1,
          city: this.exportData.city,
          street: this.exportData.street,
          exportDate: new Date(),
          id: this.tankData.id,
          });
          this.$emit('addTank');
        // this.$emit('addTank');
        // location.reload();
    },
    moveParcelSelect(slotId, parcelId) {
      // this.freeSlots = this.parcel_free_slots[this.moveTankParcel-1].slots;
      // this.$set(this, 'freeSlots', this.parcel_free_slots[this.moveTankParcel-1].slots);
      this.moveTankParcel = parcelId;
      // this.setFreeParcelSlots({parcelList: this.parcel_list, id: this.moveTankParcel});
      // this.$forceUpdate();
    },
    moveTank(){
      this.$store.dispatch('common/moveTank',
      {
        currentSlot:
        {
          parcelId: this.parcelId,
          slotId: this.slotId,
        },
        moveTo: {
          parcelId: this.moveTankParcel,
          slotId: this.moveTankSlot,
        }
      });
      this.$emit('addTank');
    },
    isDisabled(){
      if(this.action == 'add'){
        // console.log(this.user.userRole != 3 ? true : false);
        return this.user.userRole == 3 ? true : false;
      } else if(this.action == 'edit'){
        return this.user.userRole != 1 ? true : false;
      } else if(this.action == 'history'){
        return true;
      }
    }
  },
  computed: {
    ...mapActions('common', ['setFreeParcelSlots']),
    ...mapState('common', [
      'parcel_list',
      'parcel_free_slots',
    ]),
    ...mapState('tank', [
      'tankManufacturerList',
      'tankCapacityList',
      'tankOwnerList',
      'tankValveList',
    ]),
    ...mapState('authentication', [
      'user',
      'token',
    ]),
    ...mapState([
      'api_url'
    ]),
    invoice_checkbox: {
      get() {
        return (this.tankData.invoice === '1');
      },
      set(value) {
        this.tankData.invoice = value ? 1 : 0;
      },
    },
  },
};
</script>

<style lang="scss">
.theme--light.v-input input{
  color: rgba(0, 0, 0, 0.87) !important;
}
.theme--light {
    color: rgba(0, 0, 0, 0.9) !important;
}
.theme--light.v-card > .v-card__text {
  color: rgba(0, 0, 0, 0.9) !important;
}
.theme--light.v-radio--is-disabled .v-icon{
  color: rgba(0, 0, 0, 0.9) !important;
}
.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon {
  color: rgba(0, 0, 0, 0.9) !important;
}
.v-dialog__container {
    display: unset;
}
  .v-modal {
    padding: 20px;
  }
  .v-toolbar {
    flex: none;
  }
  // .form-row {
  //   display: flex;
  //   justify-content: space-between;
  // }
  .vdp-datepicker {
    input{
      cursor: pointer;
      padding: 15px 10px 15px 0px;
    }
  }
  .form-control {
    font-size:14px !important;
  }
  .v-input--radio-group--column .v-input--radio-group__input{
    flex-direction: row !important;
  }
  .v-radio {
      margin: 10px 10px 10px 0 !important;
  }
  .form-row{
    margin: 40px 0;
  }
  .backgroundColor-form-label{
    display: flex;
    align-items: center;
  }
  .v-input--selection-controls.v-input {
    margin: 6px 10px 10px 0px !important;
  }
  .v-application .mr-4{
    float: right;
    margin-right: 0 !important
  }
</style>
