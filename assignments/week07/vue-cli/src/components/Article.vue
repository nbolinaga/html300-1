<template>
  <!-- article container -->
  <div>
    <!-- creates articles with v-for -->
    <div v-for="article in info" class="article-card" v-bind:key="article">
      <section class="card bg-light">
        <h2 class="card-tile">{{article.title}}</h2>
        <h3 class="card-author">by {{article.author}}</h3>
        <h5 class="card-time">{{article.publishedAt}}</h5>
        <img :src='article.urlToImage' @error:src='src/assets/no.svg' alt="" class="card-img img-thumbnail">
        <p class="card-description">{{article.description}}</p>
        <a class="card-url bg-primary" :href="article.url" target="_blank" data-toggle="tooltip" data-placement="bottom"
          :title='article.url'>{{article.source.name}}</a>
      </section>
    </div>
  </div>
</template>

<script>

export default ({
  data() {
    return {
      // sets info as null so it can be filled with an array later
      info: null,
      // gets todays day
      day: new Date().getDate(),
      // gets month, add one because months start at 0
      month: new Date().getMonth() + 1,
    }
  },
  computed: {
    // creates url for API based on month and day, that way news are not older than a week
    url: function () {
      return `https://newsapi.org/v2/everything?q=video%20games&from=2019-0${this.month}-${this.day-7}&to=2019-0${this.month}-${this.day}&sortBy=relevancy&pageSize=10&apiKey=3fcf435bb9774657a345c3fed0a0462d`
    }
  },
  mounted() {
    // used axios for API
    axios
      // gets url previously created
      .get(this.url)
      // sets articles as an array in info
      .then(response => (this.info = response.data.articles))
  }
})
</script>

<style lang="scss">

  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";


  // ARTICLE CARDS ---------------------------------------------------------------------------------------------------------------------------
  .article-card {
    .card {
      width: 50%;
      height: auto;
      background-color: $background;
      margin: 50px auto;
      padding: 50px;
      position: relative;
      z-index: 999;

      @media (max-width: 768px) {
        width: 80%;
      }

      &-title {
        color: $text;
        font-size: 2.5rem;
        font-weight: bold;

        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      }

      &-author {
        color: $details;
        font-size: 1.5rem;
        font-style: italic;
        margin: 10px 0;

        @media (max-width: 600px) {
          font-size: 1rem;
        }
      }

      &-img {
        width: 500px;
        height: auto;
        margin: 25px auto;
        border-radius: 10px;
      }

      &-description {
        font-size: 1.2rem;
        font-style: oblique;
        font-weight: lighter;
        text-align: justify;
        margin: 25px 0;

        @media (max-width: 600px) {
          font-size: 1rem;
          text-align: left;
        }
      }

      &-time {

        @media (max-width: 600px) {
          font-size: .5rem;
          text-align: left;
        }
      }

      &-url {
        // background-color: $primary;
        color: $background;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
      }
    }
  }

  #app {
    position: relative;
    z-index: 999;
  }
</style>
