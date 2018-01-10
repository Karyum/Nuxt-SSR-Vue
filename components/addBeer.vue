<template>
  <div>
    <label class="main-label">Add a beer to the list:
      <fieldset>
        <label>Beer name:
          <input v-model="name" required @keyup.enter="emitNewBeer" type="text" />
        </label>
        <label>Beer Image:
          <input v-model="img" @keyup.enter="emitNewBeer" type="text" />
        </label>
      </fieldset>
    </label>
  </div>
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
    emitNewBeer() {
      this.$emit('add-beer', this.name, this.img);
      this.name = '';
      this.img = '';
    },
  },
};
</script>

<style scoped>

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
