<template>
  <div class="tab">
    <a class="item" @click.stop="$emit('tabChange', 0)">
      <span class="item-img" :class="[ !isProfile ? 'message_active' : 'message_inactive']"></span>
      <span :class="{inactive : isProfile}">我的消息</span>
    </a>

    <a class="item" @click.stop="$emit('tabChange', 1)">
      <span class="item-img"
            :class="[ isProfile  ? 'profile-active' : 'profile-inactive']"></span>
      <span :class="{inactive : !isProfile}">个人中心</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Tab",
    props: ['isProfile'],
  }
</script>

<style scoped>
  .tab {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 44px;
    font-size: 0;
    background: #fff;
    z-index: 999;
    border-top: 1px solid #ececec;
  }

  .item {
    display: inline-block;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 10px;
    text-decoration: none;

    color: #2F70DA;
    font-family: PingFangSC-Regular;
  }

  .item-img {
    display: block;
    margin: 0 auto;
    vertical-align: middle;
    width: 26px;
    height: 26px;
    background-size: contain !important;
    -webkit-background-size: contain !important;
  }

  .inactive {
    color: rgba(10, 10, 10, 0.54);
    letter-spacing: 0;
  }

  .message_active {
    background: url("../../assets/tab_message_active.png");
  }

  .message_inactive {
    background: url("../../assets/tab_message_inactive.png");
  }

  .profile-active {
    background: url("../../assets/tab_person_active.png");
  }

  .profile-inactive {
    background: url("../../assets/tab_person_inactive.png");
  }
</style>
