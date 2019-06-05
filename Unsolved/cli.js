// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

// Bringing in NPM dependencies
var TV = require("./tv");

// variable to access Spotify keys
// var spotify = new spotify(keys.spotify);

// Store command
var command = process.argv[2];

// Error handling
if (!command) {
    command = "show";
}

// Take in command line argument and store the desired song, artist etc... as a variable 'request'
var request = process.argv.slice(3).join(" ");

console.log("So far we have your command: " + command + "\nand your request: " + request + "\n");

// Create a new TV object
var tv = new TV();

if (!request) {
  request = "Andy Griffith";
}

if (command === "show") {
  console.log("Searching for TV Show");
  tv.findShow(request);
} else {
  console.log("Searching for TV Actor");
  tv.findActor(request);
}
