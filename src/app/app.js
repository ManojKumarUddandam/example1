const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.json());

// Replace the following URL with your MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';

let db;
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log('Connected to MongoDB');
  db = client.db(dbName);
});

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  db.collection('formData').insertOne(formData, (err, result) => {
    if (err) throw err;
    console.log('Form data saved to database');
    res.status(200).send('Form data saved to database');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});