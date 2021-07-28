<script>
import { mapState } from 'vuex';

export default {
  name: 'cardslot',
  props:{
    id: {
      type: Number,
      default: null,
    },
    machineId: {
      type: Number,
      default: null,
    },
    bet: {
      type: Number,
      default: null,
    },
    earn: {
      type: Number,
      default: null,
    },
  },
  data(){
    return{
      slotName: null,
    }
  },
  computed:{
    ...mapState(['slotList', 'machinesList', 'currentBoard']),

    machineName(){
      const machine = this.machinesList.find((machine) => machine.id === this.machineId)
      return machine.name
    }
  },

}
</script>

<template>
  <div class="card-slot" v-if="currentBoard != null">
    <div class="slot-name"> 
        <span>{{ machineName }}</span>
      </div>
      <div>
        <span v-if="bet === null">-</span>
        <span v-else>{{ bet }}</span>
      </div>
      <div>
        <span v-if="earn === null">-</span>
        <span>{{ earn }}</span>
      </div>
      <div>
        <span>-</span>
      </div>
  </div>
</template>

<style lang="scss">
  
  .card-slot{
    border-bottom: 1px solid lightgray;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    padding: 1em;
    & .slot-name{
      text-align: left;
      min-width: 50%;
    }
    & input{
      width: 80%;
    }
  }

</style>