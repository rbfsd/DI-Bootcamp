# __repr__()

class Person:
  def __init__(self, name, age):
      self.name = name
      self.age  = age

  def __repr__(self):
      return f"{self.__class__.__name__} : {self.name} {self.age}"

newPerson = Person('Sarah', 24)

print(newPerson)
# >> Person : Sarah 24 
# __repr__ is the representation of an object

 #To overload a dunder method, we need to implement it in a class.

class Person:
  def __init__(self, name, lastName):
      self.name = name
      self.lastName = lastName


#Here we overloaded the method by redefining '__repr__ 'using 'def' and passed the argument '(self)'

def __repr__(self):

# We can write whatever we want inside this method, but we have to return an object.

      return f"{self.__class__.__name__} : {self.name} {self.lastName}"

def __add__(self,other):
      name = self.name[0] + other.name[1:]
      lastname = other.lastName
      return Person(name,lastname)

father = Person('John', 'Snow')
mother = Person('Kaleesi', 'MotherOfDragons')
# using the __add__() method
dragonChild = father + mother 

print(dragonChild)
# >>Person : Jaleesi MotherOfDragons