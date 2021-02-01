<template>
  <div>
      <p>{{id}}</p>
      <p class = "slot-name">{{name}}</p>
  </div>
</template>

<script>
export default {
  props: ['slots', 'index'],
  data() {
      return{
        name: '',
        id: '',
      }
  },
  mounted() {
      this.slots.filter((el) => {
          if(el.slotId == this.index) {
            this.name = el.name;
            this.id =el.id;
          }
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
