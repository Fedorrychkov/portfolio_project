<template>
  <section class="c-welcome" id="hello">
    <div class="c-welcome__animation">
      <no-ssr>
        <vue-particles color="#dedede" hoverMode="repulse"></vue-particles>
      </no-ssr>
    </div>
    <div class="container">
      <div class="c-welcome__hello">
        <span class="hello">{{$t('links.hello')}} !</span>
        <h1 class="short">{{$t('welcome.title')}}</h1>
        <p class="description">
          Пишу веб приложения с 2014 года.
          Начинал как верстальщик, но теперь занимаюсь разработкой сложного и безопасного фронтенда и бэкенда на JavaScript.
        </p>
        <ul class="socials">
          <li class="socials__item" v-for="(item, index) in socials" v-bind:key="index">
            <a class="socials__link" :aria-label="item.label" :href="item.link" target="blank">
              <font-awesome-icon :icon="['fab', item.icon]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nuxt-link to="#about" v-scroll-to="`#about`">
      <arrow class="arrow__down" />
    </nuxt-link>
  </section>
</template>
<script>
import Vue from 'vue';
import * as moment from 'moment';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faVk, faTwitter, faInstagram, faLinkedinIn, faSkype } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Arrow from '../shared/ui/Arrow';

library.add(faFacebookF, faVk, faTwitter, faInstagram, faLinkedinIn, faSkype);
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
  data() {
    return {
      currentYear: '',
      socials: [
        {link: 'https://www.linkedin.com/in/fedor-rychkov-084a88123?trk=hp-identity-name', icon: 'linkedin-in', label: 'LinkedIn'},
        {link: 'https://www.instagram.com/stonedcatt/', icon: 'instagram', label: 'Instagram'},
        {link: 'https://vk.com/scaytt', icon: 'vk', label: 'Vkontakte'},
        {link: 'https://twitter.com/fedorrychkov', icon: 'twitter', label: 'Twitter'},
        {link: 'https://fedorrychkov.com/skype:fedorrychkov?call', icon: 'skype', label: 'Skype'},
        {link: 'https://www.facebook.com/fedorrychkov', icon: 'facebook-f', label: 'Facebook'}
      ]
    }
  },
  components: {
    Arrow
  },
  mounted() {
    this.currentYear = moment().format('YYYY');
  }
};
</script>
<style lang="scss">
  .c-welcome {
    .arrow {
      position: absolute;
      left: 50%;
      bottom: 30px;
      transform: translate(-50%, 0) rotate(45deg);
    }
  }
</style>

