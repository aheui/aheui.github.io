<template>
  <div id="header">
    <nav>
      <a href="/">
        <img id="logo" src="../assets/logo.svg" alt="로고">
      </a>
      <ul>
        <li>
          <a href="/guide"> 배우기 </a>
        </li>
        <li>
          <a href="/guide"> 다른언어 </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'appHeader'
}
</script>

<style scoped>
#header {
  width: 100%;
  position: fixed;
  top: 0;
}
@media screen and (min-width:600px) {
  #logo {
    padding: 10px 60px;
    width: 32px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    background-color: rgba(255,255,255,0.4);
  }
  ul {
    padding: 10px 60px;
    list-style-type: none;
  }
  li {
    margin: 0 0.6em;
    float: left;
  }
}
@media screen and (max-width:599px) {
  nav {
    display: none;
  }
}
</style>
