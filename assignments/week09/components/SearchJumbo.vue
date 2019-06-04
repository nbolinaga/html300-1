<template>
  <!-- SEARCH JUMBOTRON -->
  <section class="jumbotron text-center news-jumbo">
    <div class="container">
      <h4 class="lead">{{title}}</h4>
      <p class="text-primary">{{comment}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Here you can search any game you want using the searchbar or pick from our hand selected games below (more to come).",
      comment: "This is a WPI so searched games may not be a 100% accurate. Also, results take a few seconds to load.",
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_general.scss";

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

.news-jumbo {
  background-color: $secondary !important;

  .lead {
    color: $background !important;
  }
}
</style>