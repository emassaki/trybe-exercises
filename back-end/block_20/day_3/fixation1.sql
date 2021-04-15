USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT CONCAT(first_name, ' ', last_name) AS name FROM customer
WHERE active = 0
AND first_name <> 'KENNETH'
ORDER BY name;

SELECT * FROM film
WHERE replacement_cost > 18 AND rating <> 'NC-17' AND rating <> 'R'
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT COUNT(*) FROM customer
WHERE active = 1 AND store_id = 1;

SELECT * FROM customer
WHERE active = 0 AND store_id = 1;

SELECT * FROM film
WHERE rating = 'NC-17' OR rating = 'R'
ORDER BY rental_rate, title;

SELECT * FROM film
WHERE title LIKE '%ace%';

SELECT * FROM film
WHERE description LIKE '%china';

SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM film
WHERE title LIKE '___gon%';

SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

SELECT * FROM customer
WHERE customer_id IN (269, 239, 126, 399, 142);

SELECT * FROM address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT email FROM customer
WHERE address_id IN (172,173,174,175,176);
SELECT email FROM customer
WHERE address_id BETWEEN 172 and 176;

SELECT * FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 and 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;

SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';
SELECT COUNT(*) FROM payment
WHERE payment_date LIKE '2005-05-25%';
SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-05-25 00:00:00' AND '2005-05-25 23:59:59';

SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN DATE('2005-07-01') AND DATE('2005-08-22');
SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT DATE(rental_date), YEAR(rental_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date) FROM rental
WHERE rental_id = 10330;

SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-07-28 22:00:00' AND '2005-07-28 23:59:59';
