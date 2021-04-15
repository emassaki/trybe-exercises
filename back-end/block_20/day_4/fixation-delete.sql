USE sakila;

SELECT * FROM actor WHERE first_name = 'karl';
SELECT * FROM film_actor WHERE actor_id = 12;
DELETE FROM film_actor
	WHERE actor_id = 12;
DELETE FROM actor
	WHERE first_name = 'KARL';
    
SELECT * FROM actor where first_name = 'matthew';
SELECT * FROM film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM film_actor
	WHERE actor_id IN (8,103,181);
DELETE FROM actor
	WHERE first_name = 'MATTHEW';
    
SELECT * FROM film_text WHERE description LIKE '%saga%';
DELETE FROM film_text
	WHERE description LIKE '%SAGA%';
    
SELECT * FROM film_actor;
SELECT * FROM film_category;
TRUNCATE film_actor;
TRUNCATE film_category;
