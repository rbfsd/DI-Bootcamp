# class atributes

# on peut definir un attribut de classe comme ici le roi des chiens

class Dog():
    number_of_dogs = 0
    dogs_king = "Bernie IV"

    def __init__(self,name_of_the_dog):
        print ("a new dog has been initialized !")
        print ("his name is ", name_of_the_dog)
        self.name = name_of_the_dog
        # increment the number of dog
        Dog.number_of_dogs += 1

    def bark(self):
        print("{} barks ! WAF".format(self.name))

    def walk(self, number_of_meters):
        print("{} walked {} meters".format(self.name, number_of_meters))

    def rename(self, new_name):
        self.name = new_name

my_dog = Dog("Rex")
my_dog.rename("Paul")
print("The king of the dogs is:", Dog.dogs_king)
print("Curently, there are {} dogs".format(Dog.number_of_dogs))


# exercice 
# analyse the code below what will be th eoutput and explains the goals and methods
class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
       return Circle.color

circle1 = Circle(2)
print(circle1.color)
print(Circle.color)
print(circle1.get_color())
circle1.grow(3)
print(circle1.diameter)

"""
__init__ : Initialise un objet Circle avec un diamètre donné.
grow : Augmente le diamètre du cercle par un facteur spécifié.
get_color : Retourne la couleur du cercle, qui est une variable de classe partagée entre toutes les instances. 
"""

# @Staticmethod

class MyClass:
  @staticmethod
  def add(a, b): 
    return a + b

print(MyClass.add(3, 6))

class Man(Person):
    sex = "Male"

    @staticmethod
    def get_nicknames():
        return ["Bro", "Dude", "Buddy"]


# @classmethod

class MyClass:
  __counter = 0

  @classmethod
  def add(cls,a): 
    return cls.__counter + a

my_class_add = MyClass.add(3)
print(my_class_add)
# >> 3

new_class = MyClass()
new_class.__counter = 1

print(new_class.add(3))
# >> 3

# The output is still three because the method add refers to the class definition, not the counter of the new_class instance


# @property

# without @property
class MyClass:
  def __init__(self, first_name, last_name):
    self.first_name = first_name
    self.last_name = last_name

  def email(self): 
    return "{}.{}@gmail.com".format(self.first_name,  self.last_name )

newClass = MyClass("John", "Doe")
print(newClass.email())
# >> John.Doe@gmail.com

# with @property
class MyClass:
  def __init__(self, first_name, last_name):
    self.__first_name = first_name
    self.__last_name = last_name

  @property
  def email(self): 
    return "{}.{}@gmail.com".format(self.__first_name,  self.__last_name )

newClass = MyClass("John", "Doe")

print(newClass.email())
# >> TypeError: 'str' object is not callable

print(newClass.email)
# >> John.Doe@gmail.com

# setter
class MyClass:
  def __init__(self, first_name, last_name):
    self.__first_name = first_name
    self.__last_name = last_name

  @property
  def email(self): 
    return "{}.{}@gmail.com".format(self.__first_name,  self.__last_name )

  @email.setter
  def email(self, name): 
    self.__first_name = name

newClass = MyClass("John", "Doe")
newClass.email = "Sarah"
print(newClass.email)
# >> Sarah.Doe@gmail.com