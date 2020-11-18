const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about-us.html'));
});
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, '/menu.pdf'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));
