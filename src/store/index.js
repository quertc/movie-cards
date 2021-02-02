import Vue from 'vue';
import Vuex from 'vuex';
import discover from './modules/discover';
import genres from './modules/genres';
import search from './modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    discover,
    genres,
    search,
  },
});
