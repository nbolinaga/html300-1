<template>
  <main>
    <jumbo />
    <app-accordion />
  </main>
</template>

<script>
import Accordion from '../components/Accordion.vue'
import Jumbo from '../components/SearchJumbo.vue'

export default {
  components:{
    'app-accordion': Accordion,
    'jumbo': Jumbo,
  },
}

</script>


<style lang="scss">
  @import "../assets/_variables.scss";
  @import "../assets/_general.scss";
</style>

