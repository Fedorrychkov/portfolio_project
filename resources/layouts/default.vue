<template>
  <div class="page fullpage">
    <div class="page__top">
      <my-header class="page__header" />
      <main class="page__container">
        <nuxt />
      </main>
    </div>
    <my-footer class="page__footer" />
  </div>
</template>

<script>
import MyHeader from '~/components/header/Header.vue';
import MyFooter from '~/components/footer/Footer.vue';

export default {
  components: {
    MyHeader,
    MyFooter
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
