import Vuex from 'vuex';
import axios from '../plugins/axios';

const createStore = () =>
  new Vuex.Store({
    state: {
      beers: [
        {
          name: 'Goldstar',
          img:
            'https://wine-searcher1.freetls.fastly.net/images/labels/23/57/goldstar-dark-lager-beer-israel-10822357.jpg',
          id: 1,
        },
      ],
    },
    mutations: {
      addBeers(state, { data }) {
        console.log(data);
      },
    },
    actions: {
      async fetchBeers({ commit }) {
        commit('addBeers', await axios.get('/api/fetchBeers'));
      },
    },
  });

export default createStore;
