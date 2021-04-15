USE Scientists;

SELECT * FROM Scientists
	WHERE Name LIKE '%e%';

SELECT Name FROM Projects
	WHERE Name LIKE 'A%'
    ORDER BY Name;
    
SELECT Code, Name FROM Projects
	WHERE Code LIKE '%3%'
    ORDER BY Code;
    
SELECT Scientist, Project FROM AssignedTo
	WHERE Project IN ('Ast3', 'AeH3', 'Che1');
    
SELECT * FROM Projects
	WHERE Hours > 500;

SELECT * FROM Projects
	WHERE Hours BETWEEN 250 AND 800;
    
SELECT Name, Code FROM Projects
	WHERE Code NOT LIKE 'A%';
    
SELECT Name FROM Projects
	WHERE Code LIKE '%H%';