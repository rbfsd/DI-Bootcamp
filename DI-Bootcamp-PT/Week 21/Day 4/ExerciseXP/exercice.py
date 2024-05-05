# exercise 1

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal_cat = Bengal("Bengal Cat", 4)
chartreux_cat = Chartreux("Chartreux Cat", 3)
siamese_cat = Siamese("Siamese Cat", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)
sara_pets.walk()

# exercice 2

class Dog():
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"{self.name} is barking, WAF !")

    def run_speed(self):
        speed = (self.weight/self.age)*10
        return f"{self.name} runing speed is {speed} km/h"
    
    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight

        if other_score > self_score:
            return f"{self.name} is a little guy, he can't fight with {other_dog.name}"
        else:
            return f"Let's see who will win the battle between {self.name} and {other_dog.name}, it could be tough..."

dog1 = Dog("Buddy", 5, 25)
dog2 = Dog("Max", 3, 20)
dog3 = Dog("Charlie", 4, 30)

dog1.bark()
print(dog1.run_speed())
print()

dog2.bark()
print(dog2.run_speed())
print()

dog3.bark()
print(dog3.run_speed())
print()

print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))


# exercice 4

class Family():
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"congratulations ! {kwargs['name']} is born into {self.last_name} familly.")

    def is_18(self,name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False
    
    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Relationship: {member['relationship']}")



# Create an instance of the Family class
my_family = Family(last_name="Smith")

# Add existing members to the family
my_family.members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'relationship': 'Parent'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'relationship': 'Parent'}
]

# Call the born method to add a new member
my_family.born(name='John', age=5, gender='Male', relationship='Child')

# Call the is_18 method to check if a member is over 18
print(my_family.is_18('Michael'))  # Output: True
print(my_family.is_18('John'))  # Output: False

# Call the family_presentation method to display family information
my_family.family_presentation()



# exercice 5

class Family:
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! {kwargs['name']} is born into the {self.last_name} family.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Relationship: {member['relationship']}")


class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{name}'s power: {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old.")

    def incredible_presentation(self):
        print("*Here is our powerful family*")
        super().family_presentation()


# Create an instance of TheIncredibles class
incredibles_family = TheIncredibles(last_name="Incredibles")

# Add members to the family
incredibles_family.members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'relationship': 'Parent', 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'relationship': 'Parent', 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

# Call the incredible_presentation method
incredibles_family.incredible_presentation()

# Use the born method to add Baby Jack with Unknown Power
incredibles_family.born(name='Jack', age=2, gender='Male', relationship='Child', power='Unknown Power', incredible_name='BabyJack')

# Call the incredible_presentation method again
incredibles_family.incredible_presentation()
