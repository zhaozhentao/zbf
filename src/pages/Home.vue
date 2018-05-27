<template>
  <div id="main">
    <Messages v-show="!isProfile"/>
    <Profile v-show="isProfile"/>

    <Tab :isProfile="isProfile" v-on:tabChange="selectedIndex = $event"/>
  </div>
</template>

<script>
  import Header from '@/components/layouts/Header';
  import Messages from '@/pages/Messages';
  import Profile from '@/pages/Profile';
  import Tab from '@/components/layouts/Tab';

  export default {
    name: "Home",
    data() {
      return {
        selectedIndex: 0
      }
    },
    components: {
      Header,
      Messages,
      Profile,
      Tab,
    },
    computed: {
      isProfile: function () {
        return this.selectedIndex === 1;
      }
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

  .home-container {
    width: 100%;
    top: 0px;
    bottom: 54px;
    left: 0;
    right: 0;
    position: absolute;
    overflow: auto;
  }
</style>
