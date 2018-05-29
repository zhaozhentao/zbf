const state = {
  anim: 'turn-on'
};

const mutations = {
  anim(state, data) {
    console.log("anim" + data)
    state.anim = data
  }
};

const actions = {
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}
