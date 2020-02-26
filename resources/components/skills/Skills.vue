<template>
  <section class="c-skills vue-blockpage" id="skills">
    <div class="container c-skills__container">
      <h3 class="title custom xl b500"> {{ $t('skills.title') }} </h3>

      <div class="c-skills__content">
        <ul class="c-skills__list">
          <li class="c-skills__item" v-for="item in skills" :key="item.name">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {name: 'React'},
        {name: 'React Native'},
        {name: 'Vue.js'},
        {name: 'Lodash'},
        {name: 'Node.js'},
        {name: 'Next.js'},
        {name: 'Nuxt.js'},
        {name: 'Material UI'},
        {name: 'ES6+'},
        {name: 'Async/Await'},
        {name: 'Promisses'},
        {name: 'REST API'},
        {name: 'GraphQL'},
        {name: 'WebSockets'},
        {name: 'Docker'},
        {name: 'Docker Compose'},
        {name: 'Cylon.js'},
        {name: 'Axios'},
        {name: 'Fetch API'},
        {name: 'Adonis.js'},
        {name: 'Koa.js'},
        {name: 'Nest.js'},
        {name: 'MySQL'},
        {name: 'CouchDB'},
        {name: 'MongoDB'},
        {name: 'PostgreSQL'},
        {name: 'jQuery'},
        {name: 'Angular 2+'},
        {name: 'Angular.js'},
        {name: 'Core UI'},
        {name: 'Angular Material'},
        {name: 'Bootstrap'},
        {name: 'Materialize-css'},
      ]
    }
  }
};
</script>
