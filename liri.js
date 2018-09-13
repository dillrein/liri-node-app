require("dotenv").config();
var request = require("request")

//import keys.js to acces sportify api key
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var doThis = process.argv[2];

switch (doThis) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doWhat();
        break;
};
//concert-this
//var artist = process.argv[3];
//var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//requestAnimationFrame(queryURL, function (error, response, body) {

//})

//spotify-this-song

//movie-this
function movie(){
    var movie = process.argv[3];
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            //  Title of the movie.
            console.log("Title: " + JSON.parse(body).Title);
            //  Year the movie came out.
            console.log("Year: " + JSON.parse(body).Year);
            //  IMDB Rating of the movie.
            console.log("OMDB Rating: " + JSON.parse(body).imdbRating);
            //  Rotten Tomatoes Rating of the movie.
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1]);
            //  Country where the movie was produced.
            console.log("Country " + JSON.parse(body).Country);
            //  Language of the movie.
            console.log("Language: " + JSON.parse(body).Language);
            //  Plot of the movie.
            console.log("Plot: " + JSON.parse(body).Plot);
            //  Actors in the movie.
            console.log("OMDB Rating: " + JSON.parse(body).Actors);
        }
    });
}

//do-what-it-says

