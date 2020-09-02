export default {
  state: {
    genresList: [],
    genreData: {},
    genreDataMovies: [],
  },
  mutations: {
    updateGenresList(state, genres) {
      state.genresList = genres;
    },
    updateGenreData(state, data) {
      state.genreData = data;
      state.genreDataMovies = state.genreDataMovies.concat(data.results);
    },
    clearGenreDataMovies(state) {
      state.genreDataMovies = [];
    },
  },
  actions: {
    async fetchGenresList({ commit }) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_SECRET}`);
        const data = await response.json();
        commit('updateGenresList', data.genres);
      } catch (e) {
        console.error(e);
      }
    },
    async fetchGenreData({ commit }, [genreId, page = 1]) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_SECRET}&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`);
        const data = await response.json();
        commit('updateGenreData', data);
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {
    genresListNames: state => state.genresList.map(genre => genre.name.replace(/ /g, '_').toLowerCase()),
  },
};
