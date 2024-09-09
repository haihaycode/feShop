<template>
  <div class="text-center">

    <NewsComponent></NewsComponent>
    <BannerSale></BannerSale>
    <BannerBrands></BannerBrands>
    <BannerCategories></BannerCategories>
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
import BannerBrands from '@/components/BannerBrands.vue';
import BannerSale from '@/components/BannerSale.vue';
import BannerCategories from '@/components/BannerCategories.vue';
export default {
  name: 'HomeView',
  components: {
    // settingNavigationBottom,
    // settingHiddenNav,
    // CategoryNavigation,
    BannerBrands,
    BannerSale,
    NewsComponent,
    BannerCategories
  },
}
</script>
