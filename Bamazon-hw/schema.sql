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