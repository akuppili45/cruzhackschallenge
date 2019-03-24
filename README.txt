This program allows the user to make backend REST API requests to get and post user data for the hackathon. 

In order to run this program, the user needs to have Node.js, MongoDB, and a HTTP client. Httpie would be recommended. (https://httpie.org/)

To start the server, clone the repo, and run the command 
	node index.js

If you are using HTTPie to test the API make a post request by typing
	http POST localhost:8080/api/user name=[name] id=[id] major=[major] school=[school] age=[age] email=[email]
Make a GET request to see all hackers by running
	http GET localhost:8080/api/user
To return one hacker use 
	http GET localhost:8080/api/user/:id