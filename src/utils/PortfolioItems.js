// imports
import issPreview from "../assets/images/iss-tracker-preview.png";
import coffeeRaterPreview from "../assets/images/coffee_rater_preview.png";
import passwordPreview from "../assets/images/preview-pwordgenerator.png";
import quizPreview from "../assets/images/preview-codequiz.png";
import schedulerPreview from "../assets/images/preview-scheduler.png";
import weatherDashPreview from "../assets/images/weather-dash-preview.png";
import notesPreview from "../assets/images/note-page-preview.png";
import burgerPreview from "../assets/images/eat-da-burger-preview.png";
import workoutPreview from "../assets/images/workout-tracker-preview.png"

// show case items (major projects)
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
        repoUrl: "https://github.com/dcon0610/Project2/"
    }
];

// other items (lesser projects and assignments)
const otherItems = [
    {
        image: passwordPreview,
        title: "Password Generator",
        text: "A JavaScript-based password generator. Alert/prompt/confirm dialogs are used to allow the user to specify parameters such as allowed character sets and length."
        + " A password is generated based on the user's selections and displayed on the page.",
        tech: "HTML / CSS / JS",
        deployedUrl: "https://arbdt.github.io/javascript-password-generator/",
        repoUrl: "https://www.github.com/arbdt/javascript-password-generator/"
    },
    {
        image: quizPreview,
        title: "JavaScript Coding Quiz",
        text: "A JavaScript-based coding quiz. It makes use of intervals for time tracking and saves scores (time remaining) in local storage.",
        tech: "HTML / CSS / JS / Bootstrap / Local Storage",
        deployedUrl: "https://arbdt.github.io/code-quiz/",
        repoUrl: "https://www.github.com/arbdt/code-quiz/"
    },
    {
        image: schedulerPreview,
        title: "Workday Schedule",
        text: "A JavaScript-based work day schedule app. Local storage is used to hold the entries."
        + " Moment.js is used to display the current day and date, and to color each time slot according to past/future/present.",
        tech: "HTML / CSS / JS / Local Storage / Moment.js / Bootstrap",
        deployedUrl: "https://arbdt.github.io/work-day-scheduler/",
        repoUrl: "https://www.github.com/arbdt/work-day-scheduler/"
    },
    {
        image: weatherDashPreview,
        title: "Weather Dashboard",
        text: "A page that displays current and forecast weather data for a location entered by the user."
        + " Entered locations are saved in local storage for later access. JQuery Ajax is used to get the data from APIs supplied by Open Weather Map."
        + " Moment.js is used for date display and manipulation.",
        tech: "HTML / CSS / JS / Jquery (Ajax) / Local Storage / Moment.js / Bootstrap",
        deployedUrl: "https://arbdt.github.io/weather-dashboard/",
        repoUrl: "https://www.github.com/arbdt/weather-dashboard/"
    },
    {
        image: notesPreview,
        title: "Note Taker",
        text: "A web app that uses Express routing to display, save, update, or delete notes."
        + " The notes are saved to and read from a JSON file stored on the server.",
        tech: "HTML / CSS / JS / Node.js / Express.js / Bootstrap",
        deployedUrl: "https://lit-inlet-27170.herokuapp.com/",
        repoUrl: "https://github.com/arbdt/express-note-app/"
    },
    {
        image: burgerPreview,
        title: "Eat Da Burger",
        text: "A MVC-paradigm web app that allows users to set burger items to 'devoured' or 'not devoured', and also to add a burger item."
        + " It uses Express for routing, Handlebars and Bootstrap for page layout and content, and MySQL to store the burger items."
        + " A custom ORM is used to interface between the database and the page.",
        tech: "HTML / CSS / JS / Node.js / Express.js / Handlebars / MySQL / Bootstrap",
        deployedUrl: "https://warm-atoll-82512.herokuapp.com/",
        repoUrl: "https://github.com/arbdt/burger/"
    },
    {
        image: workoutPreview,
        title: "Workout Tracker",
        text: "A web app that uses Express for routing  and MongoDB/Mongoose for data storage."
        + " It allows users to create workouts with cardio or resistance exercises and add them to the database. Users can also view statistics of past workouts.",
        tech: "HTML / CSS / JS / Node.js / Express.js / MongoDB / Mongoose",
        deployedUrl: "https://young-lowlands-32044.herokuapp.com/",
        repoUrl: "https://github.com/arbdt/nosql-workout-tracker/"
    }
];

//export items
export {showcaseItems, otherItems};