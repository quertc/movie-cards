import Vue from 'vue'
import Vuex from 'vuex'
import HeaderMenu from './modules/HeaderMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    HeaderMenu
  }
})
