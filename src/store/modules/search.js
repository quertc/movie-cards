export default {
  actions: {
    async getSearchData({ commit }, [query, page = 1]) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_SECRET}&query=${query}&page=${page}`);
        const data = await response.json();
        commit('updateSearchData', data);
        return data;
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateSearchData(state, data) {
      state.searchData = data;
      state.searchDataMovies = state.searchDataMovies.concat(data.results);
    },
    clearSearchData(state) {
      state.searchData = {
        total_results: 1
      };
      state.searchDataMovies = [];
      state.isActive = false;
    },
    setTrue(state) {
      state.isActive = true;
    }
  },
  state: {
    searchData: {
      total_results: 1
    },
    searchDataMovies: [],
    isActive: false
  },
  getters: {
    searchData: state => state.searchData,
    searchDataMovies: state => state.searchDataMovies,
    isActive: state => state.isActive
  }
}
