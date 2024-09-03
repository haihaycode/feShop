<template>
  <div class="hello">
    <h1 class="text-sm">{{ msg }}</h1>
    <settingNavigationBottom></settingNavigationBottom>
    <settingHiddenNav></settingHiddenNav>

  </div>
</template>

<script>
import settingNavigationBottom from './settingNavigationBottom.vue';
import settingHiddenNav from './settingHiddenNav.vue';
export default {
  name: 'HelloWorld',
  components: {
    settingNavigationBottom,
    settingHiddenNav
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
