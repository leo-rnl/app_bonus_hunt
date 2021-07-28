<script>
import { mapActions, mapState } from 'vuex';
import Multiselect from '@vueform/multiselect'

export default {
  name: 'manualcardslot',
  components:{
    Multiselect
  },
  data() {
    return{
      slotNameInput: false,
      slotBetInput: false,
      slotEarnInput: false,
      slotName: '',
      slotBet: '',
      slotEarn: '',
      postBody:{
        board_id: null,
        machine_id: null,
        bet: null,
        earn: null,
      },
      errors: [],
    }
  },
  computed: {
    ...mapState(['machinesList', 'currentBoard', 'machineSelectList', 'huntList']),

    multipicatorDisplay(){
        return (parseInt(this.postBody.earn) / parseInt(this.postBody.bet)).toFixed(0)
    },

    machineName(){
      const machine = this.machinesList.find((machine) => machine.id === this.postBody.machine_id)
      return machine.name
    }
  },
  methods:{
    ...mapActions(['updateHuntList']),

    toggleNameInput(){
      this.slotNameInput = !this.slotNameInput
    },
    toggleBetInput(){
      this.slotBetInput = !this.slotBetInput
    },
    toggleEarnInput(){
      this.slotEarnInput = !this.slotEarnInput
    },

    addToHuntList() {
      this.postBody.board_id = this.currentBoard
      console.log(this.postBody)
      this.huntList.push(this.postBody)
      console.log(this.huntList)
      console.log("updated")
    }
  },
  created(){
    console.log("manual card slot mounted")
  }
}
</script>

<template>
  <div class="card-slot">
      <div class="slot-name"> 
        <span v-if="postBody.machine_id != null" @click="postBody.machine_id = null">{{ machineName }}</span>
        <span v-else-if="!slotNameInput" @click="toggleNameInput">Ajoutez une slot</span>
        <Multiselect v-else
          v-model="this.postBody.machine_id"
          :required="true"
          :options="machineSelectList"
          :searchable="true"
          class="custom-select"
        />
      </div>
        <span v-if="postBody.bet != null" @click="postBody.bet = null">{{ postBody.bet }}</span>
        <span v-else-if="!slotBetInput" @click="toggleBetInput">  -  </span>
        <input type="number" v-else
          v-model="slotBet"
          class="multiselect"
          @keyup.enter="postBody.bet = slotBet"
        />
      <div>
        <span v-if="postBody.earn != null" @click="postBody.earn = null">{{ postBody.earn }}</span>
        <span v-else-if="!slotEarnInput" @click="toggleEarnInput">  -  </span>
        <input type="number" v-else
          v-model="slotEarn"
          class="multiselect"
          @keyup.enter="postBody.earn = slotEarn"
        />
      </div>
      <div>
        <span v-if="postBody.bet != null && postBody.earn != null">x{{multipicatorDisplay}}</span>
        <span v-else>-</span>
      </div>
      <div>
        <button @click="this.addToHuntList">Update huntlist</button>
      </div>
  </div>
</template>

<style lang="scss">
  @import '@vueform/multiselect/themes/default';

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
  }
</style>