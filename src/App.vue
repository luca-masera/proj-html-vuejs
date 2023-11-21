<template>
  <div>
    <HeaderApp />
    <MainApp />
    <FooterApp />

  </div>
</template>

<script>
import FooterApp from './components/FooterApp.vue';
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
export default {
  name: 'App',

  components: {
    HeaderApp,
    MainApp,
    FooterApp
  }

}
</script>

<style lang="scss" scoped></style>