<template>
  <!-- FOOTER -->
  <footer class="page-footer font-small blue" id="footer">
    <div class="footer-copyright text-center py-3">
      <p>{{copyright}}</p>
      <a :href="poweredLink" target="_blank">{{powered}}</a>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        copyright: '© 2019 Copyright :',
        powered: 'Powered by NEWSAPI.org',
        poweredLink: 'https://newsapi.org/'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_general.scss";

footer {
  position: relative;
  z-index: 998;
  background-color: $secondary;
  color: $background;
  display: flex;
  justify-content: center;

  p {
    float: left;
    margin-right: .5rem;
  }
}
</style>
