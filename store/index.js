import Vuex from 'vuex';
import axios from '../plugins/axios';

const createStore = () =>
  new Vuex.Store({
    state: {
      beers: [],
      error: false,
      currentId: '',
    },
    mutations: {
      addBeers(state, { data }) {
        this.state.beers = data;
        this.state.error = false;
      },
      addId(state, id) {
        this.state.currentId = id;
      },
      emitError() {
        this.state.error = true;
      },
    },
    actions: {
      async fetchBeers({ commit }, postResponse) {
        if (postResponse) {
          if (postResponse.data.name) {
            commit('addBeers', await axios.get('/api/beers'));
          } else {
            commit('emitError');
          }
        } else {
          commit('addBeers', await axios.get('/api/beers'));
        }
      },
      async postBeers({ dispatch }, beer) {
        dispatch('fetchBeers', await axios.post('/api/beers', beer));
      },
    },
  });

export default createStore;
