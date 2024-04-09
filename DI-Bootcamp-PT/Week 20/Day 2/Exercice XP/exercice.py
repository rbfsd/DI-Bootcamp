# exercice 1
def display_message():
    print("Hello everyone, I am student at Devloper Institute Ramt-Gan and I am learning fullstack course. At know I learn Python")

display_message()

# exercice 2
def favorite_book(title):
    print(f'one of my favorite book is {title}')

favorite_book('The Alchemist')

# exercice 3
def describe_city(city, country):
    print(f'{city} is  located in {country}.')

describe_city("New York", "USA")

# exercice 4
import random

def random_number(num):
    random_num = random.randint(1, 100)
    if num == random_num:
        print('Message de succès')
    else:
        print(f'Echec : vous avez entré {num} et le nombre aléatoire était {random_num}')

random_number(10)

# exercice 5
def make_shirt(size='large', text_of_msg='I love Python'):
    print(f'The size of the shirt is {size} and the message is "{text_of_msg}"')

make_shirt()
make_shirt('medium')
make_shirt('small','Python is awesome')

make_shirt(size='extra large', text_of_msg='Hello, world!')

# exercice 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] += ' the Great'

# Appel de la fonction show_magicians avec la liste de magiciens d'origine
show_magicians(magician_names)

# Mise à jour de la liste de magiciens en ajoutant "the Great" à chaque nom
make_great(magician_names)

# Affichage de la liste de magiciens mise à jour
show_magicians(magician_names)