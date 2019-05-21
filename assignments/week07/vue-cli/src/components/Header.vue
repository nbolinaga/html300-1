<template>
  <header id="header">
    <!-- VGN ICON  -->
    <a href="index.html"><img class="float-left ml-3" src="../assets/vgn-icon.png" alt="page icon/controller"></a>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- TOOGLE BUTTON -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <!-- UL using bootstrap to make it a nav -->
        <ul class="nav nav-pills nav-fill  float-right">
          <!-- V-for generates links from data -->
          <li v-for="page in pages" class="nav-item" v-bind:key="page">
            <!-- used switch component to simulate the change between pages, when clicking on nav item only that component will show-->
            <a class="nav-link" @click="switchComponent(page.componentName)"
              :disabled="currentComp === page.componentName">{{page.name}}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
// CURRENT_COMP CODE BASED ON https://codesandbox.io/s/30mxyw5726
import { bus } from '../main.js';

export default {
    data(){
      return {
        pages:[
          {name:'HOME', componentName:'homepage'},
          {name:'NEWS', componentName:'news'},
          {name:'SEARCH', componentName:'search'},
          {name:'ABOUT US', componentName:'about'}
        ]
      }
    },
    props: {
        currentComp: {
            type: String,
            required: true
        }
    },

    methods: {
        switchComponent(comp) {
            bus.$emit('switchComp', comp);
        }
    },
  }
    
</script>

<style lang="scss" scoped>

  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";


  header {
    height: 80px;
    background-color: $details;
    position: relative;
    z-index: 999;
    margin-top: 0;

    img {
      width: 80px;
      margin: 0;
    }

    nav {
      position: relative;
      z-index: 999;
      margin: 0;

      button {
        position: absolute;
        right: 0;
        margin-right: 2rem;
        margin-top: 10px;

        &:hover {
          cursor: pointer;
        }
      }

      .nav {
        background-color: $details;
        padding: 10px;
        margin-right: 5rem;

        @media (max-width: 600px) {
          display: block;
          width: auto;
        }
      }
    }
  }

  .nav-link {
    color: $text !important;

    &:hover {
      color: $background !important;
      cursor: pointer;
    }
  }

  .active {
    color: $background !important;
  }
</style>
