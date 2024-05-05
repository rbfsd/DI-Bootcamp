# inheritance = l'heritage

# class Animal():
#     def __init__(self, name):
#         self.name = name

    
# class Dog():
#     def bark(self):
#         print(f"{} barked, WAF !".format(self.name))



class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Dog(Animal):
    # pass
    def fetch_ball(self):
        print("I am a dog, and I love fetching balls")



rex = Dog("dog", 4, "wouaf")
print('This animal is a:', rex.type)
print('This dog has', rex.number_legs , ' legs')
print('This dog makes the sound ', rex.sound)
rex.make_sound()
rex.fetch_ball()


# exercise

class Circle:
    color = "red"

class NewCircle(Circle):
    color = "blue"

nc = NewCircle
print(nc.color)


class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

nc = NewCircle(1)
print(nc.diameter)

nc.grow()

print(nc.diameter)

# super() function 
# With the function, you can gain access to inherited methods that have been overwritten in a class object.

class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

class Dog(Animal):
    def __init__(self, type, number_legs, sound, fetch_ball):
        super().__init__(type, number_legs, sound)
        # Or : Animal.__init__(self,type, number_legs, sound)
        self.fetch_ball = fetch_ball

rex = Dog('dog', 4, "wouaf", True)
print('This animal is a:', rex.type)
# >> This animal is a dog

print('This dog has', rex.number_legs , ' legs')
# >> This dog has 4 legs

print('This dog makes the sound ', rex.sound)
# >> This dog makes the sound wouaf

print('Does this dog fetchs balls ? ', rex.fetch_ball)
# >> Does this dog fetchs balls ? True


# exercise
# Quelle est la différence entre ces 2 morceaux de code ?

class A(B):
    def __init__(self, *args, **kwargs)
        B.__init__(self, *args, **kwargs)
        pass


class A(B):
    def __init__(self, *args, **kwargs)
        super().__init__(*args, **kwargs)
        pass

""" La principale différence entre les deux est que
    la première méthode utilise une référence directe 
    à la classe parente (B.__init__) pour appeler son 
    constructeur, tandis que la deuxième méthode utilise 
    super() pour obtenir une référence dynamique à la 
    classe parente et appeler son constructeur. En général, 
    l'utilisation de super() est recommandée car elle rend le 
    code plus flexible et facilite la gestion de l'héritage multiple.
 """

class Door():
    def __init__(self):
        self.is_opened = False
    
    def open_door(self):
        if not self.is_opened:
            self.is_opened = True
        else:
            print('The door is already opened')
    
    def close_door(self):
        if self.is_opened:
            print('close the door.')
        else:
            print("It can't be closed because it's already closed")

class BlockedDoor(Door):
    def open_door(self):
        raise ValueError("Error: Cannot open a blocked door.")

    def close_door(self):
        raise ValueError("Error: Cannot close a blocked door.")
  