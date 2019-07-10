<template>
  <div id="app">
    <heather></heather>
    <router-view />
    <father></father>
  </div>
</template>
<script>
import heather from "./components/comment/heather";
import father from "./components/comment/footer";
export default {
  components: {
    heather,
    father
  }
};
</script>
<style lang="less">
</style>
