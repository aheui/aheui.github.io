<template>
  <div>
    <app-sidebar> </app-sidebar>
    <router-view> </router-view>
  </div>
</template>

<script>
import appSidebar from './appSidebar'

export default {
  name: 'guide',
  components: {
    'app-sidebar': appSidebar,
  }
}
</script>

<style scoped>
</style>
