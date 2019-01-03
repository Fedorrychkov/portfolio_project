<template>
  <aside class="language-picker">
    <div class="language-picker__active" @click="toggleList">
        <img :src="active.img" class="language-picker__image" :alt="active.key" />
    </div>
    <ul :class="{'language-picker__list': true, 'open': visible}">
      <li class="language-picker__item" v-for="item in list" :key="item.key" @click="choiseLanguage(item)">
        <img :src="item.img" :alt="`${item.key} language`" />
        <span>{{item.title}}</span>
      </li>
    </ul>
  </aside>
</template>
<script>
import ruImg from '@/assets/img/icons/languages/ru.svg';
import enImg from '@/assets/img/icons/languages/en-en.svg';

export default {
  data() {
    return {
      visible: false,
      active: { key: 'ru', img: ruImg, title: 'Русский' },
      list: [
        { key: 'ru', img: ruImg, title: 'Русский' },
        { key: 'en', img: enImg, title: 'English' },
      ]
    };
  },
  mounted() {
    this.$i18n.locale = localStorage.getItem('portfolio.language') ? localStorage.getItem('portfolio.language') : 'ru';
    this.list.forEach(item => {
      if (item.key === this.$i18n.locale) {
        this.active = item;
      }
    });
  },
  methods: {
    toggleList() {
      this.visible = !this.visible;
    },
    choiseLanguage(item) {
      this.visible = false;
      this.$i18n.locale = item.key;
      this.active = item;
      localStorage.setItem('portfolio.language', item.key);
    }
  },
};
</script>
<style lang="scss">
.language-picker {
  margin-left: 16px;
  position: relative;
  line-height: 1;

  &__image {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__active {
    overflow: hidden;
    cursor: pointer;
  }

  &__item {
    cursor: pointer;
    display: flex;
    padding: 5px 8px;
    border-radius: 5px;

    &:hover {
      background-color: #f1f1f1;
    }

    span {
      margin-left: 8px;
      color: #333;
    }
  }

  &__list {
    position: absolute;
    background-color: #fff;
    top: 34px;
    right: 0;
    border-radius: 5px;
    transform: translate(0, 10%);
    opacity: 0;
    z-index: -10;
    transition: all .15s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      border: 9px solid transparent;
      border-bottom: 10px solid #fff;
      top: -15px;
      right: 4px;
      z-index: 1;
    }

    &.open {
      transform: translate(0, 0);
      opacity: 1;
      z-index: 2;
    }
  }
}
</style>

