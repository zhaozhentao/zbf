<template>
  <div class="home-container">
    <div style="padding-left: 16px; padding-top: 24px; display: block;">
      <h1 class="title">最新消息</h1>
      <router-link to="/messages" @click.native="start" class="button">历史消息</router-link>
      <router-link :to="`/photo`" class="button">抓拍</router-link>
    </div>

    <div class="empty" v-show="!hasMsg">
      <div class="empty-icon"></div>
      <div style="margin-left: -18px;">恭喜您，一切正常</div>
    </div>

    <div v-show="hasMsg">
      <Msg
        v-for="(item, index) in $store.state.socket.data"
        v-bind:content="item"
        :clock="clock"
        :key="index"/>
    </div>
  </div>
</template>

<script>
  import Msg from '../../components/layouts/Msg';

  let timer = -1;
  let self;

  export default {
    name: "Message",
    data() {
      return {
        clock: 0
      }
    },
    components: {
      Msg,
    },
    mounted() {
      self = this;
    },
    methods: {},
    watch: {
      '$store.state.socket.data': function (data) {
        if (timer !== -1) {
          clearInterval(timer);
        }

        if (data.length === 0) {
          return;
        }

        timer = setInterval(function () {
          self.$data.clock = self.$data.clock + 1;
        }, 1000);
      }
    },
    computed: {
      hasMsg: function () {
        return this.$store.state.socket.data.length !== 0
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 22px;
    display: inline-block;
    margin: 3px;
  }

  .button {
    float: right;
    margin-right: 8px;
    border: 1px solid darkgray;
    border-radius: 5px;
    padding: 4px 12px;
    text-decoration: none;
    font-size: 12px;
    color: #6A6A6A;
  }

  .empty {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -90px;
    margin-top: -90px;
    text-align: center;
  }

  .empty-icon {
    margin-left: 24px;
    margin-bottom: 24px;
    display: inline-block;
    vertical-align: middle;
    width: 180px;
    height: 180px;
    background-size: contain !important;
    background: url("../../assets/photo.png") no-repeat;
  }
</style>
