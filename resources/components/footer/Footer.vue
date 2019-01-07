<template>
  <footer class="c-footer">
    <div class="container c-footer__container">
      <p class="c-footer__copyright">
        &copy; 2015 &mdash; {{currentDate.getFullYear()}}&nbsp;{{ $t('copyright') }}
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date
    }
  }
};
</script>
