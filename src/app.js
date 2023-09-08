const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

//Load the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

//Invalid URL
app.use((req, res) => {
    res.redirect('/');
});

//Start the server and listen on specified port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});