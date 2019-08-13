export default {
  actions: {
    async fetchDiscoverData({ commit }, [category, page = 1]) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.VUE_APP_SECRET}&page=${page}`);
        const data = await response.json();
        commit('updateDiscoverData', data);
        return data;
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateDiscoverData(state, data) {
      state.discoverData = data;
      state.discoverDataMovies = state.discoverDataMovies.concat(data.results);
    },
    clearDiscoverData(state) {
      state.discoverData = {};
      state.discoverDataMovies = [];
    }
  },
  state: {
    discoverData: {},
    discoverDataMovies: [],
    discoverCategories: ['popular', 'top_rated', 'upcoming']
  },
  getters: {
    discoverCategories: state => state.discoverCategories,
    discoverData: state => state.discoverData,
    discoverDataMovies: state => state.discoverDataMovies
  }
}
