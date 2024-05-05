""" Encapsulation,Polymorphism,Inheritance
"""

#Encapsulation:

class Computer():
    def __init__(self):
        self.name = "Apple Computer"
        self.maxprice = 900

    def sell(self):
        print(f"Selling Price: {self.__max_price}")

    # def __sell(self):  #private       
    #     print('This is private method')

    def set_max_price(self, price):
        self.__max_price = price

c = Computer()
# c.__sell()

# polymorphism

""" en programmation le polimorphisme 
designe des classes differentes ou lées qui utilisent les memes noms
que leur fonction """

class Parrot():

    def fly(self):
        print('parrot can fly')

    def swim(self):
        print("parrot can't swim")

class Pinguin():

    def fly(self):
        print("penguin can't fly")

    def  swim(self):
        print("pinguin can swim")

# common interface
def flying_test(bird):
    bird.fly()


#instantiate objects
blu = Parrot()
peggy = Pinguin()

# passing the object
flying_test(blu)
# >> Parrot can fly

flying_test(peggy)
# >> Penguin can't fly



# heritage multiple 
class Alien():
    def __init__(self, name, planet):
        self.name = name
        self.planet = planet

    def fly(self):
        print(self.name, 'is flying!')

    def sleep(self):
        print("Aliens don't sleep")

class Animal():
    def __init__(self, name):
        self.name = name

    def sleep(self):
        print("zzzZZZZZ")

class Dog(Animal):
    def bark(self):
        print("{} barked, WAF !".format(self.name))

class AlienDog(Alien, Dog):
    def bark(self):
        print("{} barked, 0ul10ul0u (that's how aliens dogs bark..) !".format(self.name))


my_normal_dog = Dog("Roger")
my_normal_dog.sleep()
# >> zzzZZZZZ

my_normal_dog.bark()
# >> Roger barked, WAF !

my_alien_dog = AlienDog("Rex", "Neptune")
print(my_alien_dog.planet)
# >> Neptune

my_alien_dog.fly()
# >> Rex is flying!

my_alien_dog.sleep()
# >> Aliens don't sleep

my_alien_dog.bark()
# >> Rex barked, 0ul10ul0u (that's how aliens dogs bark..) !
