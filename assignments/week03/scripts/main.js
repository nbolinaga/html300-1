// gets JSON file and gives it var "data"
$.getJSON( "data/data.json", function( data ) {
    // console log array for testing
    console.log(data);
    // uses map to do function for each object on the array
    data.map(function(el){
        // creates div with class employee-card
        const card = document.createElement('div');
        card.setAttribute('class', 'employee-card');
        // sets the created div inside the body
        document.querySelector('body').appendChild(card);
        // sets HTML code for each employee card
        card.innerHTML = 
        `<section class="employee-card-main">
            <img src=${el.image} alt="" class="employee-card-main-img">
            <h2 class="employee-card-main-title">${el.name}</h2>
            <p class="employee-card-main-sub">${el.jobTitle}</p>
        </section>
        <aside class="employee-card-aside">
            <ul>
            <li><b>Company:</b> ${el.Company}</li>
            <li><b>Experience:</b> ${el.Experience}</li>
            <li><b>School:</b> ${el.School}</li>
            <li><b>Major:</b> ${el.Major}</li>
            <li><b>Email:</b> ${el.Email}</li>
            <li><p><img src="images/linkedin.svg" alt="linkedin logo"> ${el.LinkedInUrl}</p></li> 
            </ul>
        </aside>`
    });
  });