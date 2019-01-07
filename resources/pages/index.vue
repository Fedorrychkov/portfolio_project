<template>
  <section class="homepage">
    <welcome />
    <about />
    <skills />
  </section>
</template>
<script>
import Welcome from '@/components/welcome/Welcome';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';

export default {
  data() {
    return {

    }
  },
  components: {
    Welcome,
    About,
    Skills
  }
};
</script>
