export default {
  actions: {
    async fetchDiscoverMovies({ commit }, category) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.VUE_APP_SECRET}&language=en-US&page=1`);
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
    discoverMovies: []
  },
  getters: {
    allDiscoverMovies: state => state.discoverMovies
  }
}
