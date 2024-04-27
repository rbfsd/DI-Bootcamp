# object oriented programming: POO 

# object oriented programming mean structuring programs 
# so that properties and behaviors are bundled into individual objects

class Dog():
    pass

shelter_dog = Dog()

# cibler un attribut
shelter_dog.color = 'Brown'

# __init__ method
# Lorsqu'un objet est créé, python exécute automatiquement la __init__()méthode (il faut l'appeler ainsi) de la classe.
# Cette méthode doit avoir au moins un argument self(il n'est pas nécessaire qu'elle soit appelée self,mais une convention python).
# selffait référence à l'objet lui-même.

class Dog():
    def __init__(self):
        print("a new dog has been initializes !")
shelter_dog = Dog()


class Dog():
    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)

shelter_dog = Dog(name_of_the_dog="Rex")
# or
shelter_dog = Dog("Rex")


class Person():
    def __init__(self, name, age):
        self.name = name
        self.age = age 

first_person = Person("John", 30)

print(first_person.name)
print(first_person.age)

# exercice
class Point():
    def __init__(self, x, y):
        self.x = x
        self.y = y

## create an instance of the class
p = Point(3,4)

## access the attributes
print("p.x is:", p.x)
print("p.y is:", p.y)

# la methode __init__ en python sert a initialiser les attributs
# d'une instance lorqu'on cree un nouvel objet de cette class


# bark() method

class Dog():
    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog

    def bark(self):
        print("{} barks ! WAF".format(self.name))

    def walk(self, number_of_meters):
        print("{} walked {} meters".format(self.name, number_of_meters))

    def rename(self, new_name):
        self.name = new_name

shelter_dog = Dog("Rex")
shelter_dog.bark()
shelter_dog.walk(13)
shelter_dog.rename("Max")

# exercice 
class Person():
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def show_details(self):
    print("Hello my name is " + self.name)

first_person = Person("John", 36)
first_person.show_details()


class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)
