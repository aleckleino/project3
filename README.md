This is Project 3 Book Database. Project will launch itself on the port 3000 and the best experience you can get by using Postman. Before opening the project in postman please start the app by runing 'node app.js' or 'nodemon app.js' in an terminal.

Get all items by pressing GET on localhost:3000/
Enter items ID after the address localhost:3000/{_id} and press GET to get an spesific item
To add an new item chose POST and add an new item to body in the form: { "title": "title of a book", "author": "author of a book", "released": "release year of a book" }
To delete an item chose DELETE and enter the items ID after localhost:3000/
Update an item by parsing updated data to body and press PATCH