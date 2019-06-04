<template>
  <!-- HOMEPAGE JUMBOTRON -->
  <section class="jumbotron text-center">
    <div class="container">
      <h2 v-if=" time <= 24 && time >= 18" class="jumbotron-heading">{{welcomeNight}}</h2>
      <h2 v-else-if="time <= 17 && time >= 13 " class="jumbotron-heading">{{welcomeAfternoon}}</h2>
      <h2 v-else class="jumbotron-heading">{{welcomeMorning}}</h2>
      <p class="lead text-muted">{{message}}</p>
      <p>
        <nuxt-link to="/Search" class="btn btn-primary my-2">Search Specific Game</nuxt-link>
        <nuxt-link to="/About" class="btn btn-secondary my-2 px-5">About Us</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      welcomeMorning: "GOOD MORNING AND WELCOME TO VGN",
      welcomeAfternoon: "GOOD AFTERNOON AND WELCOME TO VGN",
      welcomeNight: "GOOD EVENING AND WELCOME TO VGN",
      message: "VGN stands for Video Games News, here we organize the latest news in... well, video games! We compile from various sources and display snippets of them, so you can get all the information in one place.",
      nameOne: 'Search specific games',
      nameTwo: 'About Us',
      time: new Date().getHours(),
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_general.scss";

// JUMBOTRON -------------------------------------------------------------------------------------------------------------------------------
.jumbotron {
  position: relative;
  z-index: 100;
  background-color: $background !important;
  border-radius: 0px;
}

.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}

@media (min-width: 768px) {
  .jumbotron {
    padding-top: calc(3rem * 2);
    padding-bottom: calc(3rem * 2);
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

.btn-primary {
  color: $background !important;
}
</style>