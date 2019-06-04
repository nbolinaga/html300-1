<template>
  <section>
    <main>
      <welcome />
        <app-article />
    </main>
    <more />
  </section>
</template>

<script>
import Welcome from '../components/Welcome.vue'
import Article from '../components/Article.vue'
import More from '../components/More.vue'

export default {
  components:{
    'welcome': Welcome,
    'app-article': Article,
    'more': More,
  }
}

</script>


<style lang="scss">
  @import "../assets/_variables.scss";
  @import "../assets/_general.scss";
</style>

