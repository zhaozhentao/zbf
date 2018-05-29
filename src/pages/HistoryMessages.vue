<template>
  <div>
    <TitleBar title="历史消息"/>
    <div @click="back">haha</div>
  </div>
</template>

<script>
  import TitleBar from '@/components/layouts/TitleBar'

  export default {
    name: "HistoryMessages",
    components: {
      TitleBar,
    },
    methods: {
      back() {
        this.$store.commit("anim", 'turn-off')
        this.$router.back();
      }
    }
  }
</script>

<style scoped>

</style>
