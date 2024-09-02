<template>
  <bottomNavigation :navIndex="getNavigationBottom" :mdHidden="getMdHidden" />
  <router-view class="mx-2 md:mx-28" />
  <div style="height: 100px;"></div>
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
