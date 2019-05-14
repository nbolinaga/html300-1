$('#button').click(function () {
    myFunction();
});

function myFunction() {
    // clears prior search
    $('.news').empty();

    // gets value of searchbar aka what users searches for and sets variable
    var result = $('#myInput').val();
    console.log(result);
    // gets current date
    var dateObj = new Date();
    // sets only the day as a variable
    var day = dateObj.getUTCDate();
    console.log(day);
    // creates url to fecth API depending on what the users inputed and the day
    var url =
        'https://newsapi.org/v2/everything?' +
        `q="${result}"+"game"&` +
        `q=video games&` +
        `from=2019-05-${day-7}&` +
        `from=2019-05-${day}&` +
        'sortBy=relevancy&' +
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
            card.setAttribute('class', 'article-card');
            // sets the created div inside the container .news
            document.querySelector('.news').appendChild(card);
            // sets HTML code for each employee card
            card.innerHTML =
                `<section class="card bg-light" id="number${String(key)}">
                <h2 class="card-title">${el.title}</h2>
                <h3 class="card-author">by ${el.author}</h3>
                <h5 class="card-time">${el.publishedAt}</h5>
                <img src=${el.urlToImage} onerror=src='no.svg'; alt="" class="card-img">
                <p class="card-description">${el.description}</p>
                <a class="card-url bg-primary" href="${el.url}" target="_blank">${el.source.name}</a>
            </section>`
        });
    });
};


// this is for the pre set games
$('.preMade').click(function () {
    // set the id of clicked button as variable
    var game = $(this).attr('id');
    console.log(game);

    // clears prior search
    $(`.${game}`).empty();

    // FROM HERE IS PRETTY MUCH THE SAME AS THE FUNCTION ABOVE
    var dateObj = new Date();
    var day = dateObj.getUTCDate();
    console.log(day);

    var url =
        'https://newsapi.org/v2/everything?' +
        `q="${game}"+"game"&` +
        `q=video games&` +
        `from=2019-05-${day-7}&` +
        `from=2019-05-${day}&` +
        'sortBy=relevancy&' +
        'pageSize=100&' +
        'apiKey=3fcf435bb9774657a345c3fed0a0462d';

    var req = new Request(url);
    console.log(req);

    $.getJSON(req.url, function (data) {
        console.log(data);
        var articles = data.articles;
        console.log(articles);
        articles.map(function (el, key) {
            // creates div with class card
            const card = document.createElement('div');
            card.setAttribute('class', 'article-card');
            // sets the created div inside the div#game
            document.querySelector(`div#${game}`).appendChild(card);
            // sets HTML code for each card
            card.innerHTML =
                `<section class="card bg-light" id="number${String(key)}">
                <h2 class="card-title">${el.title}</h2>
                <h3 class="card-author">by ${el.author}</h3>
                <h5 class="card-time">${el.publishedAt}</h5>
                <img src=${el.urlToImage} onerror=src='assets/no.svg'; alt="" class="card-img img-thumbnail">
                <p class="card-description">${el.description}</p>
                <a class="card-url bg-primary" href="${el.url}" target="_blank" data-toggle="tooltip"
                data-placement="bottom" title="${el.url}">${el.source.name}</a>
            </section>`
        });
        // sets tooltip for created elements (tooltip.js doesnt work in this case)
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    });
});