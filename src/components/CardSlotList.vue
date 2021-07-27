<script>
import { mapState, mapActions } from 'vuex';
import CardSlot from '@/components/CardSlot.vue';

export default {
  name: 'cardslotlist',
  components: {
    CardSlot
  },
  computed:{
    ...mapState(['huntList', 'currentBoard', 'slotList'])
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
    <CardSlot
      v-for="item in huntList"
      :key="item.id"
      :id="item.id"
      :machineId="item.machine_id"
      :bet="item.bet"
      :earn="item.earn"
    />
  </div>
</template>

<style lang="scss">

</style>