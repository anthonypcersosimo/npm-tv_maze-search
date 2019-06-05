var axios = require("Axios");
var fs = require("fs");

var TV = function() {
  this.findShow = function(request) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + request;
    axios.get(URL)
      .then(function(response) {
        var jsonData = response.data;

        var showData = [
          "Show: " + jsonData.name,
          "Genre(s): " + jsonData.genres.join(", "),
          "Rating: " + jsonData.rating.average,
          "Network: " + jsonData.network.name,
          "Summary: " + jsonData.summary
        ].join("\n\n");
        console.log(showData);
        
        fs.appendFile("log.txt", showData, function(err) {
          if (err) throw err;
        });
      });
  },
  this.findActor = function(request) {
    var URL = "http://api.tvmaze.com/search/people?q=" + request;
    axios.get(URL)
      .then(function(response) {
        var jsonData = response.data[0];
        var actorData = [
          "URL: " + jsonData.person.url,
          "Birthday: " + jsonData.person.birthday,
          "Did you just assume their gender?: " + jsonData.person.gender
        ].join("\n\n");
        console.log(actorData);

        fs.appendFile("log.txt", actorData, function(err) {
          if (err) throw err;
        });
      });
  };
};

module.exports = TV;