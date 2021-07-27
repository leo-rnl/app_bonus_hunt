<script>
import CardSlot from '@/components/CardSlot.vue'
import { mapState, mapActions } from 'vuex';
import ManualCardSlot from './ManualCardSlot.vue'

export default {
  name: "boardshow",
  components: {
    CardSlot,
    ManualCardSlot,
  },
  data() {
    return{
      slotList: null,
    }
  },
  computed: {
    ...mapState(['currentBoard', 'huntList']),
  },
  methods:{
    ...mapActions(['selectBoard'])
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
    <span v-if="currentBoard === null">Select board</span>
    <span v-else>currentBoard = {{ currentBoard }}</span>
    <CardSlot />
    <span>{{huntList}}</span>
    <ManualCardSlot />
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