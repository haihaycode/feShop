<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p class="text-gray-500 dark:text-gray-400">Tôi tin rằng những thứ này sẽ giúp vào 1 phần nào đó trong dự án tốt
      nghiệp của tôi</p>

    <blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
      <p>"Phần bổ trợ cho các dự án front-end Dự án tốt nghiệp GizmoShop"</p>
    </blockquote>
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
