<template>
  <section class="c-skills" id="skills">
    <div class="container c-skills__container">
      <h3 class="title custom xl 500"> {{ $t('skills.title') }} </h3>

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
        {name: 'Vue.js'},
        {name: 'Angular 2+'},
        {name: 'React'},
        {name: 'jQuery'},
        {name: 'Angular.js'},
        {name: 'Core UI'},
        {name: 'Angular Material'},
        {name: 'Material UI'},
        {name: 'Bootstrap'},
        {name: 'Materialize-css'},
        {name: 'ES6+'},
        {name: 'Async/Await'},
        {name: 'Promisses'},
        {name: 'REST API'},
        {name: 'GraphQL'},
        {name: 'WebSockets'},
        {name: 'Docker'},
        {name: 'Docker Compose'},
        {name: 'Node.js'},
        {name: 'Cylon.js'},
        {name: 'Axios'},
        {name: 'Fetch'},
        {name: 'Adonis.js'},
        {name: 'Next.js'},
        {name: 'Nuxt.js'},
        {name: 'Nest.js'},
        {name: 'Koa.js'},
        {name: 'MySQL'},
        {name: 'CouchDB'},
        {name: 'MongoDB'},
        {name: 'PostgreSQL'},
        {name: 'Lodash'},
      ]
    }
  }
};
</script>
