<script>
import CardBoard from './CardBoard.vue'
import { mapState } from 'vuex'


export default {
  name: 'boardpannel',
  components: {
    CardBoard,
  },
  computed: {
    ...mapState(['boards'])
  },
}
</script>

<template>
  <aside>
    <ul class="boards-list">
      <CardBoard 
        v-for="item in boards"
        :name="item.name"
        :key="item.id"
      />
    </ul>
    <button>Add board</button>
  </aside>
</template>

<style lang="scss">

  aside{
    text-align: left;
    .boards-list{
      list-style: none;
      padding: 0;
      text-align: left;
    }
  }

</style>
