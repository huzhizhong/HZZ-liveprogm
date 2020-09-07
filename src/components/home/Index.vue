<template>
  <div class="index">
    <top-bar></top-bar>
    <router-view />
  </div>
</template>

<script>
import TopBar from "./TopTabbar";
export default {
  data() {
    return {};
  },
  components: {
    TopBar,
  },
};
</script>

<style scoped>
.index {
  height: 100%;
  background-color: #000;
}
</style>