--Part 1
--ex 1
create table customer(
	id serial primary key,
	first_name varchar(50),
	last_name varchar(50) NOT NULL
)

create table customer_profile(
	id serial primary key,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id integer
)
--ex 2
insert into customer(id,first_name,last_name) 
values(1,'Jhon', 'Doe'),(2,'Jerome', 'Lalu'),(3,'Lea', 'Rive')
select * from customer
--ex 3
insert into customer_profile(id, isLoggedIn) 
values (1, true), (2, false)
select * from customer_profile

--ex 4
select customer.first_name,
customer_profile.isLoggedIn,
customer.id
from customer
left join customer_profile
on customer.id = customer_profile.id

--Part 2
--ex 1
create table book(
	book_id serial primary key,
	titlle varchar(50) not null,
	author varchar(50) not null
)
--ex 2
insert into book( titlle, author)
values('Alice in Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')
select * from book

--ex 3
create table student(
	student_id serial primary key,
	name varchar(50) not null,
	age integer check(age >0 AND age <15)
)

--ex 4
insert into student(name,age)
values ('John',12),('Lera',11),('Patrick',10),('Bob',14)
select * from student

--ex 5
create table library(
	book_fk_id integer references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_id integer references student(student_id)ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date DATE
)

--ex 6
insert into library(book_fk_id,student_id,borrowed_date)
values(1,1,'2022-02-15'),(3,4,'2021-03-03'),
(1,2,'2021-05-23'),(2,4,'2021-08-12')

--ex 7
select * from library
--
select student.name,
book.titlle
from student 
inner join book 
on student.student_id = book.book_id
--
select student.age,
book.titlle
from student 
left join book
on student.student_id = book.book_id
where book.titlle = 'Alice in Wonderland'
--the average age is 12
--
DELETE FROM student
WHERE student_id = 1; 
-- all the line disappear












