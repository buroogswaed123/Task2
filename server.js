require('dotenv').config();
const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

// GET כל המאמרים
app.get('/articles', (req, res) => {
  db.query('SELECT * FROM articles', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('שגיאה במסד הנתונים');
    }
    res.json(results);
  });
});

// הרצת השרת
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
