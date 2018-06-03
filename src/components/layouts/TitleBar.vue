<template>
  <div class="nav-bar">
    <router-link :to="back" class="nav-back">
      <span class="icon-bg nav-img"></span>
    </router-link>

    <span class="title">
      {{title}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "TitleBar",
    props: ['title', 'back']
  }
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    position: fixed;
    height: 44px;
    background: white;
    border-bottom: 1px solid #ececec;
    text-align: center;
  }

  .title {
    display: inline-block;
    margin: 11px auto;
    font-size: 16px;
  }

  .nav-back {
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 12px;
    display: inline-block;
  }

  .nav-img {
    padding: 9px;
    width: 20px;
    height: 20px;
    background: url("../../assets/back_gray_title.png") no-repeat;
  }
</style>
