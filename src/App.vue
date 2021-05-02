<template>
  <div id="app">

    <Header/>

    <main>
      <router-view/>
    </main>
  
  </div>
</template>

<script>

import Header from "./layout/Header";

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body{
    padding: 0;
    margin: 0;
  }
</style>
