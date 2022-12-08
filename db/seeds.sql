INSERT INTO department (name)
VALUES 
('Food Service'),
('Advertising'),
('Cleaning');


INSERT INTO role (title, salary, department_id)
VALUES
('Cashier', 22, 1),
('Janitor', 20, 3),
('Burger-Flipper', 15, 1),
('Sign-Twirler', 11, 2);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Jimbo", "McGee", 4, 3),
("Brad", "Pitt", 3, null ),
("Selena", "Gomez", 1, null),
("Isaac", "Newton", 2, 3);