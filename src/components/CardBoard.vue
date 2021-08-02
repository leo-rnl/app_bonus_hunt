<script>
import { mapState } from 'vuex';

export default {
  name: 'cardboard',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed:{
    ...mapState(['boards'])
  }
}
</script>


<template>

      <li class="card-board">
        <h2>{{ name }}</h2>
      </li>

</template>

<style lang="scss">

  .card-board{
    padding: 1em;
    border: 1px solid lightgray;
    cursor: pointer;
    margin-bottom: 1em;

    h2{
      font-size: 1em;
    }
  }

</style>