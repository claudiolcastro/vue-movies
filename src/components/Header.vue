<template>
  <header class="header">
    <div class="menu-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/watch-later">Minha Lista</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
};
</script>

<style lang="scss" scoped>
 .header {
    background-color: #141c24;
    display: inline-block;
    color: $white;
    height: 60px;
    width: 100%;

    .menu-nav {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      a {
        font-weight: 300;
        padding: 0 10px;
        transition: .3s;
        &:hover { color: #ccc; }
      }
    }
  }
</style>
