SELECT * FROM Pixar.BoxOffice;
UPDATE Pixar.BoxOffice
	SET rating = 9.0
	WHERE domestic_sales > 400000000;
    
SELECT * FROM Pixar.BoxOffice;
UPDATE Pixar.BoxOffice
	SET rating = 6.0
	WHERE international_sales < 300000000 AND domestic_sales > 200000000;
    
SELECT * FROM Pixar.Movies WHERE length_minutes < 100;
SELECT * FROM Pixar.BoxOffice;
DELETE FROM Pixar.BoxOffice
	WHERE movie_id IN (SELECT id FROM Pixar.Movies WHERE length_minutes < 100);
DELETE FROM Pixar.Movies
	WHERE length_minutes < 100;