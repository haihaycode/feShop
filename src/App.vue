<template>
  <bottomNavigation :navIndex="getNavigationBottom" :mdHidden="getMdHidden" />
  <router-view class="mx-2" />
</template>


<script>

import bottomNavigation from './components/bottomNavigation.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'AppComponent',
  components: {
    bottomNavigation
  },
  computed: {
    ...mapGetters(['getNavigationBottom']),
    ...mapGetters(['getMdHidden'])
  }
}
</script>
