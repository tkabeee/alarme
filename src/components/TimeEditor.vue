<script>
import {
  mapState,
  mapActions
} from 'vuex'

import Selector from '@/components/Selector'

export default {
  name: 'TimeEditor',
  components: {
    Selector
  },
  data () {
    return {
      now: this.getTime()
    }
  },
  computed: {
    ...mapState([
      'hour',
      'minute'
    ]),
    hours () {
      return Math.trunc(this.now / 60 / 60) % 24
    },
    minutes () {
      return Math.trunc(this.now / 60) % 60
    },
    seconds () {
      return this.now % 60
    }
  },
  methods: {
    ...mapActions([
      'updateHour',
      'updateMinute'
    ]),
    getTime () {
      const timeZoneOffset = new Date().getTimezoneOffset()
      const time = Date.now() - (timeZoneOffset * 60 * 1000)
      return Math.trunc((new Date(time)).getTime() / 1000)
    }
  },
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc(this.getTime())
    }, 1000)
  }
}
</script>

<style>
</style>

<template>
  <div class="editor">
    <input type="number" :value="hour" @input="updateHour" :placeholder="hours" min="0" max="59" step="1" required/>
    <input type="number" :value="minute" @input="updateMinute" :placeholder="minutes" min="0" max="59" step="1" required/>
    <!-- <input type="number" :placeholder="seconds" min="0" max="59" step="1" /> -->
  </div>
</template>
