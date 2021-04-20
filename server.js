
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

// API Routes
app.get('/api/tables', (req, res) => res.json(reservations));
app.get('/api/tables/:id', (req, res) => {
  const chosen = req.params.id;
  console.log(chosen);
});

app.post('/api/tables', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;
  console.log(newTable);
  reservations.push(newTable);
  res.json(reservations);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
