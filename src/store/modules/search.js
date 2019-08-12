export default {
  actions: {
    async getSearchData({ commit }, query) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_SECRET}&query=${query}&page=1`);
        const data = await response.json();
        commit('updateSearchData', data);
      } catch(e) {
        console.error(e);
      };
    }
  },
  mutations: {
    updateSearchData(state, data) {
      state.searchData = data;
    },
    clearSearchData(state) {
      state.searchData = {
        total_results: 1
      };
    }
  },
  state: {
    searchData: {
      total_results: 1
    }
  },
  getters: {
    searchData: state => state.searchData,
    searchDataMovies: state => state.searchData.results
  }
}
