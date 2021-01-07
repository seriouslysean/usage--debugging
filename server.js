const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// Static files
const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath + '/index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
