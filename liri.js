require("dotenv").config();


//import keys.js to acces sportify api key
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);