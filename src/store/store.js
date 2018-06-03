import Vue from 'vue'
import Vuex from 'vuex'
import anim from './anim'
import socket from './socket'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    anim,
    socket,
  }
});

export default store;
