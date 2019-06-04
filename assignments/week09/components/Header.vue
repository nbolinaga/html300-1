<template>
  <header id="header">
    <!-- VGN ICON  -->
    <nuxt-link to="/"><img class="float-left ml-3" src="../assets/vgn-icon.png" alt="page icon/controller"></nuxt-link>
    <!-- NAVBAR -->
    <nav class="navbar navbar-light">
      <!-- TOOGLE BUTTON -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <!-- nuxt-link does all the routing automatically -->
        <ul class="nav nav-pills nav-fill  float-right">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/" exact>Homepage</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/News">News</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/Search">Search</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/About">About</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
// NO SCRIPT (thanks nuxt-link!)
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_general.scss";

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

// gives the current button of the page open the blue background
.nuxt-link-active {
  color: $background !important;
  background-color: $primary !important;
}
</style>
