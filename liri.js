require("dotenv").config();


//import keys.js to acces sportify api key
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var doThis = process.argv[2];

switch (doThis){
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
var artist = process.argv[3];
var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

requestAnimationFrame(queryURL, function (error, response, body){
    
})

//spotify-this-song
    
//movie-this

//do-what-it-says

