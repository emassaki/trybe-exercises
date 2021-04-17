SELECT Id, Title FROM hotel.Books AS b
WHERE NOT EXISTS (SELECT * FROM hotel.Books_Lent WHERE b.Id = book_id);

SELECT Id, Title FROM hotel.Books AS b
WHERE EXISTS (SELECT * FROM hotel.Books_Lent WHERE returned = 0 AND b.Title LIKE ('%lost%'));

SELECT `Name` FROM hotel.Customers AS cust
WHERE NOT EXISTS (SELECT * FROM hotel.CarSales WHERE cust.CustomerId = CustomerID);

SELECT * FROM hotel.Cars;
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;
SELECT CU.`Name`, C.`Name` FROM hotel.Cars AS C
INNER JOIN hotel.Customers AS CU	
WHERE EXISTS (SELECT * FROM hotel.CarSales AS CS WHERE CU.CustomerId = CS.CustomerID AND C.Id = CS.CarID)
