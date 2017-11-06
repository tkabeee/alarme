<script>
import Selector from '@/components/Selector'

export default {
  name: 'TimeEditor',
  components: {
    Selector
  },
  methods: {
    updateNumber (e) {
      console.log(e)
    }
  }
}

// TODO: new Date() する時はlocaleを考慮する
// TODO: number inputのプレイスホルダに現在時刻を表示する
// TODO: hourとminuteの更新をcommitする
</script>

<style>
</style>

<template>
  <div class="editor">
    <selector />
    <input type="number" v-on:input="updateNumber" placeholder="" min="0" max="59" step="1" required/>
  </div>
</template>
