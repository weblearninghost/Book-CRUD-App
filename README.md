# Book-CRUD-App

Basic CRUD application of the book management system
Prerequisites: Node, MongoDB installed.
How to start?
step 1 : clone the code from main branch
step 2 : install dependencies with command -> npm install
step 3 : run the code using command -> node index.js
step 4 : test the API with the help of Postman using following guidelines

Create Book API -> URL(POST) ->http://localhost:3000/api/book
                   body->{
                     "title": "The Great Gatsby",
    "author":"F. Scott Fitzgerald",
    "summary":"The Great Gatsby is one of the most exciting yet sorrowful books you will ever read. The novel was published in 1925 and perfectly shows how decadent the Jazz Age was. It will teach you a valuable lesson that not everyone is fortunate in love"
                   }

Get All Books API -> URL(GET)->http://localhost:3000/api/book
Delete Book API ->URL(DELETE)->http://localhost:3000/api/book/:id
Update Book API ->URL(PATCH)->http://localhost:3000/api/book/update/:id
                        