<template>
<!-- MORE NEWS BUTTON -->
      <!-- instead of links "button" element switches component -->
    <a class="btn btn-primary my-2 more" @click="switchComponent('news')" :disabled="currentComp === 'homepage'">{{more}}</a>
</template>


<script>
import { bus } from '../main.js';

export default {
  data() {
    return {
      more: 'More News',
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
  }
}
</script>


<style lang="scss">

 @import "./styles/_variables.scss";
 @import "./styles/_general.scss";

 .more {
   position: relative;
   z-index: 2;
   width: 50%;
   padding: 25px 0px;
   left: 50%;
   margin-left: -25%;
   color: $background !important;

   &:hover {
     color: $text !important;
   }
 }

</style>
