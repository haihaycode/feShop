<template>
  <div>
    <LoadingComponent :loading="loading"></LoadingComponent>
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
  },
  data() {
    return {
      loading: true, // Khởi tạo biến loading
    };
  },
  mounted() {
    // Sử dụng setTimeout để sau 3 giây đặt loading thành false
    setTimeout(() => {
      this.loading = false;
    }, 3000); // 3000ms = 3 giây
  },
};
</script>

<style></style>
