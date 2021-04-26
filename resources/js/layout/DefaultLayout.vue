<template>
  <header class="layout">
    <header-layout />
    <div class="menu-content">
      <side-menu />
      <main class="main-content">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
        <slot></slot>
      </main>
    </div>
  </header>
</template>
<script>
import HeaderVue from "./Header.vue";
import MenuVue from "./Menu.vue";
export default {
  components: {
    "header-layout": HeaderVue,
    "side-menu": MenuVue,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout {
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #e9ecef;
}
.menu-content {
  display: flex;
}
.main-content {
  flex: 1;
  /* background: #313131;
  box-shadow: 0 0 8px 4px #999; */
}
</style>
