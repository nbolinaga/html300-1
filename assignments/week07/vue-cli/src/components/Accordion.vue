<template>
<!-- // THIS WHOLE PAGE IS A MESS (had trouble with API), GOTTA REDO IT // -->

<!-- ACCORDION CONTAINER -->
    <div class="accordion" id="accordionExample">
      <!-- SEARCH BAR  -->
      <div class="card">
        <div class="card-header d-flex justify-content-center sticky-top" id="headingOne">
          <h5 class="mb-0" data-toggle="tooltip" data-placement="right" title="Click again to close">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              SEARCHBAR
            </button>
          </h5>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <div class="searchbar">
              <input class="form-control m-5 p-3" type="text" v-model="userInput" placeholder="Search" id="myInput">
              <button v-on:click="click()" class="btn btn-secondary mt-5 mb-5 mr-5 p-3" id="button">Search</button>
            </div>
            <!-- here go the articles -->
            <div class="news">
              <!-- creates articles based on user input -->
                <div v-for="article in info" class="article-card">
                    <section class="card bg-light">
                        <h2 class="card-tile">{{article.title}}</h2>
                        <h3 class="card-author">by {{article.author}}</h3>
                        <h5 class="card-time">{{article.publishedAt}}</h5>
                        <img :src='article.urlToImage' @error:src='src/assets/no.svg' alt="" class="card-img img-thumbnail">
                        <p class="card-description">{{article.description}}</p>
                        <a class="card-url bg-primary" :href="article.url" target="_blank" data-toggle="tooltip"
                        data-placement="bottom" :title='article.url'>{{article.source.name}}</a>
                    </section>  
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- GAMES -->
      <div v-for="tabs in accordion" class="card">
        <div class="card-header d-flex justify-content-center sticky-top" :id="tabs.heading">
          <h5 class="mb-0" data-toggle="tooltip" data-placement="right" title="Click again to close">
            <button v-on:click="userInput = tabs.id, click()" class="btn btn-link collapsed preMade" type="button" data-toggle="collapse"
              :data-target="tabs.pound" aria-expanded="false" :aria-controls="tabs.number" :id="tabs.id">
              {{tabs.game}}
            </button>
          </h5>
        </div>
        <div :id='tabs.number' class="collapse" :aria-labelledby="tabs.heading" data-parent="#accordionExample">
          <div class="card-body">
            <div class="game-name" :id="tabs.id">
               <!-- creates articles based on user selected game -->
                <div v-for="article in info" class="article-card">
                    <section class="card bg-light">
                        <h2 class="card-tile">{{article.title}}</h2>
                        <h3 class="card-author">by {{article.author}}</h3>
                        <h5 class="card-time">{{article.publishedAt}}</h5>
                        <img :src='article.urlToImage' @error:src='src/assets/no.svg' alt="" class="card-img img-thumbnail">
                        <p class="card-description">{{article.description}}</p>
                        <a class="card-url bg-primary" :href="article.url" target="_blank" data-toggle="tooltip"
                        data-placement="bottom" :title='article.url'>{{article.source.name}}</a>
                    </section>  
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default({
  data () {
    return {
      // sets info as null so it can be filled with an array later
      info: null,
      userInput: null,
      // gets todays day
      day: new Date().getDate(),
      // gets month, add one because months start at 0
      month: new Date().getMonth() + 1 ,
      accordion:[
          {game:'FORTNITE', id:'fortnite',number: 'collapseTwo', heading: 'headingTwo', pound: '#collapseTwo'},
          {game:'MINECRAFT', id:'minecraft',number: 'collapseThree', heading: 'headingThree', pound: '#collapseThree'},
          {game:'GTA V', id:'gta',number: 'collapseFour', heading: 'headingFour', pound: '#collapseFour'},
          {game:'DOTA', id:'dota',number: 'collapseFive', heading: 'headingFive', pound: '#collapseFive'},
          {game:'OVERWATCH', id:'overwatch',number: 'collapseSix', heading: 'headingSix', pound: '#collapseSix'},
        ]
    }
  },
  computed: {
    url : function (){
      // creates url for API based on month and day, that way news are not older than a week, in this case it also takes into account user input (searched game)
      return `https://newsapi.org/v2/everything?q=${this.userInput}%20video%20games&from=2019-0${this.month}-${this.day-7}&to=2019-0${this.month}-${this.day}&sortBy=relevancy&pageSize=100&apiKey=3fcf435bb9774657a345c3fed0a0462d`
    },
  },
  methods: {
    click: function(){
        // used axios for API
        axios
        // gets url previously created
        .get(this.url)
        // sets articles as an array in info
        .then(response => (this.info = response.data.articles))
    },
  }
})
</script>

<style lang="scss">
  @import "./styles/_variables.scss";
  @import "./styles/_general.scss";


// SEARCHBAR -------------------------------------------------------------------------------------------------------------------------------
.searchbar {
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;
}

.accordion {
  position: relative;
  z-index: 100;
}

// ACCORDION --------------------------------------------------------------------------------------------------------------------------------
.accordion {
  margin-bottom: 50px;

  .card-body {
    background-color: $secondary;
    position: relative;

    .card {
      margin-top: 0;
      overflow: hidden;
    }
  }

  .btn {
    color: $text;
    font-weight: bold;

    &:hover {
      text-decoration: none;
      color: $details;
      cursor: pointer;
    }

    &:focus {
      text-decoration: none;
      color: $details;
      outline: none;
    }
  }
}

// BACKGROUNDS -------------------------------------------------------------------------------------------------------------------------------------
.accordion .card-body::before {
  background-image: url("../assets/bg.jpg");
  background-size: repeat;
  background-attachment: fixed;
  background-position: center;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: .4;
  margin: 0;
  padding: 0;

}

.card-header {
  background-color: $background;
}
</style>
