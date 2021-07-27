<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'cardslotlist',
  computed:{
    ...mapState(['huntList', 'currentBoard'])
  },
  method:{
    ...mapActions(['fetchHuntList'])
  },

  created(){
    console.log("Card slot list created")
    this.fetchHuntList
  },

  mounted(){
    console.log("Card slot list mounted")
  }
}
</script>

<template>
  <div class="huntlist" v-if="currentBoard != null">
    <span>{{ huntList }}</span>
  </div>
</template>

<style lang="scss">

</style>