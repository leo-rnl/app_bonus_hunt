<script>
import { mapState, mapActions } from 'vuex';
import Multiselect from '@vueform/multiselect'
import axios from 'axios';

export default {
  name: 'cardslot',
  components: {
    Multiselect
  },
  props:{
    id: {
      type: String,
      default: null,
    },
    machineId: {
      type: String,
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
      slotNameInput: false,
      slotBetInput: false,
      slotEarnInput: false,
      slotName: null,
      slotBet: null,
      slotEarn: null,
      updateBody: {
        slot_id: null,
        bet: null,
        earn: null
      }
    }
  },
  computed:{
    ...mapState(['slotList', 'machinesList', 'currentBoard', 'machineSelectList']),

    machineName(){
      const machine = this.machinesList.find((machine) => machine._id === this.updateBody.slot_id)
      return machine.name
    },

    multiplicator() {
      if(this.updateBody.bet != null && this.updateBody.earn != null){
        return (this.updateBody.earn / this.updateBody.bet).toFixed(0)
      } else {
        return '-'
      }
    }
  },
  methods: {
    ...mapActions(['fetchHuntList']),

    toggleNameInput(){
      this.slotNameInput = !this.slotNameInput
    },
    toggleBetInput(){
      this.slotBetInput = !this.slotBetInput
    },
    toggleEarnInput(){
      this.slotEarnInput = !this.slotEarnInput
    },
  
    async updateHuntlistDatabase(field){
      if (field === 'slot'){
        try {
          await axios.put(`/api/huntlist/${this.id}`, {
            slot_id: this.updateBody.slot_id
          });
        } catch (e) {
          this.errors.push(e);
        }
      } else if (field === 'bet'){
        try {
          await axios.put(`/api/huntlist/${this.id}`, {
            bet: this.updateBody.bet
          });
        } catch (e) {
          this.errors.push(e);
        }
      } else if (field === 'earn'){
        try {
          await axios.put(`/api/huntlist/${this.id}`, {
            earn: this.updateBody.earn
          });
        } catch (e) {
          this.errors.push(e);
        }
      }
    },

    async deleteSlot(){
        try {
          await axios.delete(`/api/huntlist/${this.id}`);
        } catch (e) {
          this.errors.push(e);
        }
        this.fetchHuntList(this.currentBoard)
    },

    sendName(){
      setTimeout(() => {
        this.updateHuntlistDatabase('slot')
      }, 500);
    }
  },
  beforeMount(){
      this.updateBody.slot_id = this.machineId;
      this.updateBody.bet = this.bet;
      this.slotBet = this.bet;
      this.updateBody.earn = this.earn;
    }

}
</script>

<template>
  <div class="card-slot" v-if="currentBoard != null">
    <div class="slot-name">
        <span v-if="slotNameInput === false" @click="toggleNameInput">{{ this.updateBody.slot_id === null ? 'Cliquez pour modifier' : machineName }}</span>
        <Multiselect v-else
          v-model="this.updateBody.slot_id"
          :options="machineSelectList"
          :searchable="true"
          class="custom-select"
          @change="toggleNameInput(), sendName()"
        />
      </div>
      <div>
        <span v-if="this.slotBetInput === false" @click="toggleBetInput">{{ this.updateBody.bet === null ? '-' : this.updateBody.bet }}</span>
        <input type="number" v-else
          v-model="this.slotBet"
          class="multiselect"
          @keyup.enter="this.updateBody.bet = this.slotBet, toggleBetInput(), updateHuntlistDatabase('bet')"
        />
      </div>
      <div>
        <span v-if="this.slotEarnInput === false" @click="toggleEarnInput">{{ this.updateBody.earn === null ? '-' : this.updateBody.earn }}</span>
        <input type="number" v-else
          v-model="this.slotEarn"
          class="multiselect"
          @keyup.enter="this.updateBody.earn = this.slotEarn, toggleEarnInput(), updateHuntlistDatabase('earn')"
        />
      </div>
      <div>
        <span v-if="multiplicator === '-'">-</span>
        <span v-else>x{{ multiplicator }}</span>
        <button @click="deleteSlot()">Delete</button>
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
    & input{
      width: 80%;
    }
  }

</style>