# exercice 1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Instantiate three Cat objects using the code provided above.
cat1 = Cat("Mitssy", 7)
cat2 = Cat("augousto", 9)
cat3 = Cat("Whiskers", 4)

# Outside of the class, create a function that finds the oldest cat and returns the cat.
def find_oldest(cats):
    oldest_cat = None
    max_age = 0
    for cat in cats:
        if cat.age > max_age:
            max_age = cat.age
            oldest_cat = cat
    return oldest_cat

cats_list = [cat1, cat2, cat3]

oldest = find_oldest(cats_list)

if oldest:
    print(f"the oldest cat is {oldest.name} with an age of {oldest.age}")
else:
    print("No cats found.")


# exercice 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print("{} goes woof!!".format(self.name))

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")


davids_dog = Dog('Rex', 50)
sarahs_dog = Dog("Teacup", 20)

# calling the methods 
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog details: Name - {sarahs_dog.name}, Height - {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.
if  davids_dog.height > sarahs_dog.height :
    print(f"{davids_dog.name} is bigger")
elif sarahs_dog.height > davids_dog.height:
    print(f"{sarahs_dog.name} is bigger")
else:
    print ("Both dog have the same height")



# exercice 3

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# exercice 4

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.zoo_name = zoo_name
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        self.animals.sort()
        animal_groups = {}
        for animal in self.animals:
            if animal[0] not in animal_groups:
                animal_groups[animal[0]] = [animal]
            else:
                animal_groups[animal[0]].append(animal)
        return animal_groups

    def get_groups(self):
        animal_groups = self.sort_animals()
        for group_number, animals in enumerate(animal_groups.values(), start=1):
            print(f"{group_number}: {animals}")


ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Elephant")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Lion")
ramat_gan_safari.get_animals()
ramat_gan_safari.get_groups()
