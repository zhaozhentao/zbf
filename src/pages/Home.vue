<template>
  <div id="main">
    <Tab/>
  </div>
</template>

<script>
  import Header from '@/components/layouts/Header';
  import Tab from '@/components/layouts/Tab';

  export default {
    name: "Home",
    components: {
      Header,
      Tab
    }
  }
</script>

<style>
  #main {
    width: 100%;
    height: 100%;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  #app {
    height: 100%;
    width: 100%;
  }
</style>
