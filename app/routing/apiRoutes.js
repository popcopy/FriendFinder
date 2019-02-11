// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on all possible friends
// ===============================================================================
const path = require('path');
const friends = require('../data/friends.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// ---------------------------------------------------------------------------
	// Note the code here. Our "server" will respond to a user's survey result
	// Then compare those results against every user in the database.
	// It will then calculate the difference between each of the numbers and the user's numbers.
	// It will then choose the user with the least differences as the "best friend match."
	// In the case of multiple users with the same result it will choose the first match.
	// After the test, it will push the user to the database. 
	app.post("/api/friends", function (req, res){
        let newFriend = req.body;
        console.log(newFriend);
        let userAnswers = newFriend.scores;
        console.log(userAnswers);

        //matchup
        let name = '';
        let photo = '';
        let totalDifference = 10000;

        for (let i = 0; i < friends.length; i++) {
            let difference = 0;
            for (let x = 0; x < userAnswers.length; x++) {
                difference += Math.abs(friends[i].scores[x] - userAnswers[x]);
            }

            if (difference < totalDifference) {
                console.log(friends[i]);
                totalDifference = difference;
                name = friends[i].name;
                photo = friends[i].photo;
            }
        }

        friends.push(newFriend);
        res.json({status: 'OK', name: name, photo: photo});
    });
		
}