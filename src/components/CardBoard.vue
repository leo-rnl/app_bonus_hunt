<script>
import axios from 'axios';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'cardboard',
  props: {
    id:{
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    devise: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    }
  },
  computed:{
    ...mapState(['boards', 'currentBoard']),

    dateBoard(){
      return this.createdAt.slice(0, 10);
    }
  },
  methods:{
    ...mapActions(['fetchBoards', 'resetBoard']),
    
    async deleteBoard() {
      try {
        await axios.delete(`/api/boards/${this.id}`);
      } catch (e) {
        this.state.errors.push(e);
      }
      if(this.currentBoard === this.id){
        this.resetBoard();
      }
      this.fetchBoards();
    },
  }
}
</script>


<template>

      <li class="card-board">
        <h2>{{ name }}</h2>
        <span>{{ dateBoard }}</span>
        <button @click="deleteBoard()">X</button>
      </li>

</template>

<style lang="scss">

  .card-board{
    padding: 1em;
    border: 1px solid lightgray;
    cursor: pointer;
    margin-bottom: 1em;
    position: relative;

    h2{
      font-size: 1em;
    }

    button{
      position: absolute;
      top: 1em;
      right: 1em;
    }
  }

</style>