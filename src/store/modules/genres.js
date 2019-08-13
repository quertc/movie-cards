export default {
  actions: {
    async fetchGenresList({ commit }) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_SECRET}`);
        const data = await response.json();
        commit('updateGenresList', data.genres);
        return data.genres;
      } catch(e) {
        console.error(e);
      };
    },
    async fetchGenreData({ commit }, [genreID, page = 1]) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_SECRET}&sort_by=popularity.desc&page=${page}&with_genres=${genreID}`);
        const data = await response.json();
        commit('updateGenreData', data);
        return data;
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
      state.genreDataMovies = state.genreDataMovies.concat(data.results);
    },
    clearGenreData(state) {
      state.genreData = {};
      state.genreDataMovies = [];
    }
  },
  state: {
    genresList: [],
    genreData: {},
    genreDataMovies: []
  },
  getters: {
    genresList: state => state.genresList,
    genresListNames: state => state.genresList.map(obj => obj.name.replace(/ /g, '_').toLowerCase()),
    genreData: state => state.genreData,
    genreDataMovies: state => state.genreDataMovies
  }
}
