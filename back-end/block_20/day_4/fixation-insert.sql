USE sakila;

INSERT IGNORE INTO staff (first_name, last_name, address_id, email, store_id, active, username, password, last_update)  VALUES
	('Antony', 'Simms', 5, 'Antonny.Simms@sakilastaff.com', 2, 1, 'Antonny', '123456789', now()),     
	('Eric', 'Clapton', 2, 'Eric.Clapton@sakilastaff.com', 1, 1, 'Clap', 'abcdefghij', now());
    
INSERT IGNORE INTO actor (first_name, last_name, last_update)
	SELECT first_name, last_name, last_update FROM customer
	LIMIT 5;
    
INSERT IGNORE INTO category (name) VALUES 
	('Anime'),
	('Stop motion'),
	('Fiction');
    
INSERT IGNORE INTO store (manager_staff_id, address_id) VALUES (3, 3);