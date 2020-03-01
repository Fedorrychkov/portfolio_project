<template>
  <header :class="[{'c-header': true}, hClasses]">
    <div class="container c-header__container">
      <div class="c-header__left">
        <Logo />
      </div>
      <div class="c-header__right">
        <ul class="c-header-nav">
          <li class="c-header-nav__item" v-for="item in nav" :key="item.link">
            <div @click="pickItem(item.link)">
              <nuxt-link class="c-header-nav__link" :to="item.link" v-scroll-to="item.selector">{{ $t(item.title) }}</nuxt-link>  
            </div>
          </li>
        </ul>
        <language-picker />
      </div>
      <div class="c-header-burger">
        <div :class="{'c-header-burger__burger': true, 'active': openBurger}" @click="toggleBurger()">
          <span class="item"></span>
        </div>
        <ul :class="{'c-header-burger__list': true, 'active': openBurger}">
          <li class="c-header-burger__item" v-for="item in nav" :key="item.link" @click="toggleBurger()">
            <nuxt-link class="c-header-burger__link" :to="item.link" v-scroll-to="item.selector">{{ $t(item.title) }}</nuxt-link>
          </li>
          <li class="c-header-burger__item" @click="toggleBurger()">
            <language-picker />
          </li>
        </ul>
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
        {link: '/#hello', title: 'links.hello', selector: '#hello'},
        {link: '/#about', title: 'links.about', selector: '#about'},
        // {link: '#projects', title: 'links.projects'},
        {link: '/#skills', title: 'links.skills', selector: '#skills'},
      ],
      header: undefined,
      sections: undefined,
      navHeight: undefined,
      hClasses: [],
      openBurger: false
    }
  },
  components: {
    Logo,
    LanguagePicker
  },
  mounted() {
    this.sections = document.querySelectorAll('.vue-blockpage');
    this.header = document.querySelector('header');
    this.navHeight = this.header.offsetHeight;

    document.addEventListener('scroll', this.checkHeaderOffset);
    this.checkHeaderOffset();
    this.setHeightListener();

    this.$router.history.current.hash && this.$scrollTo(this.$router.history.current.hash);

    setTimeout(() => {
      this.$router.history.current.hash && this.pickItem(this.$router.history.current.hash)
    }, 150)
  },
  destroyed () {
    document.removeEventListener('scroll', this.checkHeaderOffset);
  },
  methods: {
    checkHeaderOffset () {
      const rect = document.querySelector('#hello') && document.querySelector('#hello').getBoundingClientRect() || {};
      const homepage = document.querySelector('.homepage') && document.querySelector('.homepage').getBoundingClientRect() || false;

      if ((rect.top < -200 && homepage || rect.top < 0) && window.outerWidth > 1024 || rect.top < -20 && window.outerWidth < 1024) {
        this.hClasses = ['offset'];
      } else {
        this.hClasses = [];
      }

      this.openBurger = false;
    },
    pickItem (link) {
      setTimeout(() => {
        this.removeActiveSections();
        this.setActiveLink(link.split('#')[1] || '');
      }, 150);
    },
    removeActiveSections () {
      this.sections.forEach((node) => {
        node.classList.remove('active');
      });
      this.header.querySelectorAll('a').forEach((node) => {
        node.classList.remove('nuxt-link-exact-active');
      });
    },
    setActiveLink (item) {
      this.header.querySelectorAll('a').forEach((node) => {
        const href = node.getAttribute('href');

        if (href === `/#${item}`) {
          node.classList.add('nuxt-link-exact-active');
        }
      });
    },
    setHeightListener () {
      document.addEventListener('scroll', () => {
        const cur_pos = window.scrollY;
        
        this.sections.forEach((node) => {
          const top = node.offsetTop - this.navHeight;
          const bottom = top + node.offsetHeight;
          
          if (cur_pos >= top && cur_pos <= bottom) {
            this.removeActiveSections();
            node.classList.add('active');
            this.setActiveLink(node.getAttribute('id'))
            this.header.querySelector(`a[href="/#${node.getAttribute('id')}"]`).classList.add('nuxt-link-exact-active');
          }
        });
      });
    },
    toggleBurger () {
      this.openBurger = !this.openBurger;
    }
  }
};
</script>

