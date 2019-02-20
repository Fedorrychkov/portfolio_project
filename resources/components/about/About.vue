<template>
  <section class="c-about" id="about">
    <div class="container c-about__container">
      <div class="c-about__left">

      </div>
      <div class="c-about__right">
        <h3 class="title"> {{ $t('about.title') }} </h3>

        <h4 class="c-about__me">{{ $t('about.me') }}</h4>
        <div class="c-about__description">
          <p>{{ $t('about.about-1') }}</p>
          <p>{{ $t('about.about-2') }}</p>
        </div>
        <aside class="c-about__meta">
          <div class="keyval" v-for="item in meta" :key="item.type">
            <span class="key has-icon">
              <b><font-awesome-icon :icon="['fa', item.icon]" /></b>
              {{ $t(item.key) }}
            </span>
            <span class="value" v-if="item.type === 'age' || item.type === 'location'">{{ $t(item.value) }}</span>
            <span class="value" v-if="item.type === 'phone'"><a :href="`tel: ${$t(item.value)}`">{{ $t(item.value) }}</a></span>
            <span class="value" v-if="item.type === 'email'"><a :href="`mailto: ${$t(item.value)}`">{{ $t(item.value) }}</a></span>
          </div>
        </aside>
        <div class="c-about__controlls">
          <a :href="$t('about.link')" target="blank" class="button resume">{{ $t('about.download') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarker, faCalendarAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMapMarker, faCalendarAlt, faMobileAlt, faEnvelope);
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
  data() {
    return {
      meta: [
        {icon: 'map-marker', key: 'about.meta.location.key', value: 'about.meta.location.value', type: 'location'},
        {icon: 'calendar-alt', key: 'about.meta.age.key', value: 'about.meta.age.value', type: 'age'},
        {icon: 'mobile-alt', key: 'about.meta.phone.key', value: 'about.meta.phone.value', type: 'phone'},
        {icon: 'envelope', key: 'about.meta.email.key', value: 'about.meta.email.value', type: 'email'},
      ]
    }
  }
};
</script>
