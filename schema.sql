DROP DATABASE IF EXIST bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT(255) NOT NULL,
product_name VARCHAR (30),
department_name VARCHAR (30),
price INT (255) NOT NULL,
stock_quantity INT (255) NOT NULL,
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("iphone 6", "electronics", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Sup bro?", "Ruby Pradhan");

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Sup bro?", "Ruby Pradhan");

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Sup bro?", "Ruby Pradhan");