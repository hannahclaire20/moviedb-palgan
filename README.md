

HANNAH CLAIRE PALGAN - Movie CRUD API

This project is an Express API that manages a movie database. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of movies. Each movie has the following properties:

id (auto-generated, number)

title (string, required)

director (string, required)

year (number, required)

genre (string, required)

The API is connected to a MySQL database for data persistence.

API Endpoints

1. Get all movies



Route: GET /movies

Description: Returns a list of all movies in the collection.

Response:


[
  {
    "id": 1,
    "title": "The Matrix",
    "director": "Hannah Claire Palgan",
    "year": 1999,
    "genre": "Sci-Fi"
  },
  {
    "id": 2,
    "title": "The Godfather",
    "director": "Hannah Claire Palgan",
    "year": 1972,
    "genre": "Crime"
  },
  {
    "id": 3,
    "title": "Pulp Fiction",
    "director": "Hannah Claire Palgan",
    "year": 1994,
    "genre": "Crime"
  },
  {
    "id": 4,
    "title": "Interstellar",
    "director": "Hannah Claire Palgan",
    "year": 2014,
    "genre": "Sci-Fi"
  }
]

2. Get a movie by ID



Route: GET /movies/:id

Description: Returns a single movie by its ID.

Response:


{
  "id": 1,
  "title": "The Matrix",
  "director": "Hannah Claire Palgan",
  "year": 1999,
  "genre": "Sci-Fi"
}

3. Create a new movie



Route: POST /movies

Description: Creates a new movie in the collection.

Request Body:


{
  "title": "The Dark Knight",
  "director": "Hannah Claire Palgan",
  "year": 2008,
  "genre": "Action"
}

Response:


{
  "message": "Movie added successfully",
  "movie": {
    "id": 5,
    "title": "The Dark Knight",
    "director": "Hannah Claire Palgan",
    "year": 2008,
    "genre": "Action"
  }
}

4. Update a movie by ID



Route: PUT /movies/:id

Description: Updates an existing movie by its ID.

Request Body:


{
  "title": "Interstellar",
  "director": "Hannah Claire Palgan",
  "year": 2014,
  "genre": "Sci-Fi/Thriller"
}

Response:


{
  "message": "Movie updated successfully"
}

5. Delete a movie by ID



Route: DELETE /movies/:id

Description: Deletes a movie by its ID.

Response:


{
  "message": "Movie deleted successfully"
}

Installation

1. Clone the repository:



git clone https://github.com/HannahClairePalgan/Movie_db.git
cd Movie_db

2. Initialize npm and install dependencies:



npm init -y
npm install express mysql2 body-parser

3. Create the MySQL database and populate it with sample data:



Open MySQL:

mysql -u root -p

Create the database:

CREATE DATABASE movieDB;
USE movieDB;

Create the movies table:

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  genre VARCHAR(100) NOT NULL
);

Insert sample data:

INSERT INTO movies (title, director, year, genre) VALUES ('The Matrix', 'Hannah Claire Palgan', 1999, 'Sci-Fi');
INSERT INTO movies (title, director, year, genre) VALUES ('The Godfather', 'Hannah Claire Palgan', 1972, 'Crime');
INSERT INTO movies (title, director, year, genre) VALUES('Pulp Fiction', 'Hannah Claire Palgan', 1994, 'Crime');
INSERT INTO movies (title, director, year, genre) VALUES ('Interstellar', 'Hannah Claire Palgan', 2014, 'Sci-Fi');

4. Start the server:



node index.js

Your server should now be running on http://localhost:8080.

Usage with Insomnia

You can test the API using Insomnia by performing the following operations:

GET /movies: Retrieve all movies.

GET /movies/{id}: Retrieve a movie by its ID.

POST /movies: Create a new movie (provide a JSON body with movie data).

PUT /movies/{id}: Update a movie by its ID (provide a JSON body with updated data).

DELETE /movies/{id}: Delete a movie by its ID.


Error Handling

404 Not Found: If a movie is not found by its ID.

400 Bad Request: If required fields are missing when creating or updating a movie.


Conclusion

This project provides an easy-to-use API for managing a movie collection with the capability to create, read, update, and delete movies. The API is built with Node.js, Express, and MySQL, and it includes basic validation and error handling.


---

Repository: HANNAH CLAIRE PALGAN - Movie CRUD API

