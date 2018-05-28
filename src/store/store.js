import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

const store = new vuex.Store({
  state: {
    states: 'turn-on'
  },
  mutations: {
    setTransition(state, states) {
      state.states = states
    }
  }
});

export default store;
