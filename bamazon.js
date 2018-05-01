var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM bamazon;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("bamazon", { quotes: data });
    });
  });
  
  app.post("/bamazon", function(req, res) {
    connection.query("INSERT INTO products (product) VALUES (?)", [req.body.movie], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });
  
  app.get("/bamazon", function(req, res) {
    connection.query("SELECT * FROM products;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.json(data);
    });
  });
  
  app.put("/bamazon/:id", function(req, res) {
    connection.query("UPDATE products SET products = ? WHERE id = ?", [req.body.movie, req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });
  
  app.delete("/baamazon/:id", function(req, res) {
    connection.query("DELETE FROM products WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  