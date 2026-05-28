// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static('public'));

// In-memory task storage
let tasks = [
    {
        id: 1,
        title: "Study for Math Test",
        description: "Revise Chapter 1 - 3",
        dueDate: "2026-05-30",
        completed: false
    }
];

// Home page
app.get('/', (req, res) => {
    res.render('index', { tasks });
});

// TASK: Define appropriate routes below
// ---------------------------------------------------

//Define a route to render the index page
app.get('/', (req, res) => {
    res.render('index');
});

// ---------------------------------------------------

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});