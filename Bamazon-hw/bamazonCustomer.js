var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "item_id",
            type: "Input",
            message: "Item-id, please",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        })
        .then(function (answer) {
            if (start === true) {
                inquirer
                .prompt({
                    name: "quantity",
                    type: "Input",
                    message: "How many do you want?",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                        console.log("Insufficient quantity!")
                    }
                })
            }
        })
}