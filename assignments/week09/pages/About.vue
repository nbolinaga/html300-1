<template>
  <main class="container">
    <aboutMe />
  </main>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'

export default {
  components:{
    'aboutMe': AboutMe,
  },
}
</script>


<style lang="scss">
  @import "../assets/_variables.scss";
  @import "../assets/_general.scss";

  .container{
    position: relative;
    z-index: 998;
  }
</style>

