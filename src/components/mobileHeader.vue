<template>
  <nav>
    <a href="/">
      <img id="logo" src="../assets/logo.svg" alt="로고">
    </a>
  </nav>
</template>

<script>
export default {
  name: 'mobileHeader'
}
</script>

<style scoped>
@media screen and (min-width:600px) {
  nav {
    display: none;
  }
}
@media screen and (max-width:599px) {
  #logo {
    display: none;
  }
  nav {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: white;
  }
}
</style>
