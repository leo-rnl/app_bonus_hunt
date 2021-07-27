<script>
// import { mapActions } from 'vuex';

export default {
  name: 'cardslot',
  props:{
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
    }
  },
  computed: {
    multipicatorDisplay(){
        return (parseInt(this.slotWin) / parseInt(this.slotBet)).toFixed(0)
    }
  },
  methods:{
    toggleNameInput(){
      this.slotNameInput = !this.slotNameInput
    },
    toggleBetInput(){
      this.slotBetInput = !this.slotBetInput
    },
    toggleWinInput(){
      this.slotWinInput = !this.slotWinInput
    },
  },
}
</script>

<template>
  <div class="card-slot">
    
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