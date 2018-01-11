<template>
  <div>
    <h1> Mate {{ error.message }}</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',
};
</script>

<style scoped>

</style>
