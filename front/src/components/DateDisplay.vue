<template>
  <span v-if="date">
    {{date.getDate()}}/{{date.getMonth() + 1}}/{{date.getFullYear()}}
  </span>
</template>

<script>
  export default {
    props: ['date'],
    mounted() {
        console.log(this.date);
    }
  }
</script>

<style lang="scss" scoped>
</style>