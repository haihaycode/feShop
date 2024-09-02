<template>
  <bottomNavigation />

  <router-view />
</template>


<script>

import bottomNavigation from './components/bottomNavigation.vue'
export default {
  name: 'AppComponent',
  components: {
    bottomNavigation
  }
}
</script>
