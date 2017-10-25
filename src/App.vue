<script>
import TimeEditor from '@/components/TimeEditor'
import TimeList from '@/components/TimeList'

export default {
  name: 'app',
  components: {
    TimeEditor,
    TimeList
  },
  methods: {
    updateNumber (value) {
      console.log(value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <time-editor
      v-on:update-number="updateNumber"
    />
    <time-list />
  </div>
</template>
