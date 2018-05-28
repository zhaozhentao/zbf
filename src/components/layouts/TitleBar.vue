<template>
  <div class="nav-bar">
    <div class="nav-back">
      <span class="icon-bg nav-img"></span>
    </div>

    <span class="title">
      {{title}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "TitleBar",
    props: ['title']
  }
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    position: fixed;
    height: 36px;
    background: white;
    border-bottom: 1px solid #ececec;
    text-align: center;
  }

  .title {
    display: inline-block;
    margin: 10px auto;
  }

  .nav-back {
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 9px;
    display: inline-block;
  }

  .nav-img {
    padding: 9px;
    width: 18px;
    height: 18px;
    background: url("../../assets/back_gray_title.png") no-repeat;
  }
</style>
