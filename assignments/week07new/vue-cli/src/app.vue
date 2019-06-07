<template>
    <!-- sets div#app on index.html -->
    <div id="app">
        <!-- header/ current-comp check currently opened page -->
        <app-header :current-comp="currentComp"></app-header>
        <!-- go back to top button -->
        <go-top />
        <!-- sets the currently opened page as current-comp and displays it -->
        <component :is="currentComp"></component>
        <!-- footer -->
        <app-footer />
    </div>
</template>

<script>
// CURRENT_COMP CODE BASED ON https://codesandbox.io/s/30mxyw5726
import Vue from "vue";
// imports static elements
import Header from './components/app-header.vue';
import Footer from './components/app-footer.vue';
import Button from './components/button.vue';

// imports interchangeble pages
import Homepage from './pages/homepage.vue';
import News from './pages/news.vue';
import Search from './pages/search.vue';
import About from './pages/about.vue';

import { bus } from './main.js';

export default {
  name: 'App',
  el: '#app',
// set deafult comp as homepage
  data() {
    return {
      currentComp: 'homepage'
    };
  },

  created() {
      bus.$on('switchComp', comp => {
           this.currentComp = comp;
      })
  },

  components: {
    'app-header': Header,
    'app-footer': Footer,
    'go-top': Button,
    'homepage': Homepage,
    'about': About,
    'news': News,
    'search': Search,
  }
}


</script>


<style lang="scss">
// NO STYLE
</style>

