<template>
<!-- card container -->
<div class="card-columns">
  <!-- creates articles with v-for -->
  <div v-for="article in info" class="card mt-3" v-bind:key="article">
    <img class="card-img-top img-thumbnail" :src='article.urlToImage'
      alt="Card image cap">
    <div class="card-body m-3">
      <h5 class="card-title m-3 text-primary">{{article.title}}</h5>
      <h5 class="card-subtitle m-3" text-light>by {{article.author}}</h5>
      <p class="card-text m-3">{{article.description}}</p>
      <a :href="article.url" target="_blank" class="btn btn-primary" data-toggle="tooltip" data-placement="bottom"
        :title="article.url">{{article.source.name}}</a>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{article.publishedAt}}</small>
    </div>
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
      return `https://newsapi.org/v2/everything?q=video%20games&from=2019-0${this.month}-${this.day-7}&to=2019-0${this.month}-${this.day}&sortBy=relevancy&pageSize=100&apiKey=3fcf435bb9774657a345c3fed0a0462d`
    }
  },
  mounted() {
    // used axios for API
    axios
      // gets url previously created
      .get(this.url)
      // sets articles as an array in info
      .then(response => (this.info = response.data.articles))
  },props:{
    this.urlToImage:{
      type: string,
      dafault: 'src/assets/no.svg'
    }
  }
})
</script>

<style lang="scss">

  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";

  // NEWS CARDS ------------------------------------------------------------------------------------------------------------------------------
  .card-columns {
    @media (min-width: 576px) and (max-width: 1000px) {
      column-count: 2;
    }

    .card {
      background-color: $background;

      .img-thumbnail {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .btn {
        display: block;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
      }

      &-title {
        color: $text !important;
        font-size: 1.5rem;
      }

      &-subtitle {
        color: $details !important;
        font-size: 1.25rem;
      }

      &-text {
        font-style: oblique;
        font-weight: lighter;
        text-align: justify;
      }

      &-footer {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
