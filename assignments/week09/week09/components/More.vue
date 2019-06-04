<template>
<!-- MORE NEWS BUTTON -->
  <!-- nuxt-link does everything auto -->
  <nuxt-link to="/News" class="btn btn-primary my-2 more">{{more}}</nuxt-link>
</template>


<script>
export default {
  data() {
    return {
      more: 'More News',
    }
  }
}
</script>


<style lang="scss">
@import "../assets/_variables.scss";
@import "../assets/_general.scss";

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
