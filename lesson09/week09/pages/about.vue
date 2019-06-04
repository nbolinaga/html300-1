<template>
  <section class="container">
    <div>
      <h1 class="title">
        About
      </h1>
      <h2 class="subtitle">
        this is the about page
      </h2>
      <nuxt-link to='/'>Homepage</nuxt-link>
    </div>
    <div class="">
        <div v-for="article in info" class="article-card" v-bind:key="article">
          <h2 class="card-tile">{{article}}</h2>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
 data() {
   return {
     test: "Hello",
     info: {}
   }
 },
 created: function() {
     this.test = "Welcome to Class";
   //
   
   axios.get(`https://swapi.co/api/people`)
   .then(response => {
     // JSON responses are automatically parsed.
     this.posts = response.data
     this.info = this.posts;
   })
   .catch(e => {
     this.errors.push(e)
   })
   .finally(() => this.loading =true)
 },
 methods: {
   greet: function() {
     
   }
 }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
