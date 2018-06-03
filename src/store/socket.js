let _ = require('lodash');

const state = {
  token: null,
  webSocket: null,
  data: []
};

function deleteMsg(msg) {
  _.remove(state.data, function (n) {
    return n.id === msg.id;
  });
}

const mutations = {
  saveToken(state, token) {
    if (state.token == null) {
      state.token = token;
      state.webSocket = new WebSocket("wss://zbcloud.yidianting.com.cn/websocket?token=" + state.token);
      state.webSocket.onopen = function () {
      };

      state.webSocket.onclose = function () {
      };

      state.webSocket.onmessage = function (message) {
        const msg = JSON.parse(message.data);
        switch (msg.msg_type) {
          case "logout":
            return;
          case "delete_message":
            deleteMsg(msg);
            return;
          case "alert":
            return;
        }
        state.data.push(msg);
      };
    }
  }
};

const actions = {};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}
