<template>
    <main>
        <about-me />
    </main>
</template>

<script>
import About from '../components/app-me.vue'


export default {
  components:{
    'about-me': About,
  },
}
</script>


<style lang="scss">
  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";
</style>

