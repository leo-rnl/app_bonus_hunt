<script>
import CardSlotList from '@/components/CardSlotList.vue'
import { mapState, mapActions } from 'vuex';
// import ManualCardSlot from './ManualCardSlot.vue';

export default {
  name: "boardshow",
  components: {
    CardSlotList,
    // ManualCardSlot,
  },
  computed: {
    ...mapState(['currentBoard', 'huntList']),
  },
  methods:{
    ...mapActions(['selectBoard', 'newSlotHuntList', 'fetchHuntList']),

    insertNewSlot(){
      this.newSlotHuntList()
      setTimeout(() => {
        this.fetchHuntList(this.currentBoard);
      }, 50);
    }
  },

}
</script>

<template>
  <section id="board-show">
    <div class="bordered-table">
      <div class="slot-name"> 
        <span>Nom du slot</span>
      </div>
      <div>
        <span>Montant du pari</span>
      </div>
      <div>
        <span>Gagné</span>
      </div>
      <div>
        <span>Multiplicateur</span>
      </div>
    </div>
    
    
    <div v-if="currentBoard != null">
      <CardSlotList />
      <!-- <ManualCardSlot /> -->
      <button @click="insertNewSlot">+</button>
    </div>
    <div v-else>
        <span>Select board</span>
    </div>
  </section>
</template>

<style lang="scss">

  #board-show{
    padding: 0 2em;
    & .bordered-table{
      border: 1px solid lightgray;
      width: 100%;
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1fr;
      padding: 1em;
      align-items: center;
      border-radius: 8px;
      & div:last-child{
        border: none;
      }
      & div{
        flex: 1;
        text-align: center;
        border-right: 1px solid lightgray;
      }
      & .slot-name{
        text-align: left;
        min-width: 50%;
      }
    }
  }

</style>