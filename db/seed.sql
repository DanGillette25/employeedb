USE employees_db;

INSERT INTO departments (name) values ("Accounting");
INSERT INTO departments (name) values ("Sales");
INSERT INTO departments (name) values ("Engineering");
INSERT INTO departments (name) values ("Product Management");
INSERT INTO departments (name) values ("Marketing");

INSERT INTO roles (title, salary, departmentID) values ("Accountant", 65000, 1);
INSERT INTO roles (title, salary, departmentID) values ("Financial Analyst", 82000, 1);
INSERT INTO roles (title, salary, departmentID) values ("Sales Development Rep", 80000, 2);
INSERT INTO roles (title, salary, departmentID) values ("Account Executive", 145000, 2);
INSERT INTO roles (title, salary, departmentID) values ("Software Engineer", 150000, 3);
INSERT INTO roles (title, salary, departmentID) values ("Project Manager", 95000, 3);
INSERT INTO roles (title, salary, departmentID) values ("Product Manager", 125000, 4);
INSERT INTO roles (title, salary, departmentID) values ("Product Analyst", 75000, 4);
INSERT INTO roles (title, salary, departmentID) values ("Marketing Manager", 62000, 5);
INSERT INTO roles (title, salary, departmentID) values ("Campaign Manager", 70000, 5);

INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Amy", "Johnson", 1, 1);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("James", "Davis", 1, 1);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Jitendra", "Kumar", 2, 1);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Carrie", "Smith", 2, 1);

INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Mac", "Davidson", 3, 2);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("John", "Bundy", 3, 2);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("John", "Johnson", 4, 2);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Jim", "Davis", 4, 2);

INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Kevin", "Donaldson", 5, 3);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Michael", "Smith", 5, 3);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Shane", "Jameson", 6, 3);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Keith", "Johnson", 6, 3);

INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Casey", "Smithsonian", 7, 4);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Jan", "Anderson", 7, 4);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Richard", "Harrington", 8, 4);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Barry", "Covington", 8, 4);

INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Andrew", "Andrews", 9, 5);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Zach", "Carson", 9, 5);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Catherine", "O'Brien", 10, 5);
INSERT INTO employees(employee_first, employee_last, roleID, departmentID) values ("Don", "Donaldson", 10, 5);
