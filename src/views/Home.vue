<template>
  <main>
    <BoardPannel 
    />
    <BoardShow
    />
  </main>
</template>

<script>
// @ is an alias to /src
import BoardPannel from '@/components/BoardPannel.vue';
import BoardShow from '@/components/BoardShow.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    BoardPannel,
    BoardShow,
  },
    methods: {
    ...mapActions(['fetchBoards']),
  },

  Created(){
    this.fetchBoards()
  }
}
</script>

<style lang="scss">

  main{
    width: 100%;
    padding: 2em;
    max-height: 600px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    aside{

    }
  }

</style>