<template>
    <div v-cloak>
        <app-header />
        <up />
        <Nuxt />
        <app-footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Up from '../components/Button.vue'

export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'up': Up
    }
}
</script>

<style>
    [v-cloak] {
    display: none;
    }
</style>
