<template>
  <div class="exported-tanks-div">
    <div class="exported-tank" v-for="tank in exported_tanks_list" :key="tank.id">
      <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-title>
      {{tank.name}}
    </v-card-title>

    <v-card-subtitle>
      {{new Date(tank.exportDate).toLocaleString()}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="black"
        text
        @click="tankExport(tank.id)"
        v-if="user.userRole != 3"
      >
        Anuluj
      </v-btn>
      <v-btn
        color="green"
        @click="tankDeliver(tank.id)"
        v-if="user.userRole != 3"
      >
        Dostarcz
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = tank.id"

      >
        <v-icon>{{ show==tank.id ? '' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <v-btn
        icon
        v-if="show == tank.id"
        @click="show = false"
      >
        <v-icon>{{ show==tank.id ? 'mdi-close' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show == tank.id">
        <v-divider></v-divider>

        <v-card-text>
          <p>Miasto: {{tank.city}}</p>
          <p>Ulica: {{tank.street}}</p>
          <p>Producent: {{tank.manufacturer}}</p>
          <div class="form-control">
          <label for="installation">Montaż
            <v-radio-group v-model="installation" :disabled="user.userRole == 3">
              <v-radio
                label="GPC"
                value="GPC"
              >GPC</v-radio>
              <v-radio
                label="Inny"
                value="Inny"
              >Inny</v-radio>
            </v-radio-group>
          </label>
          </div>
          <v-textarea
            v-model="transportComment"
            solo
            label="Uwagi do transportu"
            :disabled="user.userRole == 3"
          ></v-textarea>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'OnTheRoad',
  components: {
  },
  data() {
    return{
      show: false,
      installation: 'GPC',
      transportComment: '',
    }
  },
  methods: {
    tankExport(id){
      // this.tankData.productionYear = this.tankData.productionYear.getFullYear();
        this.$store.dispatch('common/exportTank', {
          isExported: 0,
          city: '',
          street: '',
          id: id
          });
        this.$store.dispatch('common/loadExportedTanksList');
        this.$emit('tankExport');
    },
    tankDeliver(id){
      // this.tankData.productionYear = this.tankData.productionYear.getFullYear();
        this.$store.dispatch('common/deliverTank', {id, deliverDate: new Date(), installation: this.installation, transportComment: this.transportComment});
        this.$store.dispatch('common/loadExportedTanksList');
        this.$emit('tankExport');
    }
  },
  created() {
    if (!this.$store.getters['authentication/isLoggedIn']) {
      this.$router.push('/login');
    }
    this.$store.dispatch('common/loadExportedTanksList');
  },
  computed: {
    ...mapState('common', [
      'exported_tanks_list',
    ]),
    ...mapState('authentication', [
      'user',
    ]),
  }
}
</script>
<style lang="scss" scoped>
  .exported-tanks-div{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    .exported-tank{
      margin: 15px;
    }
  }
  @media only screen
    and (orientation: portrait) {
      .exported-tanks-div{
        grid-template-columns: 1fr;
    }
  }
</style>