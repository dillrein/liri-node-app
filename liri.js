require("dotenv").config();
var request = require("request");
var Spotify = require('node-spotify-api');
var bandsintown = require('bandsintown')('codingbootcamp');
var moment = require("moment");
var fs = require("fs");

//import keys.js to acces sportify api key
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var doThis = process.argv[2];
var search = process.argv.slice(3).join(" ");


//taking commands to run function
switch (doThis) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        music();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doWhat();
        break;
};
//concert-this

function concert() {
    //console.log("concert search ran");
    var artist = search;
    bandsintown.getArtistEventList(artist)
        .then(function (events) {
            //console.log(events);
            for (i = 0; i <= events.length; i++) {
                console.log("Venue Name: " + events[i].venue.name);
                console.log("Venue Location: " + events[i].venue.city + ", " + events[i].venue.country);
                var date = events[i].datetime;
                var dateformat = ("YYYY-MM-DDT00:00:00")
                var convertedDate = moment(date, dateformat);

                console.log("Date: " + moment(convertedDate).format("MM/DD/YYYY"));
            }
        })
};


//spotify-this-song

function music() {
    console.log("Spotifty search ran")
    spotify.search({ type: 'track', query: search, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      //console.log(JSON.stringify(data, null, 2)); 
      console.log(JSON.stringify(data.tracks.items.artists.name))//song
      console.log(JSON.stringify("Artists: " + data.tracks.items.album.name))//artist
      console.log(JSON.stringify("Preview: " + data.tracks.items.preview_urls))//preview
      //console.log(JSON.stringify(data.tracks.))//album
      });

}

//movie-this
function movie() {
    var movie = search;
    if (movie === "") {
        movie = "Mr. Nobody";
        movieSearch();
    } else movieSearch();

    function movieSearch() {
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
                console.log("Country: " + JSON.parse(body).Country);
                //  Language of the movie.
                console.log("Language: " + JSON.parse(body).Language);
                //  Plot of the movie.
                console.log("Plot: " + JSON.parse(body).Plot);
                //  Actors in the movie.
                console.log("Actors: " + JSON.parse(body).Actors);
            }
        });
    }
}

//do-what-it-says
function doWhat() {
    //console.log("do what it says");
    fs.readFile("random.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
          }
        var output = data.split(",")
        search = output[1];
        music();

    })
    
}

