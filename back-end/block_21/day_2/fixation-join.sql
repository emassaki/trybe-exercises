
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS `name`, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.district
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE ('%rene%');

SELECT c.first_name, COUNT(a.address)
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount) AS avg_amount
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(payment_date) = '2006'
GROUP BY s.first_name, s.last_name;

SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film as f
ON fa.film_id = f.film_id;

SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length
HAVING t1.rental_duration BETWEEN 2 AND 4;