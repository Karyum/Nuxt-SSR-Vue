<template>
  <div v-if="name">
      <h1>{{ name }}</h1>
      <img :src="img" alt="">
  </div>
</template>

<script>
import axios from '../../plugins/axios';

export default {
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`/api/beer/${params.id}`);
      return {
        name: data.name,
        img: data.img,
      };
    } catch (err) {
      return error({ message: 'An error occurd' });
    }
  },
};
</script>

<style scoped>

img {
  width: 100px;
  height: 100px;
}

</style>
