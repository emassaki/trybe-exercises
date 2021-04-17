SELECT B.domestic_sales, B.international_sales, M.title FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M
ON B.movie_id = M.id;

SELECT B.* FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M
ON B.movie_id = M.id
WHERE B.international_sales > B.domestic_sales;

SELECT B.rating, M.title FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M
ON B.movie_id = M.id
ORDER BY rating DESC;

SELECT T.*, M.* FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

SELECT M.*, T.* FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

SELECT title FROM Pixar.Movies
WHERE id IN (SELECT movie_id FROM Pixar.BoxOffice AS B WHERE rating > 7.5);
SELECT title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.rating > 7.5;

SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN (SELECT id FROM Pixar.Movies AS B WHERE year > 2009);
SELECT rating FROM Pixar.BoxOffice AS B
INNER JOIN Pixar.Movies AS M
ON M.id = B.movie_id
WHERE M.year > 2009;

SELECT T.`name`, T.location FROM Pixar.Theater AS T
WHERE EXISTS (SELECT * FROM Pixar.Movies AS M WHERE T.id = M.theater_id);

SELECT T.`name`, T.location FROM Pixar.Theater AS T
WHERE NOT EXISTS (SELECT * FROM Pixar.Movies AS M WHERE T.id = M.theater_id);
