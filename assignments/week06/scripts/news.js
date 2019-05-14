$(document).ready(function () {
  // gets current date
  var dateObj = new Date();
  // sets only the day as a variable
  var day = dateObj.getUTCDate();
  console.log(day);

  // creates url to fecth API depending on the day
  var url = 'https://newsapi.org/v2/everything?' +
    'q=video games&' +
    // day-7 to get news that are no more than a week old
    `from=2019-05-${day-7}&` +
    // to the days date
    `to=2019-05-${day}&` +
    'sortBy=relevancy&' +
    // gets the 100 most relevant articles
    'pageSize=100&' +
    'apiKey=3fcf435bb9774657a345c3fed0a0462d';

  // requests url data and sets it as variable req
  var req = new Request(url);
  // check req(URL) on console
  console.log(req);

  // gets JSON file from url
  $.getJSON(req.url, function (data) {
    // check JSON on console
    console.log(data);
    // extract only the articles from array and set it to variable article
    var articles = data.articles;
    // check articles on console
    console.log(articles);

    // uses map function to create a article card for each article in the array
    articles.map(function (el, key) {
      // creates div with class card
      const card = document.createElement('div');
      card.setAttribute('class', 'card mt-3');
      // sets the created div inside the container
      document.querySelector('.card-columns').appendChild(card);
      // sets HTML code for each article card
      card.innerHTML =
        `<img class="card-img-top img-thumbnail" src="${el.urlToImage}" onerror=src='assets/no.svg' alt="Card image cap">
                <div class="card-body m-3">
                    <h5 class="card-title m-3 text-primary">${el.title}</h5>
                    <h5 class="card-subtitle m-3" text-light>by ${el.author}</h5>
                    <p class="card-text m-3">${el.description}</p>
                    <a href="${el.url}"  target="_blank" class="btn btn-primary" data-toggle="tooltip"
                    data-placement="bottom" title="${el.url}">${el.source.name}</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${el.publishedAt}</small>
                </div>`
    });
    // sets tooltip for created elements (tooltip.js doesnt work in this case)
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  });
});