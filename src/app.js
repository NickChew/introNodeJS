
const yargs = require('yargs');
const Movie = require('./utils/index');

function app (input) {
    if (input.add) {
        // code for adding just one movie
        const movieName = input.title;
        const actorName = input.actor;
        const directorname = input.director;
        const newMovie = new Movie(movieName,actorName,directorname);
        newMovie.add();
} else if (input.addmulti) {
            // code for adding four movies
            const movie1 = new Movie(input.title1,input.actor1,input.director1);
            movie1.add();
            const movie2 = new Movie(input.title2,input.actor2,input.director2);
            movie2.add();
            const movie3 = new Movie(input.title3,input.actor3,input.director3);
            movie3.add();
            const movie4 = new Movie(input.title4,input.actor4,input.director4);
            movie4.add();
} else {
        console.log ("Command not recognised");
        };
    };

app(yargs.argv);

// const Movie = require('./utils/index.js')

// function app (argument) {
//     switch (argument[2]) {
//         case "add":
//             // code to add a movie to an array goes here
//             const movieName = argument[3];
//             const actorName = argument[4];
//             const newMovie = new Movie(movieName,actorName);
//             newMovie.add();
//             break;
//         case "addmulti":
//             // code for adding two or more movies
//             const movie1Title = argument[3];
//             const movie1Actor = argument[4];
//             const movie1Length = argument[5];
//             const movie2Title = argument[6];
//             const movie2Actor = argument[7];
//             const movie2Length = argument[8];
//             const movie3Title = argument[9];
//             const movie3Actor = argument[10];
//             const movie3Length = argument[11];
//             const movie4Title = argument[12];
//             const movie4Actor = argument[13];
//             const movie4Length = argument[14];
//             const movie5Title = argument[15];
//             const movie5Actor = argument[16];
//             const movie5Length = argument[17];
//             const movie6Title = argument[18];
//             const movie6Actor = argument[19];
//             const movie6Length = argument[20];
//             const movie1 = new Movie(movie1Title,movie1Actor,movie1Length);
//             movie1.add();
//             const movie2 = new Movie(movie2Title,movie2Actor,movie2Length);
//             movie2.add();
//             const movie3 = new Movie(movie3Title,movie3Actor,movie3Length);
//             movie3.add();
//             const movie4 = new Movie(movie4Title,movie4Actor,movie4Length);
//             movie4.add();
//             const movie5 = new Movie(movie5Title,movie5Actor,movie5Length);
//             movie5.add();
//             const movie6 = new Movie(movie6Title,movie6Actor,movie6Length);
//             movie6.add();
//             break;
//         default:
//             console.log ("Command not recognised");
//             break;
//     }
// };

// app(process.argv);