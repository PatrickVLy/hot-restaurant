
const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const reservations = [];


// Data
const table1 = {
  name: 'Patrick',
  phone: '123456789',
  email: 'patrick@email.com',
  ID: 2000,
};

const table2 = {
  name: 'Erick',
  phone: '555555555',
  email: 'Erick',
  ID: 3000
};





// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// Displays all characters
app.get('/api/tables', (req, res) => res.json(reservations));

// Displays a single character, or returns false
app.get('/api/tables/:table', (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);



  app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();
    console.log(newTable);
  
    reservations.push(newTable);
    res.json(reservations);
  });
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
