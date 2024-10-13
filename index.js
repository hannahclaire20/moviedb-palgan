const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Create an Express app
const app = express();
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password', // replace with your password
  database: 'movie_db'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

// API Endpoints

// Get all movies
app.get('/movies', (req, res) => {
  db.query('SELECT * FROM movies', (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query error' });
    res.json(results);
  });
});

// Get a single movie by ID
app.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  db.query('SELECT * FROM movies WHERE id = ?', [movieId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database query error' });
    if (result.length === 0) return res.status(404).json({ error: 'Movie not found' });
    res.json(result[0]);
  });
});

// Create a new movie
app.post('/movies', (req, res) => {
  const { title, director, year, genre } = req.body;

  // Basic validation
  if (!title || !director || !year || !genre) {
    return res.status(400).json({ error: 'All fields (title, director, year, genre) are required' });
  }

  db.query('INSERT INTO movies (title, director, year, genre) VALUES (?, ?, ?, ?)', 
  [title, director, year, genre], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database insertion error' });
    res.status(201).json({ message: 'Movie added', movieId: result.insertId });
  });
});

// Update a movie by ID
app.put('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  const { title, director, year, genre } = req.body;

  // Check if movie exists
  db.query('SELECT * FROM movies WHERE id = ?', [movieId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database query error' });
    if (result.length === 0) return res.status(404).json({ error: 'Movie not found' });

    // Update only provided fields
    const updateData = {
      title: title || result[0].title,
      director: director || result[0].director,
      year: year || result[0].year,
      genre: genre || result[0].genre
    };

    db.query('UPDATE movies SET title = ?, director = ?, year = ?, genre = ? WHERE id = ?', 
    [updateData.title, updateData.director, updateData.year, updateData.genre, movieId], (err, result) => {
      if (err) return res.status(500).json({ error: 'Database update error' });
      res.json({ message: 'Movie updated' });
    });
  });
});

// Delete a movie by ID
app.delete('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  db.query('DELETE FROM movies WHERE id = ?', [movieId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database deletion error' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Movie not found' });
    res.json({ message: 'Movie deleted' });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});