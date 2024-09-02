<template>
  <div class="text-center">
    <img alt="Vue logo" class="mx-auto" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div style="height: 1000px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
