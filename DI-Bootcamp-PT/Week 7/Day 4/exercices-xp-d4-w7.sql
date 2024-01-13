--EXERCISE 1
--ex 1
select * from language
select * from film
select language_id from film
--ex 2
select film.title,
film.description,
language.language_id,
language.name
from film
inner join language
on film.language_id = language.language_id
--ex 3
select film.title,
film.description,
language.language_id,
language.name
from film
full join language
on film.language_id = language.language_id
--ex 4
create table new_film(
	id serial primary key,
	name varchar(100)
)
insert into new_film(id, name) values(1,'Titanic'),(2,'Simba'),
(3,'Spiderman'),(4,'Will Hunting'),(5,'Nemo')

select * from new_film
--ex 5
create table customer_review(
	review_id serial primary key,
	film_id integer REFERENCES new_film(id) ON DELETE CASCADE,
	language_id integer,
	title varchar(50),
	score INTEGER CHECK (score >= 1 AND score <= 10),
	review_text TEXT,
	last_update TIMESTAMP
)

--ex 6
insert into customer_review(review_id,
							film_id,
							language_id,
							title,
							score,
							review_text,
							last_update
						   ) values
						   (1, 1, 1, 'Great Movie!', 9, 'This movie was fantastic.', NOW()),
    (2, 2, 2, 'Awesome Film', 8, 'I really enjoyed watching it.', NOW()),
    (3, 3, 1, 'Disappointing', 4, 'Expected more from this film.', NOW());

select * from customer_review

--ex 7
select 
new_film.name,
customer_review.title,
customer_review.score,
customer_review.review_text,
customer_review.last_update
from customer_review 
inner join new_film
on customer_review.film_id = new_film.id

--
DELETE FROM new_film
WHERE id = 1;

--WE can see the movie and the review from customer_review disppear

--EXERCISE 2
select * from language
--
select * from film
--
select film.title,
film.description,
language.language_id,
language.name
from film
inner join language
on film.language_id = language.language_id
--ex 1
UPDATE film
SET language_id = 2
WHERE film_id > 300;

--ex 2
--the foreign key is on column "address_id"
--so we are mandatey to connect_id from address table

--ex3
DROP TABLE customer_review;
--easy step don't need extra checking

--ex 4
select * from rental
--
select rental_id,rental_date, return_date from rental
where last_update > return_date
--15 861 rentals are still outstanding

--ex 5
select * from payment
--
select 
rental.rental_id,
payment.amount
from rental
inner join payment 
on rental.rental_id = payment.rental_id
where rental.last_update > rental.return_date
order by payment.amount DESC
LIMIT 30

--ex 6
--1
select
film.title,
actor.first_name,
actor.last_name
from film
inner join film_actor
on film.film_id = film_actor.film_id
inner join actor
on actor.actor_id = film_actor.actor_id
where actor.first_name='Penelope' 
AND actor.last_name = 'Monroe' 
AND film.fulltext LIKE '%sumo%';--this line dont working

--2
select * from film
--
select * from film_category
--
select * from category
--
select length from film
--
select film.title,
film.film_id,
film.rating,
film_category.film_id,
category.name
from film
inner join film_category
on film.film_id = film_category.film_id
inner join category
on film_category.category_id = category.category_id
where category.name = 'Documentary'
AND film.rating = 'R'
AND film.length < 60
--THE MOVIE IS "Cupboard Sinners"

--3
select customer_id,first_name, last_name from customer
where first_name = 'Matthew' AND last_name = 'Mahan'

--4














