const express = require('express');
const path = require('path');

const app = express();

// API route
app.get('/api', (req, res) => {
    res.json({ message: "Hello from AWS CI/CD" });
});

// Serve React build files
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all (SAFE VERSION)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});