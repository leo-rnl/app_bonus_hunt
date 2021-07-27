<script>
// import { mapActions } from 'vuex';

export default {
  name: 'manualcardslot',

  data() {
    return{
      slotNameInput: false,
      slotBetInput: false,
      slotWinInput: false,
      slotName: '',
      slotBet: '',
      slotWin: '',
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
      <div class="slot-name"> 
        <span v-if="slotName === ''" v-show="!slotNameInput" @click='toggleNameInput'>Ajouter une slot</span>
        <span v-else @click="toggleNameInput" v-show="!slotNameInput">{{ slotName }}</span>
        <input type="text" v-show="slotNameInput" v-model="slotName" @change="toggleNameInput">
      </div>
      <div>
        <span v-if="slotBet === ''" v-show="!slotBetInput" @click='toggleBetInput'>-</span>
        <span v-else @click="toggleBetInput" v-show="!slotBetInput">{{ slotBet }}</span>
        <input type="number" min="0" v-show="slotBetInput" v-model="slotBet" @change="toggleBetInput">
      </div>
      <div>
        <span v-if="slotWin === ''" v-show="!slotWinInput" @click='toggleWinInput'>-</span>
        <span v-else @click="toggleWinInput" v-show="!slotWinInput">{{ slotWin }}</span>
        <input type="number" min="0" v-show="slotWinInput" v-model="slotWin" @change="toggleWinInput">
      </div>
      <div>
        <span v-if="slotWin != '' && slotBet != ''">x{{ multipicatorDisplay }}</span>
        <span v-else>-</span>
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