INSERT INTO "Suppliers" ("SupplierName", "City", "Country") VALUES ('Exotic Liquid', 'London', 'UK') RETURNING *;
INSERT INTO "Suppliers" ("SupplierName", "City", "Country") VALUES ('New Orleans Cajun Delights', 'New Orleans', 'USA') RETURNING *;
INSERT INTO "Suppliers" ("SupplierName", "City", "Country") VALUES ('Grandma Kelly’s Homestead', 'Ann Arbor', 'USA') RETURNING *;
INSERT INTO "Suppliers" ("SupplierName", "City", "Country") VALUES ('Tokyo Traders', 'Tokyo', 'Japan') RETURNING *;
INSERT INTO "Suppliers" ("SupplierName", "City", "Country") VALUES ('Cooperativa de Quesos ‘Las Cabras’', 'Oviedo', 'Spain') RETURNING *;
INSERT INTO "Suppliers" ("SupplierName", "City", "Country") VALUES ('Norske Meierier’', 'Lviv', 'Ukraine') RETURNING *;

INSERT INTO "Categories" ("CategoryName", "Description") VALUES ('Beverages', 'Soft drinks, coffees, teas, beers, and ales') RETURNING *;
INSERT INTO "Categories" ("CategoryName", "Description") VALUES ('Condiments', 'Sweet and savory sauces, relishes, spreads, and seasonings') RETURNING *;
INSERT INTO "Categories" ("CategoryName", "Description") VALUES ('Confections', 'Desserts, candies, and sweet breads') RETURNING *;
INSERT INTO "Categories" ("CategoryName", "Description") VALUES ('Dairy Products', 'Cheeses') RETURNING *;
INSERT INTO "Categories" ("CategoryName", "Description") VALUES ('Grains/Cereals', 'Breads, crackers, pasta, and cereal') RETURNING *;

INSERT INTO "Products" ("ProductName","Price","SupplierID","CategoryID") VALUES ('Green tea', '10', '6','1') RETURNING *;