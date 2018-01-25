<template>
  <div>
    <app-line> </app-line>
    <span> 오타를 찾았나요? 문서에 기여하고싶으신가요? </span>
    <div> 마지막 수정: 2016-01-31 </div>
  </div>
</template>

<script>
import line from './line'

export default {
  name: 'footer',
  components: {
    'app-line': line,
  }
}
</script>

<style scoped>
</style>
