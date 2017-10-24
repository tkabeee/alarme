<script>
// import moment from 'moment'

export default {
  name: 'TimeEditor',
  data () {
    return {
      msg: 'message lets time edit!'
    }
  }
}

// TODO: new Date() する時はlocaleを考慮する
// TODO: number inputのプレイスホルダに現在時刻を表示する

// TODO:
</script>

<style>
</style>

<template>
  <div class="editor">
    <input type="number" v-model="hour" placeholder="" min="0" max="9" step="1" required/>
    <input type="number" v-model="minute" placeholder="" min="0" max="9" step="1" required/>
  </div>
</template>
