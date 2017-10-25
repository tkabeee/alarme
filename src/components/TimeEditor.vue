<script>
// import moment from 'moment'

export default {
  name: 'TimeEditor',
  data () {
    return {
      hour: '',
      minute: ''
    }
  },
  methods: {
    updateNumber (e) {
      // console.log(e.target.value)
      this.$emit('update-number', e.target.value)
    }
  }
}

// TODO: new Date() する時はlocaleを考慮する
// TODO: number inputのプレイスホルダに現在時刻を表示する
</script>

<style>
</style>

<template>
  <div class="editor">
    <input type="number" v-model="hour" v-on:input="updateNumber" placeholder="" min="0" max="23" step="1" required/>
    <input type="number" v-model="minute" v-on:input="updateNumber" placeholder="" min="0" max="59" step="1" required/>
  </div>
</template>
