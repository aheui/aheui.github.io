<template>
  <div class="flex">
    <app-sidebar> </app-sidebar>
    <app-content> </app-content>
  </div>
</template>

<script>
import appSidebar from './appSidebar'
import appContent from './appContent'

export default {
  name: 'guide',
  components: {
    'app-sidebar': appSidebar,
    'app-content': appContent,
  }
}
</script>

<style scoped>
</style>
