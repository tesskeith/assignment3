let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title; // A string representing the movie's title
        this.rating = rating; // A number representing the movie's rating
        this.haveWatched = haveWatched; // A boolean representing whether the movie has been watched or not
      }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);

  
    // Display the message when a new movie is added
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    resultDiv.appendChild(messageElement);
  

}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = (movies) => {
    let totalMovies = 0;

    movies.forEach((movie) => {
    totalMovies++;

    console.log(`Total number of movies: ${totalMovies}`);

    const info = `Title: ${movie.title}, Rating: ${movie.rating}, Watched: ${movie.haveWatched}`;
    const movieElement = document.createElement("p");
    movieElement.textContent = info;
    resultDivDiv.appendChild(movieElement);
});
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let matches = 0;

    allMovies.forEach((movie) => {
        if(movie.rating > rating) {
            matches++;
        }
    

    console.log(`Total number of movies: ${matches}`);
});
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (const movie of allMovies) {
        if (movie.title === title) {
          movie.haveWatched = !movie.haveWatched; 
          break; 
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);