<template>
  <section class="container">
    <div v-for="beer in beers" :key="beer.id">
      <h2>{{beer.name}}</h2>
      <img :src="beer.img" alt="">
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue';

export default {
  computed: {
    beers() {
      return this.$store.state.beers;
    },
  },
  created() {
    this.$store.dispatch('fetchBeers');
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

img {
  width: 100px;
  height: 100px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
