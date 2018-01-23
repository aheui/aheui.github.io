<template>
  <div id="app">
    <app-header></app-header>
    <app-mobile-header></app-mobile-header>
    <v-app id="inspire">
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import appHeader from './components/header'
import mobileHeader from './components/mobileHeader'

export default {
  name: 'App',
  components: {
    'app-header': appHeader,
    'app-mobile-header': mobileHeader
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.flex {
  display: flex;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
  color:#2c3e50;
}

.rounded {
  border: solid 2px blue;
  border-radius: 40px;
  font-size: 1.05em;
  font-weight: 600;
  padding: 0.75em 2em;
}

</style>
