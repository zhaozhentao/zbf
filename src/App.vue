<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    watch: {
      '$route'(to, from) {
        this.$store.commit("saveToken", to.query.token);
      }
    }
  }
</script>

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import "~bootstrap-sass/assets/stylesheets/_bootstrap";
  @import "assets/css/global";
  @import "assets/css/anim";
</style>
