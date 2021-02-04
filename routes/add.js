var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var obj = new Object();
	obj.name = name;
	obj.description = description;
	obj.imageURL = "https://loremflickr.com/400/400";
	console.log(JSON.stringify(obj));
	data.friends.push(obj);
	response.render('index', data);	
}