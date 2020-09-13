DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
    id int NOT NULL AUTO_INCREMENT,
    employee_first VARCHAR(25),
    employee_last VARCHAR(25),
    roleID INT,
    departmentID INT,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(25),
    salary DECIMAL(8,2),
    departmentID INT,
    PRIMARY KEY (id)
);

CREATE TABLE departments (
id int NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);


ALTER TABLE employees
ADD FOREIGN KEY (roleID) REFERENCES roles(id),
ADD FOREIGN KEY (departmentID) REFERENCES departments(id);

ALTER TABLE roles
ADD FOREIGN KEY (departmentID) REFERENCES departments(id)