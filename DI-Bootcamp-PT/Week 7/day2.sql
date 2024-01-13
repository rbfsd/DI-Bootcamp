-- Day 1

-- CREATE TABLE SYNTAX


-- Constraints
-- NOT NULL
-- UNIQUE 
-- PRIMARY KEY 
-- FOEIGN KEY 

-- create table test4 (
-- 	user_id serial PRIMARY KEY,
-- 	username varchar(50) NOT NULL UNIQUE,
-- 	password (1000) NOT NULL,
-- 	email varchar(255) NOT NULL UNIQUE 
-- )

create table products (
	id serial PRIMARY KEY,
	name varchar(50) not null unique,
	price integer not null
)

-- INSERT statement
insert into products (price, name)
values (null, 'iPhone17'),
-- (800, 'iPhone'),
-- (500, 'iWatch'),
-- (1000, 'iCar')


SELECT *  FROM products

-- colum aliases
select price as aaa, name as product_name from products

-- ORDER BY
select * from products order by price desc, name 

-- WHERE 
select * from products 
where name = 'iPhone'

-- Operator	Description
-- =			Equal
-- >			Greater than
-- <			Less than
-- >=			Greater than or equal
-- <=			Less than or equal
-- <> or !=		Not equal
-- AND			Logical operator AND
-- OR			Logical operator OR
-- IN			Return true if a value matches any value in a list
-- BETWEEN		Return true if a value is between a range of values
-- LIKE			Return true if a value matches a pattern
-- IS NULL		Return true if a value is NULL
-- NOT			Negate the result of other operators

--- UPDATE statment
update products set name = 'aaa', price= 111 where id = 6

delete from products where id = 6


select nextval('products_id_seq');


-- delete all data 

select * from book
-- delete from book;
-- truncate book;
-- drop table test3;

select * from products;
-- ALTER  
ALTER TABLE products ADD COLUMN description varchar(1000);
ALTER TABLE products RENAME description TO product_desc;
ALTER TABLE products DROP COLUMN product_desc;

-- Aggregate function
-- COUNT 
-- SUM
-- AVG
-- MAX / MIN

select count(1) from products 
select min(price) from products

select name from products where length(name) >= 4;


-- JOIN 



create table description (
	id serial primary key,
	description varchar(500),
	product_id integer
)

insert into description (description, product_id)
values
('Amazing iPad', 1),
('Great iPhone', 2),
('Best car', 4),
('Color car', 20),
('Best key', 5)


select * from products
select * from description

select products.id , 
		products.name, 
 		products.price, 
		description.description,
		description.id 
from products
inner join description
on products.id = description.product_id

select products.id , 
		products.name, 
 		products.price, 
		description.description,
		description.id 
from products, description
where products.id = description.product_id

-- left join / right / full join
select products.id , 
		products.name, 
 		products.price, 
		description.description,
		description.id 
from products
full join description
on products.id = description.product_id



