<template>
<!-- card container -->
  <div class="card-columns">
    <!-- creates articles with v-for -->
    <div v-for="article in info" class="card mt-3">
      <a :href="article.url" target="_blank"><img class="card-img-top img-thumbnail" :src="article.urlToImage"  alt="Card image cap"></a>
      <div class="card-body m-3">
        <h5 class="card-title m-3 text-primary">{{article.title | uppercase}}</h5>
        <h5 class="card-subtitle m-3" text-light>by {{article.author}}</h5>
        <p class="card-text m-3">{{article.description}}</p>
        <a :href="article.url" target="_blank" class="btn btn-primary" data-toggle="tooltip" data-placement="bottom"
          :title="article.url">{{article.source.name}}</a>
      </div>
      <div class="card-footer">
        <!-- published calls for a method (explained below) -->
        <small class="text-muted">{{ published(article.publishedAt)}}</small>
      </div>
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
    axios.get(`https://newsapi.org/v2/everything?q=video%20games&from=${this.date}&to=${this.lastWeek}&sortBy=relevancy&pageSize=100&apiKey=3fcf435bb9774657a345c3fed0a0462d`)
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
    uppercase: function(v) {
      return v.toUpperCase();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/_general.scss";

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
      @include onHover;
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
