/* 
select customer.first_name,
	customer.last_name,
	address.address,
	address.district,
	city.city,
	country.country
from customer
inner join address
on customer.address_id = address.address_id
inner join city
on address.city_id = city.city_id
inner join country
on city.country_id = country.country_id
*/

/*EXERCICE 2*/
/*1*/
/*
select * from customer;
*/
/*2*/
/*
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customer;
*/
/*3*/
/*
SELECT  DISTINCT create_date
FROM customer;
*/
/*4*/
/*
SELECT * from customer
Order by first_name DESC ;
*/
/*5*/
/*
SELECT film_id, title, description, release_year, rental_rate from film
order by rental_rate asc
*/
/*6*/
/*
SELECT address, phone from address where district = 'Texas'
*/
/*7*/
/*
SELECT description from film where film_id= 15 OR film_id=150
*/
/*8*/
/*
SELECT film_id, title, description, length, rental_rate FROM film 
WHERE title = 'Will Hunting';
*/
/*9*/
/*
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title LIKE CONCAT('Ti%', '%');
*/
/*10*/
/*
SELECT rental_rate, title from film order by rental_rate asc limit 10
*/
/*11 BONUS */
/*
SELECT rental_rate, title from film 
where film_id > 10 AND film_id < 20 -- I want to use index (left column )
order by rental_rate asc 
*/
/*12*/
/*
SELECT 
customer.first_name,
customer.last_name,
payment.amount,
payment.payment_date
from customer 
inner join payment
on customer.customer_id = payment.customer_id;
*/
/*13*/
--don-t understand
/*14*/
/*
SELECT 
city.city,
country.country
from city
inner join country 
on city.country_id = country.country_id;
*/
/*15*/












	

