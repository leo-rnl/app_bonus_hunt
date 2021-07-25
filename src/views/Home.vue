<template>
  <main>
    <boardpannel />
  </main>
</template>

<script>
// @ is an alias to /src
import boardpannel from '@/components/BoardPannel.vue'

export default {
  name: 'Home',
  components: {
    boardpannel,
  }
}
</script>

<style lang="scss">

  main{
    width: 100%;
    padding: 2em;

    aside{
      max-width: 20%;
    }
  }

</style>