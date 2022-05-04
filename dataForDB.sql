CREATE DATABASE "MyShop";

CREATE TABLE IF NOT EXISTS "Suppliers" 
(
    "SupplierID"   SERIAL PRIMARY KEY,
    "SupplierName" VARCHAR(255) NOT NULL,
    "City" VARCHAR(255) NOT NULL,
    "Country" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "Categories" 
(
    "CategoryID"   SERIAL PRIMARY KEY,
    "CategoryName" VARCHAR(255) NOT NULL,
    "Description" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "Products" 
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
('Chais', 18,1, 1),
('Chang', 19, 1, 1),
('Aniseed Syrup', 10, 1, 2),
('Chef Anton''s Cajun', 22, 2, 2),
('Chef Anton''s Gumbo Mix', 21.35, 2, 2 ),
('Green tea', 10, 6, 1);

-- TASK1
SELECT * 
FROM "Products" 
WHERE "ProductName" LIKE 'C%';

-- TASK2
SELECT * 
FROM "Products" 
WHERE "Price" = (SELECT MIN("Price") FROM "Products");

-- TASK3
SELECT SUM("Price") 
FROM "Products" 
JOIN "Suppliers" ON "Products"."SupplierID" = "Suppliers"."SupplierID" 
WHERE "Suppliers"."Country" = 'USA';

-- TASK4
SELECT DISTINCT "Suppliers"."SupplierID", "SupplierName", "City", "Country"
FROM "Suppliers"
JOIN "Products" ON "Products"."SupplierID" = "Suppliers"."SupplierID"
JOIN "Categories" ON "Products"."CategoryID" = "Categories"."CategoryID"
WHERE "Categories"."CategoryName" = 'Condiments';

-- TASK5
SELECT "SupplierName", SUM("Products"."Price") AS "TotalPrice"
FROM "Suppliers"
JOIN "Products" ON "Products"."SupplierID" = "Suppliers"."SupplierID"
GROUP BY "SupplierName"
ORDER BY "TotalPrice" DESC
LIMIT(1);