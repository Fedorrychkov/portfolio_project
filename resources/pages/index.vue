<template>
  <section class="homepage">
    <welcome />
    <about />
  </section>
</template>
<script>
import Welcome from '@/components/welcome/Welcome';
import About from '@/components/about/About';

export default {
  data() {
    return {

    }
  },
  components: {
    Welcome,
    About
  }
};
</script>
