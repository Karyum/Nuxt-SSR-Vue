<template>
  <section class="container">
    <label class="main-label">Add a beer to the list:
      <fieldset>
        <label>Beer name:
          <input v-model="name" required @keyup.enter="sendBeers" type="text" />
        </label>
        <label>Beer Image:
          <input v-model="img" @keyup.enter="sendBeers" type="text" />
        </label>
      </fieldset>
    </label>
    <br>
    <div v-for="beer in beers" :key="beer.id">
      <h2>{{beer.name}}</h2>
      <img :src="beer.img" alt="">
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      img: '',
    };
  },
  methods: {
    sendBeers() {
      this.$store.dispatch('postBeers', { name: this.name, img: this.img });
      this.name = '';
      this.img = '';
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

.main-label {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: .5rem;
}

fieldset {
  display: flex;
  padding-right: 4rem;
  padding-left: 4rem;
  border: 0;
}

input {
  padding: .1rem;
  border-radius: .3rem;
  outline: 0;
  margin-left: 1rem;
}

</style>
