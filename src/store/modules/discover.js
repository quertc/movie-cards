export default {
  actions: {
    async fetchDiscoverMovies({ commit }, category) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.VUE_APP_SECRET}&page=1`);
        const data = await response.json();
        commit('updateDiscoverMovies', data.results);
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateDiscoverMovies(state, movies) {
      state.discoverMovies = movies;
    }
  },
  state: {
    discoverMovies: [],
    discoverCategories: ['popular', 'top_rated', 'upcoming']
  },
  getters: {
    allDiscoverMovies: state => state.discoverMovies,
    allDiscoverCategories: state => state.discoverCategories
  }
}
