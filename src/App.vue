<template>
  <NavbarView />
  <main class="main">
    <router-view/>
  </main>
</template>

<script>
import NavbarView from './components/NavbarView.vue'

export default {
  components: { NavbarView },
  created () {
            document.title = "R&M Vue Project";
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
