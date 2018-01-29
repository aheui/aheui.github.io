import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'KOR',
  },
  getters: {
    currentLanguage: state => {
      return state.lang
    }
  },
  mutations: {
    ['SET_LANGUAGE'] ( state, { lang } ) {
      state.lang = lang
    }
  },
  actions: {
    setLanguage (context, { lang }) {
      context.commit('SET_LANGUAGE', { lang })
    }
  },
  strict: true,
})
