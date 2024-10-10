// Create web server
// Start server
// Create comments route
// Create comments array
// Create comments GET route
// Create comments POST route
// Create comments DELETE route
// Create comments PUT route

// Load express
const express = require('express');
const app = express();
const port = 3000;

// Load body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Load comments array
let comments = [];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json({ message: 'Comment added' });
});

// DELETE /comments
app.delete('/comments', (req, res) => {
    comments = [];
    res.json({ message: 'Comments deleted' });
});

// PUT /comments
app.put('/comments', (req, res) => {
    comments = req.body;
    res.json({ message: 'Comments updated' });
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Test with Postman
// GET http://localhost:3000/comments
// POST http://localhost:3000/comments
// DELETE http://localhost:3000/comments
// PUT http://localhost:3000/comments
