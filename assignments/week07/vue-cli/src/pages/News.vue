<template>
  <div>
    <main class="container">
      <app-articles />
    </main>
  </div>
    
</template>

<script>
import Articles from '../components/MoreArticles.vue'

export default {
  components:{
    'app-articles': Articles,
  },
}

</script>


<style lang="scss">
  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";
</style>

