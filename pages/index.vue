<template>
  <section class="container">
    <add-beer @add-beer="sendBeers"></add-beer>
    <div class="beer-list">
      <div class="beer-item" v-for="beer in beers" :key="beer.id">
        <nuxt-link
        :to="{ path: `/beer/${beer._id}`, params: { name: 'beer', id: beer._id }}">
          <h2>{{beer.name}}</h2>
          <img :src="beer.img" alt="">
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import addBeer from '../components/addBeer.vue';

export default {
  components: {
    'add-beer': addBeer,
  },
  data() {
    return {
      name: '',
      img: '',
    };
  },
  methods: {
    sendBeers(name, img) {
      this.$store.dispatch('postBeers', { name, img });
    },
  },
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
  flex-direction: column;
}

img {
  width: 100px;
  height: 100px;
}

.beer-list {
  display: flex;
  flex-direction: row;
}

.beer-item {
  margin: 2rem;
}

</style>
