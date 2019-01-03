<template>
  <header class="c-header">
    <div class="container c-header__container">
      <div class="c-header__left">
        <Logo />
      </div>
      <div class="c-header__right">
        <ul class="c-header-nav">
          <li class="c-header-nav__item" v-for="item in nav" :key="item.link">
            <nuxt-link class="c-header-nav__link" :to="item.link" :v-scroll-to="item.link">{{ $t(item.title) }}</nuxt-link>
          </li>
        </ul>
        <language-picker />
      </div>
    </div>
  </header>
</template>
<script>
import Logo from '../logo/Logo';
import LanguagePicker from '../shared/ui/LanguagePicker';

export default {
  data() {
    return {
      nav: [
        {link: '#hello', title: 'links.hello'},
        {link: '#about', title: 'links.about'},
        {link: '#projects', title: 'links.projects'},
        {link: '#skills', title: 'links.skills'},
      ]
    }
  },
  components: {
    Logo,
    LanguagePicker
  }
};
</script>

