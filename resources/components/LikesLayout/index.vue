<template>
  <div class="likes">
    <like />
  </div>
</template>
<script>
import Like from './Like'
export default {
  components: {
    Like
  }
}
</script>
<style lang="scss" scoped>
.likes {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
</style>
