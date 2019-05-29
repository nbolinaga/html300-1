<template>
    <main>
        <about-me />
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
  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";
</style>

