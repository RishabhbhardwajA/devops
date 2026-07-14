const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json()); // Add middleware to parse JSON
app.use(express.static(path.join(__dirname, 'public')));

// In-memory store for notes
let notes = [
    { id: 1, text: "Welcome to your Dockerized Notes App! 🐳" },
    { id: 2, text: "You can add new notes and delete them." }
];

// Get all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Add a new note
app.post('/api/notes', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Text is required" });
    }
    const newNote = {
        id: Date.now(),
        text: text
    };
    notes.push(newNote);
    res.status(201).json(newNote);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    notes = notes.filter(n => n.id !== id);
    res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
