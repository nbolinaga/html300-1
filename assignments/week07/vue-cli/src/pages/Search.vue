<template>
  <div>
    <main>
      <jumbo />
      <app-accordion />
    </main>
  </div>
    
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
  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";
</style>

