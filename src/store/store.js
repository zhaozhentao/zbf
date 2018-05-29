import Vue from 'vue'
import Vuex from 'vuex'
import anim from './anim'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    anim,
  }
});

export default store;
