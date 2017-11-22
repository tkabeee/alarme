<script>
import {
  mapState,
  mapActions
} from 'vuex'

import Selector from '@/components/Selector'
import moment from 'moment'

export default {
  name: 'TimeEditor',
  components: {
    Selector
  },
  computed: {
    ...mapState([
      'hour',
      'minute'
    ]),
    nowHour () {
      return this.moment().format('h')
    },
    nowMinute () {
      return this.moment().format('mm')
    }
  },
  methods: {
    ...mapActions([
      'updateHour',
      'updateMinute'
    ]),
    moment: function () {
      return moment()
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="editor">
    <input type="number" :value="hour" @input="updateHour" :placeholder="nowHour" min="0" max="59" step="1" required/>
    <input type="number" :value="minute" @input="updateMinute" :placeholder="nowMinute" min="0" max="59" step="1" required/>
  </div>
</template>
