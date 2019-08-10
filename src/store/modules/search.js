export default {
  actions: {
    async getSearchMovies({ commit }, query) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_SECRET}&query=${query}&page=1`);
        const data = await response.json();
        commit('updateSearchMovies', data.results);
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateSearchMovies(state, movies) {
      state.searchMovies = movies;
    }
  },
  state: {
    searchMovies: []
  },
  getters: {
    allSearchMovies: state => state.searchMovies
  }
}
