CREATE DATABASE "MyShop";

CREATE TABLE "Suppliers" 
(
    "SupplierID"   SERIAL PRIMARY KEY,
    "SupplierName" VARCHAR(255) NOT NULL,
    "City" VARCHAR(255) NOT NULL,
    "Country" VARCHAR(255) NOT NULL
);

CREATE TABLE "Categories" 
(
    "CategoryID"   SERIAL PRIMARY KEY,
    "CategoryName" VARCHAR(255) NOT NULL,
    "Description" TEXT NOT NULL
);

CREATE TABLE "Products" 
(
    "ProductID"   SERIAL PRIMARY KEY,
    "ProductName" VARCHAR(255) NOT NULL,
    "Price" NUMERIC NOT NULL,
    "SupplierID" INTEGER REFERENCES "Suppliers" ("SupplierID") ON DELETE NO ACTION ON UPDATE CASCADE,
    "CategoryID" INTEGER REFERENCES "Categories" ("CategoryID") ON DELETE NO ACTION ON UPDATE CASCADE
);

INSERT INTO "Suppliers" ("SupplierName", "City", "Country")
VALUES 
('Exotic Liquid', 'London', 'UK'),
('New Orleans Cajun Delights', 'New Orleans', 'USA'),
('Grandma Kelly’s Homestead', 'Ann Arbor', 'USA'),
('Tokyo Traders', 'Tokyo', 'Japan'),
('Cooperativa de Quesos ‘Las Cabras’', 'Oviedo', 'Spain'),
('Norske Meierier’', 'Lviv', 'Ukraine');

INSERT INTO "Categories" ("CategoryName", "Description") 
VALUES 
('Beverages', 'Soft drinks, coffees, teas, beers, and ales'),
('Condiments', 'Sweet and savory sauces, relishes, spreads, and seasonings'),
('Confections', 'Desserts, candies, and sweet breads'),
('Dairy Products', 'Cheeses'),
('Grains/Cereals', 'Breads, crackers, pasta, and cereal');

INSERT INTO "Products" ("ProductName","Price","SupplierID","CategoryID") 
VALUES 
('Green tea', 10, '6','1');