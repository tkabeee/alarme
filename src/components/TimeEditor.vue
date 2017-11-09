<script>
import {
  mapState,
  mapMutations
} from 'vuex'

import Selector from '@/components/Selector'

export default {
  name: 'TimeEditor',
  components: {
    Selector
  },
  computed: {
    ...mapState({
      hour: state => state.hour,
      minute: state => state.minute
    })
  },
  methods: {
    ...mapMutations([
      'updateHour',
      'updateMinute'
    ])
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
    <input type="number" :value="hour" @input="updateHour" placeholder="" min="0" max="59" step="1" required/>
    <input type="number" :value="minute" @input="updateMinute" placeholder="" min="0" max="59" step="1" required/>
  </div>
</template>
