export default {
  state: {
    searchData: {},
    searchDataMovies: [],
  },
  mutations: {
    updateSearchData(state, data) {
      state.searchData = data;
      state.searchDataMovies = state.searchDataMovies.concat(data.results);
    },
    clearSearchData(state) {
      state.searchData = {};
      state.searchDataMovies = [];
    },
  },
  actions: {
    async getSearchData({ commit }, [query, page = 1]) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_SECRET}&query=${query}&page=${page}`);
        const data = await response.json();
        commit('updateSearchData', data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
