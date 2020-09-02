import Vue from 'vue';
import Vuex from 'vuex';
import genres from './modules/genres';
import discover from './modules/discover';
import search from './modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    genres,
    discover,
    search,
  },
});
