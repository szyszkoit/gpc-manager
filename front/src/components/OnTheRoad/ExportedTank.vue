<template>
  <div>
      <p>{{id}}</p>
      <p class = "slot-name">{{name}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  props: ['parcel', 'index'],
  data() {
      return{
        name: '',
        id: '',
      }
  },
  created() {

  },
  computed:{
    ...mapState('authentication', [
      'user',
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
