SELECT M.* FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B
ON M.id = B.movie_id
WHERE B.rating > 8;

SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director AND t1.title <> t2.title;

SELECT title FROM Pixar.Movies
WHERE id IN (SELECT movie_id FROM Pixar.BoxOffice WHERE (domestic_sales + international_sales) >= 500000000)
AND length_minutes > 110;
SELECT M.title FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B
ON M.id = B.movie_id
WHERE (B.domestic_sales + B.international_sales) >= 500000000 AND M.length_minutes > 110;
