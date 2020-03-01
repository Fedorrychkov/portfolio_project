<template>
  <section class="salary-block" id="hello">
    <div class="container">
      <salary-calculator />
    </div>
  </section>
</template>
<script>
import SalaryCalculator from '@/components/SalaryCalculator/SalaryCalculator';
export default {
  components: {
    SalaryCalculator
  }
};
</script>
<style lang="scss">
.salary-block {
  padding-top: 72px;
  min-height: calc(100vh - 148px);
  background-color: #000;
  color: #fff;
  
  .v-application--wrap {
    min-height: 10vh !important;
  }

  .theme--dark.v-application {
    background-color: #000;
  }
}
</style>
