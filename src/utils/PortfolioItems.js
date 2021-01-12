// imports
import issPreview from "../assets/images/iss-tracker-preview.png";
import coffeeRaterPreview from "../assets/images/coffee_rater_preview.png";

// show case items
const showcaseItems = [
    {
        image: issPreview,
        title: "ISS Tracker",
        text: "A site that gets International Space Station data via Ajax calls and displays it to the user with a map of the current coordinates."
        + " The ISS data is from WhereTheISS.At and Open-Notify.Org, and map used is the Google Maps service. The page is styled using Semantic UI.",
        tech: "HTML / CSS / JS / Jquery (Ajax) / Semantic UI",
        deployedUrl: "https://arbdt.github.io/bcs-project-1/",
        repoUrl: "https://www.github.com/arbdt/bcs-project-1/"
    },
    {
        image: coffeeRaterPreview,
        title: "Coffee Rater",
        text: "A Heroku-hosted MVC site that allows visitors to upload coffees and reviews for coffees to a MySQL/JawsDB database.",
        tech: "HTML / CSS / JS / Jquery (Ajax) / Express.js / Handlebars / Sequelize / MySQL",
        deployedUrl: "https://salty-forest-45628.herokuapp.com/",
        repoUrl: "https://github.com/dcon0610/Project2"
    }
];

// other items
const otherItems = [];

//export items
export {showcaseItems, otherItems};