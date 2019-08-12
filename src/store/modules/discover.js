export default {
  actions: {
    async fetchDiscoverData({ commit }, category) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.VUE_APP_SECRET}&page=1`);
        const data = await response.json();
        commit('updateDiscoverData', data);
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateDiscoverData(state, data) {
      state.discoverData = data;
    },
    clearDiscoverData(state) {
      state.discoverData = {};
    }
  },
  state: {
    discoverData: {},
    discoverCategories: ['popular', 'top_rated', 'upcoming']
  },
  getters: {
    discoverCategories: state => state.discoverCategories,
    discoverData: state => state.discoverData,
    discoverDataMovies: state => state.discoverData.results
  }
}
