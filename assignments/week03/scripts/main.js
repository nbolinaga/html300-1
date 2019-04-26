const employee = [
    {
        "name": "Steve Smith",
        "jobTitle": "Project Manage",
        "Company": "Front End Dev Co",
        "Experience": "3 years",
        "School": "UW",
        "Major": "Marketing",
        "Email": "steve@fedc.com",
        "LinkedInUrl": "steve.linkedinprofile.com"
    }, {
        "name": "Aaron Katz",
        "jobTitle": "Full Stack Developer",
        "Company": "Web Sites and More",
        "Experience": "5 years",
        "School": "SU",
        "Major": "Computer Science",
        "Email": "aaronNotMyEmail@uw.com",
        "LinkedInUrl": "aaron.linkedinprofile.com"
    }, {
        "name": "Kyle Hendricks",
        "jobTitle": "Starting Pitcher",
        "Company": "Chicago Cubs",
        "Experience": "12 years",
        "School": "USC",
        "Major": "Pitching",
        "Email": "kyleH@cubs.com",
        "LinkedInUrl": "kyle.linkedinprofile.com"
    },
    {
        "name": "Michael Jordan",
        "jobTitle": "Point Guard",
        "Company": "Chicago Buls",
        "Experience": "20 years",
        "School": "UNC",
        "Major": "Trash Talking",
        "Email": "mJordan@bulls.com",
        "LinkedInUrl": "mJordan.linkedinprofile.com"
    }
]


let card = employee.map(function (el) {
    let person = `
        <article>
        <ul>
        <li class="person__name">${el.name}</li>
        <li class="person__job">${el.jobTitle}</li>
        <li class="person__company">Company: ${el.Company}</li>
        <li class="person__exp">Experience: ${el.Experience}</li>
        <li class="person__school">School: ${el.School}</li>
        <li class="person__major">Major: ${el.Major}</li>
        <li class="person__email">Email: ${el.Email}</li>
        <li class="person__li">${el.LinkedInUrl}</li>
        </ul>
        </article>
        `;
});

$(document).ready(function () {
    $(".employee-card").append(card);
    $(person).appendTo(".employee-card");
});