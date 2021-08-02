<script>
import { mapState, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'ModalBoard',
  data() {
    return {
      postBody: {
        name: '',
        devise: '',
        start_bet: '',
        bet: '',
      },
      errors: [],
    }
  },
  computed: {
    ...mapState(['boards', 'boardModal'])

  },
  methods: {

    ...mapActions(['fetchBoards', 'toggleBoardModal']),

    async postBoard() {
      try {
        await axios.post(`/api/boards`, this.postBody)
        this.fetchBoards()
        this.toggleBoardModal()
      } catch (e) {
        this.errors.push(e)
      }
    }
  },
}
</script>

<template>
  <div id="modal-board">
    <input type="text" placeholder="Entrez un nom" v-model="postBody.name">
    <input type="text" placeholder="Sélectionnez une devise" v-model="postBody.devise">
    <input type="number" placeholder="Entrez votre mise de départ" v-model="postBody.start_bet" min="1">
    <input type="number" placeholder="Entrez votre mise par slot" v-model="postBody.bet" min="1">
    <input type="submit" @click="postBoard()">
  </div>
</template>

<style lang="scss">

  #modal-board{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 2em;
    background-color: lightgray;
    & input{
      display: inline-block;
      width: 100%;
      padding: 0.8em;
      margin-bottom: 0.5em;
    }
  }

</style>

