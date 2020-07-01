<template>
  <div class="page fullpage">
    <div class="page__top">
      <my-header class="page__header" />
      <main class="page__container">
        <nuxt />
      </main>
    </div>
    <my-footer class="page__footer" />
    <!-- <likes-layout /> -->
  </div>
</template>

<script>
import MyHeader from '@/components/header/Header';
import MyFooter from '@/components/footer/Footer';
// import LikesLayout from '@/components/LikesLayout';

export default {
  data() {
    return {
      locale: 'ru'
    }
  },
  mounted() {
    var userLang = localStorage.getItem('portfolio.language') || navigator.language || navigator.userLanguage;
    this.locale = userLang.substring(0, 2);
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val;
    }
  },
  components: {
    MyHeader,
    MyFooter
    // LikesLayout
  }
}
</script>
<style lang="scss" scoped>
  .page {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // display: grid;
    // grid-template-rows: 100px auto 100px;
    // grid-template-columns: 100%;
    // grid-template-areas:
    //   "header"
    //   "content"
    //   "footer";

    &__header {
      // grid-area: header;
    }

    &__container {
      // grid-area: content;
    }

    &__footer {
      // grid-area: footer;
    }
  }
</style>
