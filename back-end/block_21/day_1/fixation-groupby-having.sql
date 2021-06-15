SELECT active, COUNT(*) AS ativos FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active
ORDER BY store_id, active;

SELECT rating, AVG(length) AS media FROM sakila.film
GROUP BY rating
ORDER BY media DESC;

SELECT district, COUNT(*) quantity FROM sakila.address
GROUP BY district
ORDER BY quantity DESC;

SELECT rating, AVG(length) AS media
FROM sakila.film
GROUP BY rating
HAVING media BETWEEN 115 and 121.5;

SELECT rating, SUM(replacement_cost) AS custo
FROM sakila.film
GROUP by rating
HAVING custo > 3950.50
ORDER BY custo;