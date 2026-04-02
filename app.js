const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CHANGE THIS IP (VERY IMPORTANT)
const db = mysql.createConnection({
  host: "172.31.68.72",   // 👈 YOUR EC2 PRIVATE IP
  user: "swiggyuser",
  password: "password123",
  database: "swiggy"
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("MySQL Connected ✅");
});

// Serve static files
app.use(express.static(__dirname));

// Get food data
app.get('/food', (req, res) => {
  db.query("SELECT * FROM food", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching data");
    }
    res.json(result);
  });
});

// Place order
app.post('/order', (req, res) => {
  const { name, price } = req.body;

  db.query(
    "INSERT INTO orders (food_name, price) VALUES (?, ?)",
    [name, price],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error placing order");
      }
      res.send("Order Placed Successfully ✅");
    }
  );
});

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
