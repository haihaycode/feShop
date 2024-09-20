<template>
  <div class="">
    <LoadingComponent :loading="true"></LoadingComponent>
    <div>
      <settingNavigationBottom></settingNavigationBottom>
      <settingHiddenNav></settingHiddenNav>
    </div>
  </div>
</template>

<script>
import LoadingComponent from '@/components/LoadingComponent.vue';
import settingNavigationBottom from '@/components/settingNavigationBottom.vue';
import settingHiddenNav from '@/components/settingHiddenNav.vue';
export default {
  name: 'AboutView',
  components: {
    LoadingComponent,
    settingNavigationBottom,
    settingHiddenNav,

  }
}
</script>

<style></style>