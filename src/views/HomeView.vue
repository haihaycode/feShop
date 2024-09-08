<template>
  <div class="text-center">

    <NewsComponent></NewsComponent>
    <!-- <CategoryNavigation></CategoryNavigation> -->
    <!-- <settingNavigationBottom></settingNavigationBottom>
    <settingHiddenNav></settingHiddenNav> -->


  </div>
</template>
<script>
// import settingNavigationBottom from '@/components/settingNavigationBottom.vue';
// import settingHiddenNav from '@/components/settingHiddenNav.vue';
// import CategoryNavigation from '@/components/CategoryNavigation.vue';
import NewsComponent from '@/components/NewsComponent.vue';
export default {
  name: 'HomeView',
  components: {
    // settingNavigationBottom,
    // settingHiddenNav,
    // CategoryNavigation,
    NewsComponent
  },
}
</script>
