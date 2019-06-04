<template>
  <!-- article container -->
  <div>
    <!-- creates articles with v-for -->
    <div v-for="article in info" class="article-card">
      <section class="card bg-light">
        <h2 class="card-tile">{{article.title | uppercase}}</h2>
        <h3 class="card-author">by {{article.author}}</h3>
        <!-- published calls for a method (explained below) -->
        <h5 class="card-time">{{ published(article.publishedAt)}}</h5>
        <img :src='article.urlToImage' @error:src='src/assets/no.svg' alt="" class="card-img img-thumbnail">
        <p class="card-description">{{article.description}}</p>
        <a class="card-url bg-primary" :href="article.url" target="_blank" data-toggle="tooltip" data-placement="bottom"
          :title='article.url'>{{article.source.name}}</a>
      </section>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
// moment is used to generate dates in an specific format (very useful)
import moment from 'moment'

export default {
  data() {
    return {
      // sets info as null so it can be filled with an array later
      info: {},
      // generates date for the day the page is visited
      date: moment().format('YYYY-MM-DD'),
      // generates date for the 3 days prior to the day the page is visited (used to be 7 days hence the name "lastWeek")
      lastWeek: moment().subtract(3, 'd').format('YYYY-MM-DD'),
    }
  },
  created: function () {
    // generates link based on 'date' and 'lastWeek' that way only the must recent news are shown (newsapi.org)
    axios.get(`https://newsapi.org/v2/everything?q=video%20games&from=${this.date}&to=${this.lastWeek}&sortBy=relevancy&pageSize=10&apiKey=3fcf435bb9774657a345c3fed0a0462d`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.info = response.data.articles
      })
      .catch(e => {
        this.errors.push(e)
      })
      .finally(() => this.loading = true)
  },
  methods: {
    // formats the date displayed to be more readable
    published: function (publishedAt) {
      return moment(publishedAt).format('DD/MM/YYYY @ hh:mm a');
    }
  },
  // filters the title and sets everything to uppercase
  filters: {
    uppercase: function (v) {
      return v.toUpperCase();
    }
  }
}
</script>

<style lang="scss">
@import "../assets/_variables.scss";
@import "../assets/_general.scss";

// ARTICLE CARDS ---------------------------------------------------------------------------------------------------------------------------
.article-card {
  .card {
    width: 50%;
    height: auto;
    background-color: $background;
    margin: 50px auto;
    padding: 50px;
    position: relative;
    z-index: 998;

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
