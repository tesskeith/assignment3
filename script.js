let allMovies = [];



const moviesElement = document.querySelector("#result");

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
    subText("A new movie is added");
  

}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = (movies) => {

    subText("Printing all movies....");

    // Iterate through the allMovies array and print each movie to the webpage.
    for (const movie of allMovies) {
      // Create a new <p> element to display the movie.
      const movieElement = document.createElement("p");
  
      // Set the text of the <p> element to the movie's title.
      movieElement.textContent =  movie.title + ", Rating of: " + movie.rating + ", havewatched: " + movie.haveWatched;
  
      // Append the <p> element to the movies element on the HTML webpage.
      moviesElement.appendChild(movieElement);
    }

    subText(`You have ${allMovies.length} movies in total`);

}
  


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let matches = 0;
    subText(`Printing movie that has a rating higher than ${rating}`);

    allMovies.forEach((movie) => {
        if(movie.rating > rating) {
         // Create a new <p> element to display the movie.
        const movieElement = document.createElement("p");
  
        // Set the text of the <p> element to the movie's title.
        movieElement.textContent = movie.title + " , Rating of: " + movie.rating + " , havewatched: " + movie.haveWatched;
  
        // Append the <p> element to the movies element on the HTML webpage.
        moviesElement.appendChild(movieElement);
                matches++;
        }   
    });
    subText(`In total, there are ${matches} matches`);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (const movie of allMovies) {
        if (movie.title === title) {
          movie.haveWatched = !movie.haveWatched; 
          break; 
        }
    }

    subText(`Changing the status of the movie....`);
}

function addLine() {
    // Create a new <hr> element.
    const lineElement = document.createElement("line");
    // Set the text of the <p> element to the movie's title.
    lineElement.textContent = "-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  ";

    // Append the <hr> element to the body of the HTML document.
    moviesElement.appendChild(lineElement);
  }

  function subText(text) {
    // Create a new <div> element.
    const subtext = document.createElement("h4");
    subtext.textContent = text;
  
    // Append the <div> element to the body of the HTML document.
    moviesElement.appendChild(subtext);
  }


  function addText(text) {
    // Create a new <div> element.
    const divElement = document.createElement("div");
  
    // Set the text of the <div> element.
    divElement.textContent = text;
  
    // Append the <div> element to the body of the HTML document.
    moviesElement.appendChild(divElement);
  }
////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);


// Create a new <p> element to display the movie.
const lines = document.createElement("p");
  

/*replace console.log with display on web page*/
addLine();
subText("Running program......");
addLine();
printMovies();



let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
addLine();
addMovie(movie1);
addLine();
moviesElement.appendChild(lines);



changeWatched("Spiderman");
/*replace console.log with display on web page*/
addLine();

printMovies();

/*replace console.log with display on web page*/
addLine();

changeWatched("Spiderman");
/*replace console.log with display on web page*/
addLine();

printMovies();
/*replace console.log with display on web page*/
addLine();

highRatings(3.5);