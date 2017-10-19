<script>
export default {
  name: 'TimeEditor',
  data () {
    return {
      msg: 'message lets time edit!'
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="editor">
    <input type="number" value="" min="0" max="9" step="1" required/>
    <input type="number" value="" min="0" max="9" step="1" required/>
    <input type="number" value="" min="0" max="9" step="1" required/>
    <input type="number" value="" min="0" max="9" step="1" required/>
  </div>
</template>
