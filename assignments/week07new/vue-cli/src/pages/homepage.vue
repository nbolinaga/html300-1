<template>
  <div>
    <main>
      <welcome />
      <app-article />
    </main>
      <more />
  </div>
    
</template>

<script>
import Welcome from '../components/app-welcome.vue'
import Article from '../components/article.vue'
import More from '../components/app-more.vue'

export default {
  components:{
    'welcome': Welcome,
    'app-article': Article,
    'more': More
  },
}

</script>


<style lang="scss">
  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";
</style>

