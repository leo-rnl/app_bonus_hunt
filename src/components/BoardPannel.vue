<script>
import CardBoard from './CardBoard.vue'
import ModalBoard from './ModalBoard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'boardpannel',
  components: {
    CardBoard,
    ModalBoard,
  },
  computed: {
    ...mapState(['boardModal', 'boards'])
  },
  methods: {
    ...mapActions(['toggleBoardModal', 'fetchBoards', 'selectBoard', 'fetchHuntList']),
  },

  mounted(){
    this.fetchBoards()
  }

}
</script>

<template>
  <aside>
    <ul class="boards-list">
      <CardBoard
        v-for="item in boards"
        :id="item._id"
        :name="item.name"
        :devise="item.devise"
        :createdAt="item.createdAt"
        :key="item._id"
        @click="selectBoard(item._id), fetchHuntList(item._id)"
      />
    </ul>
    <button @click="toggleBoardModal">Add board</button>
    <ModalBoard v-show="boardModal"/>
  </aside>
</template>

<style lang="scss">

  aside{
    text-align: left;
    overflow-y: scroll;
    overflow-x: hidden;
    .boards-list{
      list-style: none;
      padding: 0;
      text-align: left;
    }
  }

</style>
