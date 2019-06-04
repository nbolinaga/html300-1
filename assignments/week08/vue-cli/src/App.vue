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

// imports static elements
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Button from './components/Button.vue';

// imports interchangeble pages
import Homepage from './pages/Homepage.vue';
import News from './pages/News.vue';
import Search from './pages/Search.vue';
import About from './pages/About.vue';

import { bus } from './main.js';

export default {
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

