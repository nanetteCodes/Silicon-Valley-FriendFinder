// Pull in required dependencies
var path = require('path');
// Import the list of friend entries
var friendsArray = require('../data/friends.js');
// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    for(var i = 0; i < newFriend.scores.length; i++) {
			if(newFriend.scores[i] == "1 (Strongly Disagree)") {
				newFriend.scores[i] = 1;
			} else if(newFriend.scores[i] == "5 (Strongly Agree)") {
				newFriend.scores[i] = 5;
			} else {
				newFriend.scores[i] = parseInt(newFriend.scores[i]);
			}
		}

		var differencesArray = [];

		for(var i = 0; i < friendsArray.length; i++) {

			var comparedFriend = friendsArray[i];
			var totalDifference = 0;

			for(var k = 0; k < comparedFriend.scores.length; k++) {
				var math = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
				totalDifference += math;
			}

			differencesArray[i] = totalDifference;
		}

		var bestFriendz = differencesArray[0];
		var diff = 0;

		for(var i = 1; i < differencesArray.length; i++) {
			if(differencesArray[i] < bestFriendz) {
				bestFriendz = differencesArray[i];
				diff = i;
			}
		}

		friendsArray.push(newFriend);

		res.json(friendsArray[diff]);
	})
}
