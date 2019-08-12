export default {
  actions: {
    async fetchGenresList({ commit }) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_SECRET}`);
        const data = await response.json();
        commit('updateGenresList', data.genres);
      } catch(e) {
        console.error(e);
      };
    },
    async fetchGenreData({ commit }, genreID) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_SECRET}&sort_by=popularity.desc&page=1&with_genres=${genreID}`);
        const data = await response.json();
        commit('updateGenreData', data);
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateGenresList(state, genres) {
      state.genresList = genres;
    },
    updateGenreData(state, data) {
      state.genreData = data;
    },
    clearGenreData(state) {
      state.genreData = {};
    }
  },
  state: {
    genresList: [],
    genreData: {}
  },
  getters: {
    genresList: state => state.genresList,
    genresListNames: state => state.genresList.map(obj => obj.name.replace(/ /g, '_').toLowerCase()),
    genreData: state => state.genreData,
    genreDataMovies: state => state.genreData.results
  }
}
