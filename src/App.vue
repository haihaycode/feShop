<template>
  <topNavigation></topNavigation>
  <bottomNavigation :navIndex="getNavigationBottom" :mdHidden="getMdHidden" />

  <router-view class="mx-2 md:mx-28 mt-20" />
  <div style="height: 1000px;"></div>
</template>


<script>

import bottomNavigation from './components/bottomNavigation.vue'
import topNavigation from './components/topNavigation.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'AppComponent',
  components: {
    bottomNavigation,
    topNavigation
  },
  computed: {
    ...mapGetters(['getNavigationBottom']),
    ...mapGetters(['getMdHidden'])
  }
}
</script>
