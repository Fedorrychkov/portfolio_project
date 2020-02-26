<template>
  <footer class="c-footer">
    <div class="container c-footer__container">
      <ul class="navigation">
        <li v-for="(item, i) in nav" :key="i">
          <nuxt-link :to="item.link" class="c-footer__copyright link">{{item.title}}</nuxt-link>
        </li>
      </ul>
      <p class="c-footer__copyright">
        &copy; 2015 &mdash; {{currentDate.getFullYear()}}&nbsp;{{ $t('copyright') }}
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    nav: [
      { link: '/salary-calculator', title: 'Зарплатный калькулятор' }
    ],
    currentDate: new Date
  })
}
</script>
