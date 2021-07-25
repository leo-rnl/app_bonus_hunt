<script>
export default {
  name: 'cardboard',
  props: {
    name: {
      type: String,
      required: true,
    },
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
    width: 100%;
    padding: 1em;
    border: 1px solid lightgray;
    cursor: pointer;
    margin-bottom: 1em;

    h2{
      font-size: 1.2em;
    }
  }

</style>