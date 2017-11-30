<script>
import TimeEditor from '@/components/TimeEditor'
import TimeList from '@/components/TimeList'

export default {
  name: 'app',
  components: {
    TimeEditor,
    TimeList
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.apHead {
  border-bottom: 1px solid #ddd
}
</style>

<template>
  <div id="app">
    <header class="apHead">
      <h1>Alarme</h1>
    </header>
    <time-editor />
    <time-list />
  </div>
</template>
