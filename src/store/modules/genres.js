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
    async fetchGenreMovies({ commit }, genreID) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_SECRET}&sort_by=popularity.desc&page=1&with_genres=${genreID}`);
        const data = await response.json();
        commit('updateGenreMovies', data.results);
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateGenresList(state, genres) {
      state.genresList = genres;
    },
    updateGenreMovies(state, movies) {
      state.genreMovies = movies;
    }
  },
  state: {
    genresList: [],
    genreMovies: []
  },
  getters: {
    allGenresList: state => state.genresList,
    allGenresName: state => state.genresList.map(obj => obj.name.replace(/ /g, '_').toLowerCase()),
    allGenreMovies: state => state.genreMovies
  }
}
