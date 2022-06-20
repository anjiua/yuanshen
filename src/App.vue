<template>
  <div id="app" style="min-width: 1300px;">
    <TopNav />
    <router-view></router-view>
    <!-- <BottomLnstructions /> -->
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
// import BottomLnstructions from "./components/BottomLnstructions.vue";
export default {
  name: "App",
  components: {
    TopNav,
    // BottomLnstructions,
  },
};
</script>
<style>
#app{
  position: relative;
  margin: 0;
  padding: 0;
}
</style>
