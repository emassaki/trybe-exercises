USE sakila;

DELIMITER $$
CREATE PROCEDURE buscarAtoresMaisPopularesQuantidadeFilmes()
BEGIN
	SELECT actor_id, COUNT(*) AS appearences FROM film_actor
    GROUP BY actor_id
    ORDER BY appearences DESC
    LIMIT 10;
END $$
DELIMITER ;
CALL buscarAtoresMaisPopularesQuantidadeFilmes();

DELIMITER $$
CREATE PROCEDURE buscarFilme(IN category_name VARCHAR(100))
BEGIN
	SELECT F.film_id, F.title, FC.category_id, C.name FROM sakila.film AS F
    INNER JOIN sakila.film_category AS FC ON F.film_id = FC.film_id
    INNER JOIN sakila.category AS C ON FC.category_id = C.category_id
    WHERE C.name = category_name;
END $$
DELIMITER ;
CALL buscarFilme('Horror');

DELIMITER $$
CREATE PROCEDURE consultarStatusCliente(IN customer_email VARCHAR(100), OUT isActive INT)
BEGIN
	SELECT `active` FROM customer
    WHERE email LIKE CONCAT('%', customer_email, '%')
    INTO isActive;
END $$
DELIMITER ;
CALL consultarStatusCliente('sandra.martin', @isActive);
SELECT @isActive;

