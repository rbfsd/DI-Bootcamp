import random

class Card:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self, suit, value):
        if suit in Card.suits and value in Card.values:
            self.suit = suit
            self.value = value
        else:
            raise ValueError("Invalid suit or value for card")

    def __repr__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        self.cards = [Card(suit, value) for suit in Card.suits for value in Card.values]
        self.shuffle()

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if self.cards:
            return self.cards.pop()
        else:
            raise ValueError("All cards have been dealt")

# Example usage
deck = Deck()
print(deck.deal())
print(deck.deal())
deck.shuffle()
print(deck.deal())


""" 
Part 1: Quiz
1. What is a class?
A class is a blueprint or template for creating objects (instances) in object-oriented programming. It defines a set of attributes (data) and methods (functions) that the created objects will have. A class encapsulates data for the object and methods to manipulate that data.

2. What is an instance?
An instance is a specific object created from a class. It contains real values instead of variables defined in the class. Each instance has its own unique set of data attributes as defined by the class.

3. What is encapsulation?
Encapsulation is a fundamental concept in object-oriented programming that refers to bundling the data (attributes) and methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of the object's components, which is a means of preventing accidental interference and misuse of the methods and data.

4. What is abstraction?
Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. It helps to reduce programming complexity and effort by allowing the programmer to focus on interactions at a higher level without needing to manage all the details.

5. What is inheritance?
Inheritance is a mechanism in object-oriented programming that allows one class (the subclass or derived class) to inherit attributes and methods from another class (the superclass or base class). This promotes code reuse and can create a hierarchical relationship between classes.

6. What is multiple inheritance?
Multiple inheritance is a feature in some object-oriented programming languages where a class can inherit attributes and methods from more than one parent class. This allows for more complex interactions and reuse of code from different classes but can lead to complications like the diamond problem.

7. What is polymorphism?
Polymorphism is the ability of different classes to respond to the same method call in different ways. It allows for one interface to be used for a general class of actions, making it easier to write more generic and reusable code. The two main types of polymorphism are compile-time (method overloading) and run-time (method overriding).

8. What is method resolution order or MRO?
Method Resolution Order (MRO) is the order in which methods are inherited from parent classes in the presence of multiple inheritance. It determines the hierarchy in which the classes are traversed when searching for a method. In Python, MRO follows the C3 linearization algorithm, ensuring a consistent order. """