export default {
  actions: {
    async fetchGenres({ commit }) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_SECRET}&language=en-US`);
        const data = await response.json();
        commit('updateGenres', data.genres);
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateGenres(state, genres) {
      state.genresList = genres;
    }
  },
  state: {
    genresList: []
  },
  getters: {
    allGenres(state) {
      return state.genresList
    },
    allGenresName(state) {
      return state.genresList.map(obj => obj.name.replace(/ /g, '_').toLowerCase())
    }
  }
}
