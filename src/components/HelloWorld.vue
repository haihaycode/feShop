<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <settingNavigationBottom></settingNavigationBottom>

  </div>
</template>

<script>
import settingNavigationBottom from './settingNavigationBottom.vue';
export default {
  name: 'HelloWorld',
  components: {
    settingNavigationBottom
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
