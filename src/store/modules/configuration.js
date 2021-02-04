export default {
  state: {
    configurationData: {},
  },
  mutations: {
    updateConfigurationData(state, data) {
      state.configurationData = data;
    },
  },
  actions: {
    async getConfigurationData({ commit }) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${process.env.VUE_APP_SECRET}`);
        const data = await response.json();
        commit('updateConfigurationData', data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
