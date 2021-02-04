export default {
  state: {
    discoverData: {},
    discoverDataMovies: [],
    discoverCategories: ['popular', 'top_rated', 'upcoming'],
  },
  mutations: {
    updateDiscoverData(state, data) {
      state.discoverData = data;
      state.discoverDataMovies = [...state.discoverDataMovies, ...data.results];
    },
    clearDiscoverData(state) {
      state.discoverData = {};
      state.discoverDataMovies = [];
    },
  },
  actions: {
    async fetchDiscoverData({ commit }, [category, page = 1]) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.VUE_APP_SECRET}&page=${page}`);
        const data = await response.json();
        commit('updateDiscoverData', data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
