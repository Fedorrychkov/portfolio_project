<template>
  <section class="c-welcome vue-blockpage" id="hello">
    <div class="c-welcome__animation">
      <client-only>
        <vue-particles color="#dedede" hoverMode="repulse"></vue-particles>
      </client-only>
    </div>
    <div class="container">
      <div class="c-welcome__hello">
        <span class="hello">{{$t('links.hello')}} !</span>
        <h1 class="short">{{$t('welcome.title')}} <a href="//labado.ru" target="_blank" class="link white">Labado</a> {{$t('welcome.and')}} <a href="//belka.guru" target="_blank" class="link white">Belka.guru</a></h1>
        <p class="description">
          {{$t('welcome.description')}}
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
import { faFacebookF, faVk, faTwitter, faInstagram, faLinkedinIn, faSkype, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Arrow from '../shared/ui/Arrow';

library.add(faFacebookF, faVk, faGithub, faTwitter, faInstagram, faLinkedinIn, faSkype);
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
  data() {
    return {
      currentYear: '',
      socials: [
        {link: '//github.com/Fedorrychkov', icon: 'github', label: 'GitHub'},
        {link: '//www.linkedin.com/in/fedor-rychkov-084a88123?trk=hp-identity-name', icon: 'linkedin-in', label: 'LinkedIn'},
        {link: '//www.instagram.com/stonedcatt/', icon: 'instagram', label: 'Instagram'},
        {link: '//vk.com/scaytt', icon: 'vk', label: 'Vkontakte'},
        {link: '//twitter.com/fedorrychkov', icon: 'twitter', label: 'Twitter'},
        {link: 'skype:fedorrychkov?chat', icon: 'skype', label: 'Skype'},
        {link: '//www.facebook.com/fedorrychkov', icon: 'facebook-f', label: 'Facebook'}
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

