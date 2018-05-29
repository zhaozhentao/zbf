<template>
  <div class="home-container">
    <div style="padding-left: 16px; padding-top: 24px">
      <h1 class="title">最新消息</h1>
      <router-link to="/messages" @click.native="start" class="button">历史消息</router-link>
      <router-link :to="`/photo`" class="button">抓拍</router-link>
    </div>
    <div class="empty">
      <div class="empty-icon"></div>
      <div style="margin-left: -18px;">恭喜您，一切正常</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Message",
    methods: {
      start() {
        console.log("start")
        this.$store.commit("anim", "turn-on");
      }
    },
  }
</script>

<style scoped>
  .title {
    float: left;
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
    background: url("../assets/photo.png") no-repeat;
  }
</style>
