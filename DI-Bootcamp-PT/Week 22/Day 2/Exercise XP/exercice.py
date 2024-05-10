# exercice 1/ Currencies

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount}, {self.currency}"
    
    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount}, {self.currency}"
    
    def __add__(self, other):
        if isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            else:
                return Currency(self.currency, self.amount + other.amount)
        else:
            raise TypeError("Unsupported operand type for +: Currency and {}".format(type(other)))

    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
        elif isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            else:
                self.amount += other.amount
        else:
            raise TypeError("Unsupported operand type for +=: Currency and {}".format(type(other)))
        return self

# exercice 2

import func
from func import addition as ad


# exercice 3

import random
import string

def generate_random_string(length):
    letters = string.ascii_letters
    random_string = ''.join(random.choice(letters) for _ in range(length))
    return random_string

random_string = generate_random_string(5)
print(random_string)


# exercice 4

from datetime import datetime  # Import datetime from the datetime module

def display_current_date():
    current_date = datetime.now().date()
    print("Current date:", current_date)

display_current_date()


# exercice 5

from datetime import datetime

def display_time_until_january_1st():
    current_date = datetime.now().date()
    january_1st = datetime(current_date.year + 1, 1, 1).date()  # January 1st of next year
    time_left = january_1st - current_date
    print(f"The 1st of January is in {time_left.days} days and {time_left.seconds // 3600}:{(time_left.seconds % 3600) // 60}:{time_left.seconds % 60} hours.")

# Call the function to display the time left until January 1st
display_time_until_january_1st()


# exercice 6:  Birthday And Minutes

def minutes_in_lives(birthdate):
    current_date = datetime.now()
    birth_date = datetime.strptime(birthdate, '%Y-%m-%d')

    minutes_in_lives = (current_date - birth_date).total_seconds() / 60
    
    return f"You have lived for {minutes_in_lives:.2f} minutes."

# Example usage
birthdate = '1990-05-15'  # Change this to the user's birthdate
message = minutes_in_lives(birthdate)
print(message)


# exercice 7

from faker import Faker
fake = Faker() 

users = []


def add_user():
    # generate fake data 
    name = fake.name()
    address = fake.address()
    language_code = fake.language_code()

    user_dict = {'name': name, 'address': address, 'language_code': language_code}
    users.append(user_dict)

# add_user(fake.name(), fake.address(), fake.language_code())
add_user()
print(users)