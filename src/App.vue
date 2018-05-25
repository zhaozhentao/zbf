<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
  import Header from '@/components/layouts/Header';

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import "~bootstrap-sass/assets/stylesheets/_bootstrap";

</style>
