<template>
  <v-app dark>
    <section class="salary">
      <h2 class="title">Зарплатный калькулятор (РФ)</h2>
      <div class="salary-box">
        <v-form v-model="valid" @submit.prevent="calculate">
          <v-row>
            <v-col
              cols="12"
              sm="4"
            >
              <v-autocomplete
                v-model="month"
                @input="inputMonth"
                :items="months"
                dense
                filled
                label="Месяц"
                :rules="rules"
              ></v-autocomplete>
            </v-col>
            <v-col
              cols="12"
              sm="4"
            >
              <v-autocomplete
                v-model="sum"
                @input="inputSum"
                :items="prepareSum"
                dense
                filled
                label="Зарплата (руб NET)"
                :search-input.sync="search"
                :rules="rules"
              ></v-autocomplete>
            </v-col>

            <v-col
              cols="12"
              sm="4"
            >
              <v-btn class="ma-2" :lodaing="loading" :disabled="loading" outlined @click="calculate">Рассчитать</v-btn>
            </v-col>
          </v-row>
        </v-form>
        <v-simple-table v-if="paymentData">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">День</th>
                <th class="text-left hide-in-mobile">Зарплата</th>
                <th class="text-left">Сумма ({{sum/(getWorksDayLength().length || 1) | numFormat}} в день)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in paymentData" :key="i">
                <td :class="`day-type type-${item.type}`">{{ item.day }} {{ month.toLowerCase() }}</td>
                <td class="hide-in-mobile">{{ item.payday | numFormat }}</td>
                <td>{{ item.sum | numFormat }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </section>
  </v-app>
</template>
<script>
import { formatNumber } from '@/helpers/numbers'
import { capitalizeFirstLetter } from '@/helpers/strings'
import axios from 'axios'
import * as moment from 'moment'
export default {
  data: () => ({
    rules: [
      value => !!value || 'Поле обязательно для заполнения',
    ],
    valid: false,
    loading: false,
    sum: null,
    parsedSum: '',
    search: null,
    month: '',
    months: [],
    prepareSum: [
      '30000',
      '50000',
      '100000',
      '110000',
      '150000',
      '200000'
    ],
    monthMap: {
      'Январь': 1,
      'Февраль': 2,
      'Март': 3,
      'Апрель': 4,
      'Май': 5,
      'Июнь': 6,
      'Июль': 7,
      'Август': 8,
      'Сентябрь': 9,
      'Октябрь': 10,
      'Ноябрь': 11,
      'Декабрь': 12,
    },
    payday: undefined,
    dayType: {
      0: 'Рабочий день',
      1: 'Выходной день',
      2: 'Сокращенный рабочий день'
    },
    monthDaysWithTypes: undefined,
    paymentData: undefined
  }),
  mounted () {
    moment.locale('ru')
    this.months = moment.months().map(item => capitalizeFirstLetter(item))
    this.month = capitalizeFirstLetter(moment().format('MMMM'))
  },
  watch: {
    search (val) {
      this.sum = val;
    }
  },
  methods: {
    inputSum (sum) {
      this.parsedSum = formatNumber(sum)
      this.sum = sum
      this.calculate()
    },
    inputMonth (month) {
      this.calculate()
    },
    calculate () {
      if (!this.sum || !this.month || !this.monthMap[this.month]) return false
      this.loading = true
      const year = moment().format('YYYY')
      let payday = JSON.parse(localStorage.getItem('payday'))
      const currentMonth = payday && payday[year] && payday[year][this.monthMap[this.month]] || undefined

      if (currentMonth) {
        this.monthDaysWithTypes = currentMonth
        this.loading = false
        this.createCalculationTable()
        return false
      }

      // https://isdayoff.ru/extapi/
      axios.get(`https://isdayoff.ru/api/getdata?delimeter=,&year=${year}&month=${this.monthMap[this.month]}`).then(res => {
        const month = res.data.split(',')
        payday = { ...payday, [year]: { [this.monthMap[this.month]]: month } }
        localStorage.setItem('payday', JSON.stringify(payday))
        this.monthDaysWithTypes = month
      }).finally(() => {
        this.loading = false
        this.createCalculationTable()
      })
    },
    getWorksDayLength () {
      return this.monthDaysWithTypes.filter(item => Number(item) !== 1)
    },
    createCalculationTable () {
      this.payday = this.sum/(this.getWorksDayLength().length || 1)
      this.paymentData = this.monthDaysWithTypes.reduce((acc, curr, index) => {
        const type = Number(curr)
        const hours = 0 === type ? 8 : type === 2 ? 7 : 0
        const payday = (this.payday / 8) * hours
        const sum = acc.length && acc[acc.length - 1].sum + payday

        const item = { day: index + 1, type, typeTitle: this.dayType[type], sum, payday }
        return [...acc, item]
      }, [])
    }
  }
}
</script>
<style lang="scss">
.salary {
  padding: 16px 0;

  &-box {
    margin: 16px 0;
  }

  @media (max-width: 768px) {
    .hide-in-mobile {
      display: none;
    }
  }
}
</style>
