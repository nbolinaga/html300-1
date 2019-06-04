<template>
  <main class="container">
    <app-more-articles />
  </main>
</template>

<script>
import Articles from '../components/MoreArticles.vue'
export default {
  components:{
    'app-more-articles': Articles,
  },
}

</script>


<style lang="scss">
  @import "../assets/_variables.scss";
  @import "../assets/_general.scss";

  .container{
    position: relative;
    z-index: 900;
  }
</style>

